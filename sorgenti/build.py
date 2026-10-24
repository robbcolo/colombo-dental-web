# -*- coding: utf-8 -*-
"""Genera l'intero sito in /home/claude/studio-colombo.  Uso:  python3 build.py"""
import os, re, json, shutil, subprocess, sys
from config import *
from content import *
import sitelib
from sitelib import page, faq_id, plain
import pages_a as A, pages_b as B

HERE = os.path.dirname(os.path.abspath(__file__))
def W(rel, text, mode='w'):
    p = os.path.join(ROOT, rel)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, mode, encoding='utf8') as f: f.write(text)

# ------------------------------------------------------------------ pagine ---
def all_pages():
    pg = [A.home(), A.hub_servizi(), B.chi_siamo(), B.prima_visita(), B.dentista_patti(), B.contatti(), B.prenota(), A.hub_schede(), B.faq(), B.privacy(), B.cookie(), B.not_found()]
    pg += [A.service_page(s) for s in SERVICE_ORDER]
    return pg

def build_pages():
    out = []
    for d in all_pages():
        d = dict(d)
        path = d.pop('path')
        html = page(path, **d)
        W(path or 'index.html', html)
        out.append(path or 'index.html')
    return out

# --------------------------------------------------------------------- css ---
def build_css():
    parts = [open(os.path.join(ROOT, 'css', 'fonts.css'), encoding='utf8').read()]
    for n in ['01-base', '02-layout', '03-home', '04-pages', '05-motion']:
        parts.append(open(os.path.join(HERE, 'css', n + '.css'), encoding='utf8').read())
    W('css/styles.css', '\n'.join(parts))
    os.makedirs(os.path.join(ROOT, 'js'), exist_ok=True)
    for n in ['main.js', 'config.js']:
        shutil.copy(os.path.join(HERE, 'js', n), os.path.join(ROOT, 'js', n))

# ------------------------------------------------------------ indice ricerca ---
KW = {
    'igiene-prevenzione': 'pulizia denti tartaro placca alito macchie igiene professionale ablazione controllo',
    'conservativa': 'carie otturazione buco dente sensibile intarsio onlay corona composito scheggiato',
    'endodonzia': 'devitalizzazione canale canalare nervo dolore pulpite ascesso ritrattamento',
    'parodontologia': 'gengive sanguinano piorrea parodontite tasche gengivite denti mobili',
    'chirurgia-orale': 'estrazione dente del giudizio apicectomia cisti ascesso chirurgia',
    'implantologia-dentale': 'impianto vite titanio dente mancante osso rialzo',
    'protesi-dentarie': 'ponte corona dentiera protesi mobile scheletrata zirconia',
    'ortodonzia': 'apparecchio invisalign allineatori denti storti bambini mascherine',
    'gnatologia': 'bruxismo bite articolazione atm mal di testa digrignare mandibola',
    'estetica-dentale': 'sbiancamento faccette sorriso denti gialli estetica',
    'pedodonzia': 'bambini pedodonzia latte sigillature primo dentista piccoli',
    'scanner-intraorale': 'impronta digitale telecamera scanner senza pasta',
}
def site_index():
    E = []
    pages = [('Prenota una visita', 'Giorno, orario e motivo: la richiesta parte su WhatsApp', 'prenota.html', 'appuntamento prenotare whatsapp visita data', 1),
             ('La prima visita', 'Come funziona, cosa portare, cosa aspettarti', 'prima-visita.html', 'primo appuntamento cosa portare paura ansia', 1),
             ('Contatti e orari', 'Indirizzo, telefono, WhatsApp, email e mappa', 'contatti.html', 'telefono indirizzo orari mappa dove siamo email via fontanella aperto', 1),
             ('Chi siamo', 'Alfredo, Roberto e Aurora Colombo, Daniela e Tonina', 'chi-siamo.html', 'dottori team storia famiglia alfredo roberto aurora daniela tonina', 0),
             ('Dentista a Patti', 'Lo studio, come scegliere il dentista giusto, la zona servita', 'dentista-patti.html', 'dentista patti messina miglior dentista colombo zona', 0),
             ('Domande frequenti', 'Le risposte alle domande più comuni', 'faq.html', 'faq domande risposte', 0),
             ('Schede informative', 'Dodici schede illustrate sui trattamenti', 'schede.html', 'schede informative qr condividere', 0),
             ('Tutti i trattamenti', 'Dalla prevenzione alla chirurgia', 'servizi.html', 'servizi cure', 0)]
    for t, s, u, k, p in pages: E.append(dict(g='Pagine', t=t, s=s, u=u, k=k, **({'p': 1} if p else {})))
    feat = {'igiene-prevenzione', 'implantologia-dentale', 'endodonzia', 'estetica-dentale'}
    for slug in SERVICE_ORDER:
        s = S[slug]
        e = dict(g='Trattamenti', t=s['name'], s=A.BLURB[slug], u=f'servizi/{slug}.html', k=KW[slug] + ' ' + ' '.join(plain(b) for b in s['bullets']))
        if slug in feat: e['p'] = 1
        E.append(e)
    for sc in SCHEDE:
        e = dict(g='Schede', t=sc['title'], s=' · '.join(sc['chips']), u=f'schede/{sc["slug"]}.html', k=sc['desc'] + ' ' + sc['procedure'])
        if sc['slug'] in ('impianto-dentale', 'sbiancamento-dentale'): e['p'] = 1
        E.append(e)
    for k_, n, items in B.FAQ:
        for q, a in items:
            E.append(dict(g='Domande', t=q, s=n, u=f'faq.html#{faq_id(q)}', k=plain(a)[:300]))
    for slug in SERVICE_ORDER:
        for q, a in S[slug]['faq']:
            E.append(dict(g='Domande', t=q, s=S[slug]['name'], u=f'servizi/{slug}.html#domande', k=a[:300]))
    W('js/site-index.js', '/* Indice per la ricerca nel sito: generato automaticamente */\nwindow.SITE_INDEX=' + json.dumps(E, ensure_ascii=False, separators=(',', ':')) + ';\n')
    return len(E)

# --------------------------------------------------------- file tecnici ---
def build_tech(pages):
    urls = [('', '1.0')]
    prio = {'servizi.html': '0.9', 'dentista-patti.html': '0.9', 'prenota.html': '0.7', 'contatti.html': '0.7', 'prima-visita.html': '0.7', 'schede.html': '0.7', 'chi-siamo.html': '0.6', 'faq.html': '0.6', 'privacy-policy.html': '0.2', 'cookie-policy.html': '0.2'}
    for p in pages:
        if p in ('index.html', '404.html'): continue
        urls.append((p, prio.get(p, '0.8')))
    for sc in SCHEDE: urls.append((f'schede/{sc["slug"]}.html', '0.6'))
    x = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for u, pr in urls:
        x.append(f'<url><loc>{SITE_URL}/{u}</loc><lastmod>{TODAY}</lastmod><priority>{pr}</priority></url>')
    x.append('</urlset>')
    W('sitemap.xml', '\n'.join(x) + '\n')
    W('robots.txt', f'User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: {SITE_URL}/sitemap.xml\n')
    W('.htaccess', open(os.path.join(HERE, 'extras', 'htaccess.txt'), encoding='utf8').read())
    for f in ['recensioni.php', 'config.sample.php']:
        shutil.copy(os.path.join(HERE, 'extras', f), os.path.join(ROOT, 'api', f)) if os.path.isdir(os.path.join(ROOT, 'api')) else (os.makedirs(os.path.join(ROOT, 'api')), shutil.copy(os.path.join(HERE, 'extras', f), os.path.join(ROOT, 'api', f)))
    shutil.copy(os.path.join(HERE, 'extras', 'api-htaccess.txt'), os.path.join(ROOT, 'api', '.htaccess'))
    manifest = {"name": SITE_NAME, "short_name": "Studio Colombo", "description": "Studio dentistico di famiglia a Patti (ME)", "lang": "it", "start_url": "/index.html", "scope": "/",
                "display": "browser", "background_color": "#FBF8F2", "theme_color": "#FBF8F2",
                "icons": [{"src": "assets/icons/icon-192.png", "sizes": "192x192", "type": "image/png"}, {"src": "assets/icons/icon-512.png", "sizes": "512x512", "type": "image/png"},
                          {"src": "assets/icons/icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}]}
    W('site.webmanifest', json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')

def build_icons():
    from PIL import Image
    logo = Image.open(os.path.join(ROOT, 'assets', 'logo.png')).convert('RGBA')
    os.makedirs(os.path.join(ROOT, 'assets', 'icons'), exist_ok=True)
    paper = (251, 248, 242, 255)
    def tile(size, pad):
        im = Image.new('RGBA', (size, size), paper)
        inner = int(size * (1 - 2 * pad))
        l = logo.resize((inner, inner), Image.LANCZOS)
        im.alpha_composite(l, ((size - inner) // 2, (size - inner) // 2))
        return im
    tile(512, .09).convert('RGB').save(os.path.join(ROOT, 'assets/icons/icon-512.png'), optimize=True)
    tile(192, .09).convert('RGB').save(os.path.join(ROOT, 'assets/icons/icon-192.png'), optimize=True)
    tile(180, .10).convert('RGB').save(os.path.join(ROOT, 'assets/icons/apple-touch-icon.png'), optimize=True)
    tile(512, .22).convert('RGB').save(os.path.join(ROOT, 'assets/icons/icon-maskable-512.png'), optimize=True)
    ico = Image.new('RGBA', (256, 256), (0, 0, 0, 0)); ico.alpha_composite(logo.resize((256, 256), Image.LANCZOS))
    ico.save(os.path.join(ROOT, 'favicon.ico'), sizes=[(16, 16), (32, 32), (48, 48)])

def main():
    build_css()
    pages = build_pages()
    n = site_index()
    build_tech(pages)
    build_icons()
    print(f'pagine: {len(pages)} (+12 schede) · indice ricerca: {n} voci')

if __name__ == '__main__':
    main()
