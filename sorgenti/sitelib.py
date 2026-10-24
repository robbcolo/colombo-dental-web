# -*- coding: utf-8 -*-
"""Struttura comune delle pagine: <head>, testata, menu, piè di pagina, elementi flottanti e componenti riusati."""
import re, json
from config import *
from content import *
from partials import ICON, esc, rich, jsonld, dentist_full, dentist_ref, breadcrumb, FAVICONS

ARR = ICON['arrow'].replace('<svg ', '<svg class="arr" ', 1)
ASSET_V = TODAY.replace('-', '')           # cache-busting per css/js
HOURS_SHORT = 'Lun–gio 8:30–12:30 e 16:00–20:00 · Ven 8:30–12:30'
TOWNS = ['Patti', 'Gioiosa Marea', 'Brolo', "Capo d'Orlando", 'Oliveri', 'Montagnareale', "Sant'Angelo di Brolo", 'Piraino', 'Librizzi', 'Falcone', 'Furnari', 'Barcellona Pozzo di Gotto']
BG_VAR = {'': 'var(--paper)', 'bg-warm': 'var(--beige)', 'bg-alt': 'var(--azure-pale)', 'bg-mist': 'var(--azure-mist)', 'bg-dark': 'var(--navy)'}
AREA_NAME = dict(AREAS)

def plain(html):
    return re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', html)).strip()

def svg_hidden(svg):
    return svg  # le icone hanno già aria-hidden

def wa_link(msg):
    from urllib.parse import quote
    return f'https://wa.me/{WHATSAPP_HREF}?text={quote(msg)}'

# ------------------------------------------------------------------ <head> ---
def head(*, P, path, title, desc, og_type='website', robots='index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1', ld=(), og_image='assets/og-cover.jpg'):
    url = SITE_URL + '/' + path
    img = SITE_URL + '/' + og_image
    return f'''<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>{esc(title)}</title>
<meta name="description" content="{esc(desc)}">
<link rel="canonical" href="{url}">
<meta name="robots" content="{robots}">
<meta name="author" content="{SITE_NAME}">
<meta name="geo.region" content="IT-82"><meta name="geo.placename" content="Patti"><meta name="geo.position" content="{LAT};{LNG}"><meta name="ICBM" content="{LAT}, {LNG}">
<meta property="og:type" content="{og_type}"><meta property="og:locale" content="it_IT"><meta property="og:site_name" content="{SITE_NAME}">
<meta property="og:title" content="{esc(title)}"><meta property="og:description" content="{esc(desc)}"><meta property="og:url" content="{url}">
<meta property="og:image" content="{img}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Studio Dentistico Colombo, dentista a Patti (Messina)">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{esc(title)}"><meta name="twitter:description" content="{esc(desc)}"><meta name="twitter:image" content="{img}">
<meta name="color-scheme" content="light">
{FAVICONS(P)}
<script>document.documentElement.classList.add("js");setTimeout(function(){{if(!window.__studio)document.documentElement.classList.remove("js")}},7000)</script>
<link rel="preload" href="{P}fonts/figtree-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="{P}fonts/newsreader-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="{P}css/styles.css?v={ASSET_V}">
{''.join(jsonld(o) for o in ld)}
</head>'''

# ----------------------------------------------------------------- testata ---
def mega(P):
    groups = ''
    for g in GROUPS:
        items = ''.join(f'<li><a href="{P}servizi/{s}.html"><span class="ico">{S[s]["icon"]}</span><span>{esc(S[s]["name"])}</span></a></li>' for s in g['services'])
        groups += f'<div class="mega-group"><h3>{esc(g["name"])}</h3><ul>{items}</ul></div>'
    return (f'<div class="mega" id="mega-servizi"><div class="mega-inner"><div class="mega-groups">{groups}</div>'
            f'<div class="mega-all-m"><a class="link-arrow" href="{P}servizi.html">Tutti i trattamenti {ICON["arrow"]}</a></div>'
            f'<aside class="mega-aside"><h3>Non sai da dove iniziare?</h3><p>Una prima visita serve proprio a questo: guardiamo insieme la situazione e ti spieghiamo le strade possibili.</p>'
            f'<a class="btn btn-primary btn-sm" href="{P}prenota.html">Prenota una visita</a>'
            f'<a class="link-arrow" href="{P}servizi.html">Tutti i trattamenti {ICON["arrow"]}</a></aside></div></div>')

def header(P):
    return f'''<a class="skip-link" href="#main">Vai al contenuto</a>
<div class="scroll-progress" aria-hidden="true"><i></i><i></i><i></i></div>
<header class="site-header">
<div class="container">
<a class="brand" href="{P}index.html" aria-label="{SITE_NAME}, vai alla home"><img src="{P}assets/logo.png" alt="" width="46" height="46"><span class="brand-text">Studio Dentistico Colombo<small>Patti · Messina</small></span></a>
<nav class="nav-main" id="nav-main" aria-label="Menu principale">
<div class="nav-mobile-extra"><button class="m-search" type="button" data-open-search>{ICON["search"]}<span>Cerca nel sito…</span></button><div class="m-status"><span data-open-status>{HOURS_SHORT}</span></div></div>
<div class="nav-links">
<a href="{P}index.html" data-nav="home">Home</a>
<div class="nav-item" data-nav="servizi"><button class="nav-trigger" type="button" aria-expanded="false" aria-controls="mega-servizi">Trattamenti {ICON["chev"]}</button>{mega(P)}</div>
<a href="{P}schede.html" data-nav="schede">Schede</a>
<a href="{P}prima-visita.html" data-nav="prima-visita">Prima visita</a>
<a href="{P}chi-siamo.html" data-nav="chi-siamo">Chi siamo</a>
<a href="{P}contatti.html" data-nav="contatti">Contatti</a>
</div>
<div class="nav-actions">
<button class="icon-btn" type="button" data-open-search aria-label="Cerca nel sito" title="Cerca nel sito (premi /)">{ICON["search"]}</button>
<a class="nav-call" href="tel:{PHONE_HREF}" data-tel><span class="ico-wrap">{ICON["phone"]}<span class="dot" data-status-dot></span></span><span class="nav-call-text" data-tel-text>{PHONE}</span></a>
<a class="btn btn-primary" href="{P}prenota.html">Prenota una visita</a>
</div>
</nav>
<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="nav-main" aria-label="Apri il menu"><svg class="icon-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 8h16M4 16h16"/></svg><svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
</div>
</header>
<noscript><div class="ns-note">Per usare la ricerca e vedere se lo studio è aperto serve JavaScript. Puoi comunque chiamarci al <a href="tel:{PHONE_HREF}">{PHONE}</a>.</div></noscript>'''

# --------------------------------------------------------------- piè pagina ---
FB = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 21v-8h2.7l.5-3.2H14V7.9c0-.9.4-1.6 1.7-1.6h1.6V3.3c-.3 0-1.3-.2-2.4-.2-2.6 0-4.1 1.5-4.1 4.2v2.5H8V13h2.8v8H14Z"/></svg>'
IG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>'

def footer(P, prev='var(--paper)'):
    svc = ''.join(f'<li><a href="{P}servizi/{s}.html">{esc(S[s]["name"])}</a></li>' for s in SERVICE_ORDER)
    towns = ', '.join(TOWNS[1:-1]) + ' e ' + TOWNS[-1]
    return f'''<footer class="site-footer" style="--prev:{prev}">
<div class="container">
<h2 class="visually-hidden">Informazioni e contatti dello studio</h2>
<div class="footer-top">
<div class="footer-brand">
<a class="brand" href="{P}index.html" aria-label="{SITE_NAME}, vai alla home"><img src="{P}assets/logo.png" alt="" width="52" height="52" loading="lazy"><span class="brand-text">Studio Dentistico Colombo<small>Patti · Messina</small></span></a>
<p>Uno studio dentistico di famiglia a Patti: Alfredo, Roberto e Aurora Colombo, con Daniela e Tonina.</p>
<div class="social-row"><a class="social-btn" data-facebook href="#" target="_blank" rel="noopener me" aria-label="Facebook" hidden>{FB}</a><a class="social-btn" data-instagram href="#" target="_blank" rel="noopener me" aria-label="Instagram" hidden>{IG}</a></div>
</div>
<div class="footer-col"><h3>Trattamenti</h3><ul>{svc}</ul></div>
<div class="footer-col"><h3>Lo studio</h3><ul>
<li><a href="{P}chi-siamo.html">Chi siamo</a></li><li><a href="{P}prima-visita.html">La prima visita</a></li><li><a href="{P}schede.html">Schede informative</a></li><li><a href="{P}faq.html">Domande frequenti</a></li><li><a href="{P}dentista-patti.html">Dentista a Patti</a></li><li><a href="{P}contatti.html">Contatti e orari</a></li><li><a href="{P}prenota.html">Prenota una visita</a></li></ul></div>
<div class="footer-col"><h3>Contatti</h3><ul>
<li>{ADDRESS_LINE}</li>
<li><a href="tel:{PHONE_HREF}" data-tel><span data-tel-text>{PHONE}</span></a></li>
<li><a href="https://wa.me/{WHATSAPP_HREF}" data-whatsapp target="_blank" rel="noopener">WhatsApp {WHATSAPP}</a></li>
<li><a href="mailto:{EMAIL}" data-email><span data-email-text>{EMAIL}</span></a></li>
<li class="f-hours"><span>Lun–gio 8:30–12:30 · 16:00–20:00</span><span>Venerdì 8:30–12:30</span></li>
<li><span data-open-status>{HOURS_SHORT}</span></li></ul></div>
</div>
<p class="footer-areas">Dentista a Patti, in provincia di Messina. Lo studio riceve pazienti da {towns}. <a href="{P}dentista-patti.html">Come raggiungerci</a>.</p>
<div class="footer-bottom"><span>© 2026 {SITE_NAME} — P.IVA {VAT}</span><span class="footer-legal"><a href="{P}privacy-policy.html">Privacy</a> · <a href="{P}cookie-policy.html">Cookie</a></span></div>
</div>
</footer>
<aside class="wa-aside" aria-label="Contatto rapido"><a class="wa-float" href="https://wa.me/{WHATSAPP_HREF}" data-whatsapp target="_blank" rel="noopener" aria-label="Scrivici su WhatsApp">{ICON["whatsapp"]}</a></aside>
<button class="to-top" type="button" aria-label="Torna all'inizio della pagina"><svg class="ring" viewBox="0 0 48 48" aria-hidden="true"><circle class="track" cx="24" cy="24" r="22"/><circle class="bar" cx="24" cy="24" r="22"/></svg><svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg></button>'''

def scripts(P):
    return f'<script src="{P}js/config.js?v={ASSET_V}" defer></script>\n<script src="{P}js/main.js?v={ASSET_V}" defer></script>'

# ---------------------------------------------------------- pagina completa ---
def page(path, *, P='', title, desc, nav='', main, ld=(), footer_prev='var(--paper)', og_type='website', robots=None, body_class=''):
    kw = {} if robots is None else {'robots': robots}
    return (head(P=P, path=path, title=title, desc=desc, og_type=og_type, ld=ld, **kw) +
            f'\n<body data-nav="{nav}"' + (f' class="{body_class}"' if body_class else '') + '>\n' +
            header(P) + f'\n<main id="main">\n{main}\n</main>\n' + footer(P, footer_prev) + '\n' + scripts(P) + '\n</body>\n</html>\n')

# ------------------------------------------------------------- componenti ---
def section(inner, *, bg='', prev='', cls='', id=None, label=None, tight=False):
    """Sezione con colore e, se diverso dal precedente, bordo alto ad arco."""
    c = ['section-tight' if tight else 'section']
    if bg: c.append(bg)
    arc = prev != bg and (prev is not None)
    if arc: c.append('arc-top')
    if cls: c.append(cls)
    st = f' style="--prev:{BG_VAR[prev]}"' if arc else ''
    idattr = f' id="{id}"' if id else ''
    lab = f' aria-labelledby="{label}"' if label else ''
    return f'<section class="{" ".join(c)}"{idattr}{lab}{st}><div class="container">{inner}</div></section>'

def head_block(eyebrow, title, lead='', *, id=None, center=False, wide_extra='', smile=True):
    idattr = f' id="{id}"' if id else ''
    sm = ' data-smile' if smile else ''
    eb = f'<span class="eyebrow">{esc(eyebrow)}</span>' if eyebrow else ''
    p = f'<p>{lead}</p>' if lead else ''
    if wide_extra:
        return f'<div class="section-head wide{" center" if center else ""}"><div>{eb}<h2{idattr} data-split{sm}>{title}</h2>{p}</div>{wide_extra}</div>'
    return f'<div class="section-head{" center" if center else ""}">{eb}<h2{idattr} data-split{sm}>{title}</h2>{p}</div>'

def crumbs(items, P):
    """items: [(nome, url_relativo_alla_root o None per l'ultima)]"""
    out = []
    for i, (n, u) in enumerate(items):
        if u is None:
            out.append(f'<span aria-current="page">{esc(n)}</span>')
        else:
            out.append(f'<a href="{P}{u}">{esc(n)}</a>')
    sep = ICON['chev'].replace('<svg ', '<svg style="transform:rotate(-90deg)" ', 1)
    return f'<nav class="crumbs" aria-label="Percorso">{(" " + sep + " ").join(out)}</nav>'

def faq_id(q):
    import unicodedata
    t = unicodedata.normalize('NFD', q.lower())
    t = ''.join(c for c in t if unicodedata.category(c) != 'Mn')
    t = re.sub(r'[^a-z0-9]+', '-', t).strip('-')
    return 'd-' + t[:48].rstrip('-')

def faq_item(q, a_html, *, extra='', fcat=None, fid=None):
    attrs = f' id="{fid}"' if fid else ''
    if fcat is not None:
        attrs += f' data-f-item data-f-cat="{fcat}" data-f-text="{esc(q + " " + plain(a_html))}"'
    return (f'<details class="faq-item"{attrs}{extra}><summary><span>{esc(q)}</span><span class="faq-toggle" aria-hidden="true">{ICON["plus"]}</span></summary>'
            f'<div class="faq-a">{a_html}</div></details>')

def faq_ld(pairs):
    return {"@context": "https://schema.org", "@type": "FAQPage",
            "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": plain(a)}} for q, a in pairs]}

def scheda_card(sc, P, *, anim=True, area=True):
    slug = sc['slug']
    href = f'{P}schede/{slug}.html'
    t = esc(sc['title'])
    attrs = f'data-scheda-open="{slug}" data-scheda-title="{t}"'
    chips = ''.join(f'<span class="chip">{esc(c)}</span>' for c in sc['chips'])
    a = f'<span class="sc-area">{esc(AREA_NAME[sc["area"]])}</span>' if area else ''
    an = ' data-anim="iris"' if anim else ''
    return (f'<article class="scheda-card"{an} data-f-item data-f-cat="{sc["area"]}" data-f-text="{esc(sc["title"] + " " + sc["desc"] + " " + " ".join(sc["chips"]))}">'
            f'<a class="sc-thumb" href="{href}" {attrs} tabindex="-1" aria-hidden="true"><img src="{P}assets/schede/{slug}.webp" alt="" width="640" height="400" loading="lazy" decoding="async">{a}</a>'
            f'<div class="sc-body"><h3><a href="{href}" {attrs}>{t}</a></h3><div class="sc-chips">{chips}</div>'
            f'<div class="sc-actions"><a class="btn btn-primary" href="{href}" {attrs} aria-label="Apri la scheda: {t}">Apri la scheda</a>'
            f'<a class="sc-open" href="{href}" target="_blank" rel="noopener" aria-label="Apri «{t}» in una pagina intera" title="Pagina intera">{ICON["external"]}</a></div></div></article>')

def service_chip(slug, P, anim=True):
    s = S[slug]
    an = ' data-anim="iris"' if anim else ''
    return f'<a class="service-chip" href="{P}servizi/{slug}.html"{an}><span class="icon">{s["icon"]}</span><span class="name">{esc(s["name"])}</span></a>'

def cta_band(P, *, title='Hai un dubbio? Scrivici o chiamaci.', text='Rispondiamo volentieri, anche prima di fissare una visita.', msg='Buongiorno, vorrei avere informazioni.'):
    return (f'<div class="cta-band bg-dark" data-anim="fade"><div><h2>{esc(title)}</h2><p>{esc(text)}</p></div>'
            f'<div class="btn-row"><a class="btn btn-primary" href="{P}prenota.html">{ICON["calendar"]}Prenota una visita</a>'
            f'<a class="btn btn-secondary" href="tel:{PHONE_HREF}" data-tel>{ICON["phone"]}Chiama {PHONE}</a>'
            f'<a class="btn btn-whatsapp" href="{wa_link(msg)}" data-whatsapp data-wa-msg="{esc(msg)}" target="_blank" rel="noopener">{ICON["whatsapp"]}WhatsApp</a></div></div>')

def hours_table():
    rows = [('Lunedì', '8:30–12:30 · 16:00–20:00'), ('Martedì', '8:30–12:30 · 16:00–20:00'), ('Mercoledì', '8:30–12:30 · 16:00–20:00'),
            ('Giovedì', '8:30–12:30 · 16:00–20:00'), ('Venerdì', '8:30–12:30'), ('Sabato', 'Chiuso'), ('Domenica', 'Chiuso')]
    body = ''.join(f'<tr><td>{d}</td><td>{h}</td></tr>' for d, h in rows)
    return f'<table class="hours-table"><caption class="visually-hidden">Orari di apertura dello studio</caption><tbody data-hours-body>{body}</tbody></table>'

def map_card(P):
    return (f'<div class="map-card"><div class="mc-inner"><span class="pin">{ICON["pin"]}</span><strong>Studio Dentistico Colombo</strong>'
            f'<span class="mc-addr" data-address-text>{ADDRESS_LINE}</span>'
            f'<button class="btn btn-primary btn-sm" type="button" data-map-load>Mostra la mappa</button>'
            f'<span class="mc-note">La mappa si carica solo se la richiedi: finché non la apri, nessun dato viene inviato a Google.</span></div></div>')

def info_rows(P, *, hours=False):
    rows = [
        (ICON['pin'], 'Indirizzo', f'<p data-address-text>{ADDRESS_LINE}</p><p><a class="link-underline" data-gmaps href="https://www.google.com/maps/search/?api=1&query=Studio+Dentistico+Colombo+Patti+ME" target="_blank" rel="noopener">Apri in Google Maps</a> · <a class="link-underline" data-amaps href="https://maps.apple.com/?q=Studio+Dentistico+Colombo&ll={LAT},{LNG}" target="_blank" rel="noopener">Apple Maps</a> · <button type="button" class="link-underline" data-copy="address" data-copy-msg="Indirizzo copiato">Copia</button></p>'),
        (ICON['phone'], 'Telefono', f'<p><a class="link-underline" href="tel:{PHONE_HREF}" data-tel><span data-tel-text>{PHONE}</span></a></p>'),
        (ICON['whatsapp'], 'WhatsApp', f'<p><a class="link-underline" href="https://wa.me/{WHATSAPP_HREF}" data-whatsapp target="_blank" rel="noopener">{WHATSAPP}</a></p><p>Scrivici un messaggio: ti rispondiamo appena possibile.</p>'),
        (ICON['mail'], 'Email', f'<p><a class="link-underline" href="mailto:{EMAIL}" data-email><span data-email-text>{EMAIL}</span></a></p>'),
    ]
    return ''.join(f'<div class="info-row"><span class="icon">{i}</span><div><p class="info-label">{t}</p>{b}</div></div>' for i, t, b in rows)

def wa_icon_btn(P, label, msg, cls='btn-whatsapp'):
    return f'<a class="btn {cls}" href="{wa_link(msg)}" data-whatsapp data-wa-msg="{esc(msg)}" target="_blank" rel="noopener">{ICON["whatsapp"]}{esc(label)}</a>'

def page_hero(P, crumb_items, h1, lead, *, extra=''):
    return (f'<section class="page-hero"><div class="container">{crumbs(crumb_items, P)}'
            f'<h1>{h1}</h1><p class="lead">{lead}</p>{extra}</div></section>')
