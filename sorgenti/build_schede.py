# -*- coding: utf-8 -*-
"""Converte le 12 schede informative (Artifact) in pagine statiche del sito: schede/<slug>.html"""
import os, re, glob, json, shutil
from config import *
from content import SCHEDE, SCHEDE_BY_SLUG, SCHEDE_RELATED, OLD_URLS, S
from partials import ICON, esc, jsonld, dentist_ref, breadcrumb, FAVICONS

OUT = os.path.join(ROOT, 'schede')
os.makedirs(OUT, exist_ok=True)

def load_sources():
    srcs = {}
    files = glob.glob(os.path.join(SRC_SCHEDE, '*', 'index.html')) + [os.path.join(SRC_SCHEDE, 'impianto-dentale-src.html')]
    for f in files:
        h = open(f, encoding='utf8').read()
        t = re.search(r'<title>(.*?)</title>', h, re.S).group(1).strip()
        srcs[t] = h
    return srcs

def strip_tags(s):
    s = re.sub(r'<[^>]+>', '', s)
    return re.sub(r'\s+', ' ', s.replace('&nbsp;', ' ')).strip()

def unent(s):
    import html
    return html.unescape(s)

def faq_pairs(markup):
    sec = re.search(r'id="domande".*?</section>', markup, re.S)
    if not sec: return []
    out = []
    for m in re.finditer(r'<details[^>]*>\s*<summary>(.*?)</summary>\s*<p>(.*?)</p>', sec.group(0), re.S):
        out.append((unent(strip_tags(m.group(1))), unent(strip_tags(m.group(2)))))
    return out

def build_one(sc, h):
    slug = sc['slug']
    body = h.split('<body>', 1)[1]
    style = re.search(r'<style>(.*?)</style>', body, re.S).group(1)
    i0 = body.index('<header class="top">')
    i1 = body.index('<script src="https://cdn.jsdelivr')
    markup = body[i0:i1]
    scripts = body[i1:]
    scripts = re.sub(r'</body>\s*</html>\s*$', '', scripts.strip())
    scripts = scripts.replace('<script src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js"></script>', '<script src="vendor/qrcode.min.js"></script>')
    assert 'jsdelivr' not in scripts and 'googleapis' not in markup

    # --- adattamenti di marcatura ---
    markup = re.sub(r'<a class="brand" href="#cose">.*?</a>',
        '<a class="brand" href="../index.html" aria-label="Studio Dentistico Colombo, home"><img src="../assets/logo.png" alt="" width="34" height="34"><span class="long">Studio Dentistico Colombo</span><span class="short">Studio Colombo</span></a>', markup, count=1, flags=re.S)
    markup = markup.replace('<span>In poltrona</span>', '<span>Schermo intero</span>')
    markup = markup.replace('aria-label="Consegna la scheda al paziente con QR o link"', 'aria-label="Condividi la scheda con QR, link o WhatsApp"')
    markup = markup.replace('<span>Consegna<span class="lbl-long"> al paziente</span></span>', '<span>Condividi</span>')
    markup = markup.replace('<p class="eyebrow">Per lo studio</p><h2 id="share-title" style="font-size:1.6rem">Consegna al paziente</h2>',
                            '<p class="eyebrow">Condividi</p><h2 id="share-title" style="font-size:1.6rem">Invia questa scheda</h2>')
    markup = markup.replace('<details>\n      <summary>Indirizzo pubblico della pagina</summary>', '<details hidden>\n      <summary>Indirizzo pubblico della pagina</summary>')
    markup = markup.replace('>Link per il paziente<', '>Link alla scheda<')
    assert 'Per lo studio' not in markup and 'Consegna' not in markup, slug
    # collegamenti incrociati alle altre schede (vecchi indirizzi GitHub Pages -> pagine del sito)
    def fix_link(m):
        return OLD_URLS[m.group(1)] + '.html'
    markup = re.sub(r'https://robbcolo\.github\.io/trattamenti/([a-z-]+)\.html', fix_link, markup)
    assert 'github.io' not in markup, slug

    # --- adattamenti di script ---
    pub = f'{SITE_URL}/schede/{slug}.html'
    scripts, n = re.subn(r'publicUrl:"https://robbcolo\.github\.io/trattamenti/[a-z-]+\.html"', f'publicUrl:"{pub}"', scripts)
    assert n == 1, (slug, n)
    scripts, n = re.subn(r'function defaultBase\(\)\{.*?\n\}', 'function defaultBase(){\n  var here=location.href.split("#")[0].split("?")[0];\n  if(/^https?:/.test(here)&&!/^(localhost|127\\.|\\[::1\\])/.test(location.hostname)) return here;\n  return P.publicUrl;\n}', scripts, count=1, flags=re.S)
    assert n == 1, slug
    scripts = scripts.replace('shareText:"Studio Dentistico Colombo – ', 'shareText:"Studio Dentistico Colombo, Patti – ')

    # --- elementi del sito ---
    faqs = faq_pairs(markup)
    rel = SCHEDE_RELATED[slug]
    rel_cards = ''.join(
        f'<a class="rel-card" href="{r}.html"><img src="../assets/schede/{r}.webp" alt="" width="640" height="400" loading="lazy" decoding="async"><span class="rc-body"><span class="rc-t">{esc(SCHEDE_BY_SLUG[r]["title"])}</span><span class="rc-s">{esc(" · ".join(SCHEDE_BY_SLUG[r]["chips"]))}</span></span></a>'
        for r in rel)
    svc = S[sc['services'][0]]
    strip = (f'<nav class="site-strip" aria-label="Da questa scheda"><div class="wrap">'
             f'<a class="ss-back" href="../schede.html">{ICON["arrow-left"]}<span>Tutte le schede</span></a>'
             f'<div class="ss-right"><a class="ss-tel" href="tel:{PHONE_HREF}">{ICON["phone"]}<span>{PHONE}</span></a>'
             f'<a class="ss-wa" href="https://wa.me/{WHATSAPP_HREF}?text={esc("Buongiorno, ho letto la scheda: " + sc["title"] + ". Vorrei qualche informazione.").replace(" ", "%20")}" target="_blank" rel="noopener">{ICON["whatsapp"]}<span>WhatsApp</span></a></div>'
             f'</div></nav>')
    wa_href = f'https://wa.me/{WHATSAPP_HREF}?text=' + ('Buongiorno, ho letto la scheda "' + sc['title'] + '" sul vostro sito. Vorrei prenotare una visita.').replace(' ', '%20').replace('"', '%22')
    related_services = ''.join(f'<li><a href="../servizi/{s}.html">{esc(S[s]["name"])}</a></li>' for s in sc['services'])
    cta = (f'<section class="scheda-cta" aria-labelledby="cta-t"><div class="wrap"><div>'
           f'<h2 id="cta-t">Hai domande su questo trattamento?</h2>'
           f'<p>Questa scheda spiega il trattamento in generale. Per il tuo caso serve una visita: ne parliamo con calma, senza impegno.</p></div>'
           f'<div class="cta-row"><a class="cbtn primary" href="../prenota.html">{ICON["calendar"]}Prenota una visita</a>'
           f'<a class="cbtn" href="tel:{PHONE_HREF}">{ICON["phone"]}Chiama {PHONE}</a>'
           f'<a class="cbtn wa" href="{wa_href}" target="_blank" rel="noopener">{ICON["whatsapp"]}WhatsApp</a></div></div></section>')
    more = (f'<section class="scheda-more"><div class="wrap"><h2>Altre schede che potrebbero servirti</h2><div class="rel-grid">{rel_cards}</div>'
            f'<p class="fine" style="margin-top:22px">Approfondisci anche: <span class="rel-svc">' + ' · '.join(f'<a href="../servizi/{s}.html">{esc(S[s]["name"])}</a>' for s in sc['services']) + '</span>.</p></div></section>')
    foot = (f'<div class="site-foot"><div class="wrap"><img src="../assets/logo.png" alt="" width="48" height="48" loading="lazy">'
            f'<div><p><b>Studio Dentistico Colombo</b> · {ADDRESS_LINE}</p><p>Tel. <a href="tel:{PHONE_HREF}">{PHONE}</a> · <a href="mailto:{EMAIL}">{EMAIL}</a></p>'
            f'<p>Lun–Gio 8.30–12.30 e 16.00–20.00 · Ven 8.30–12.30</p></div>'
            f'<ul><li><a href="../index.html">Home</a></li><li><a href="../servizi.html">Trattamenti</a></li><li><a href="../schede.html">Schede</a></li><li><a href="../contatti.html">Contatti</a></li><li><a href="../privacy-policy.html">Privacy</a></li><li><a href="../cookie-policy.html">Cookie</a></li></ul>'
            f'</div></div>')

    # inserisco CTA/altre schede prima del <footer> e il piè sito alla fine
    markup = markup.replace('<footer class="wrap foot">', cta + more + '\n<footer class="wrap foot">', 1)
    markup = markup.replace('<div class="sheet" id="share" hidden>', foot + '\n<div class="sheet" id="share" hidden>', 1)

    # --- dati strutturati ---
    url = pub
    ld = [
        {"@context": "https://schema.org", "@type": "MedicalWebPage", "@id": url + "#pagina", "url": url, "name": sc['title'] + ' — scheda informativa',
         "headline": sc['title'], "description": sc['desc'], "inLanguage": "it-IT", "isPartOf": {"@id": SITE_URL + "/#sito"},
         "publisher": dentist_ref(), "dateModified": TODAY, "datePublished": "2026-10-01",
         "audience": {"@type": "PatientsAudience"},
         "about": {"@type": "MedicalProcedure", "name": sc['procedure'], "procedureType": "https://schema.org/SurgicalProcedure" if sc['area'] == 'impianti' else "https://schema.org/NoninvasiveProcedure",
                   "bodyLocation": "Denti e cavo orale"},
         "mainEntityOfPage": url, "image": f"{SITE_URL}/assets/schede/{slug}.webp"},
        breadcrumb([("Home", ""), ("Schede informative", "schede.html"), (sc['title'], f"schede/{slug}.html")]),
    ]
    if faqs:
        ld.append({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
            {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faqs]})

    head = f'''<!doctype html>
<html lang="it" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>{esc(sc['seo_title'])}</title>
<meta name="description" content="{esc(sc['desc'])}">
<link rel="canonical" href="{url}">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">
<meta property="og:type" content="article"><meta property="og:locale" content="it_IT"><meta property="og:site_name" content="{SITE_NAME}">
<meta property="og:title" content="{esc(sc['seo_title'])}"><meta property="og:description" content="{esc(sc['desc'])}">
<meta property="og:url" content="{url}"><meta property="og:image" content="{SITE_URL}/assets/og-cover.jpg">
<meta name="twitter:card" content="summary_large_image">
{FAVICONS('../')}
<script>if(/[?&]embed=1/.test(location.search))document.documentElement.classList.add("is-embed")</script>
<link rel="preload" href="../fonts/figtree-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="../fonts/newsreader-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="../css/fonts.css">
<style>
{style}
</style>
<link rel="stylesheet" href="../css/schede-theme.css">
{''.join(jsonld(o) for o in ld)}
</head>
<body class="scheda">
<a class="skip-link" href="#cose">Vai al contenuto</a>
{strip}
'''
    # il vecchio blocco <style> aveva già --font-display/--font-body con font di Google: restano come fallback, il tema li sostituisce
    page = head + markup + '\n' + scripts + '\n</body>\n</html>\n'
    open(os.path.join(OUT, slug + '.html'), 'w', encoding='utf8').write(page)
    return len(page), len(faqs)

def main():
    shutil.copy(os.path.join(os.path.dirname(__file__), 'schede-theme.css'), os.path.join(ROOT, 'css', 'schede-theme.css'))
    srcs = load_sources()
    for sc in SCHEDE:
        h = srcs[sc['src']]
        size, nfaq = build_one(sc, h)
        print(f"{sc['slug']:28s} {size/1024:6.1f} KB  faq={nfaq}")

if __name__ == '__main__':
    main()
