# -*- coding: utf-8 -*-
"""Pagine: home, hub trattamenti, pagina trattamento, schede."""
from sitelib import *

BLURB = {
    'igiene-prevenzione': 'Pulizia professionale dei denti e controlli periodici, per prevenire carie e infiammazioni.',
    'conservativa': 'Cura della carie e otturazioni dello stesso colore del dente, fino ai restauri su misura.',
    'endodonzia': 'La cura canalare per salvare un dente quando carie o trauma raggiungono il nervo.',
    'parodontologia': 'Cura delle gengive che sanguinano e dei tessuti che sostengono i denti.',
    'chirurgia-orale': 'Estrazioni, denti del giudizio e piccoli interventi chirurgici in anestesia locale.',
    'implantologia-dentale': 'Impianti per sostituire uno o più denti mancanti, senza limare i denti vicini.',
    'protesi-dentarie': 'Corone, ponti e protesi mobili su misura per tornare a masticare e sorridere.',
    'ortodonzia': 'Apparecchi fissi, mobili e allineatori trasparenti Invisalign, per bambini e adulti.',
    'gnatologia': "Bruxismo, dolore alla mandibola e disturbi dell'articolazione, spesso con un bite su misura.",
    'estetica-dentale': 'Sbiancamento, faccette e ricostruzioni in composito per un sorriso più armonioso.',
    'pedodonzia': 'La prima visita e la cura dei più piccoli, con Aurora Colombo come punto di riferimento.',
    'scanner-intraorale': "L'impronta digitale in pochi minuti, senza pasta e senza fastidio.",
}

DOCTOR_NOTE = {
    'implantologia-dentale': 'In studio Roberto Colombo segue in particolare questa area, con un master post-laurea in implantoprotesi.',
    'parodontologia': 'Roberto Colombo ha un interesse particolare per la parodontologia.',
    'pedodonzia': 'Il punto di riferimento per i pazienti bambini è Aurora Colombo.',
    'chirurgia-orale': 'Aurora Colombo sta frequentando la scuola di specializzazione in Chirurgia Orale a Messina.',
}

def provider():
    return {"@type": "Dentist", "name": SITE_NAME, "url": SITE_URL + "/", "telephone": PHONE_SCHEMA,
            "image": SITE_URL + "/assets/logo.png",
            "address": {"@type": "PostalAddress", "streetAddress": "Via Fontanella", "addressLocality": "Patti", "addressRegion": "ME", "postalCode": "98066", "addressCountry": "IT"}}

def website_ld():
    return {"@context": "https://schema.org", "@type": "WebSite", "@id": SITE_URL + "/#sito", "url": SITE_URL + "/", "name": SITE_NAME,
            "inLanguage": "it-IT", "publisher": provider()}

# =============================================================== HOME =========
FINDER = [
    dict(id='controllo', ico='calendar', label='Voglio fare un controllo',
         title='Un controllo e una pulizia',
         text='Una visita di controllo e una seduta di igiene professionale sono il modo più semplice per tenere sotto controllo denti e gengive, prima che ci sia un dolore.',
         links=[('igiene-prevenzione', None), ('prima-visita', ('La prima visita', 'Come si svolge, cosa portare, cosa aspettarti.'))], schede=['ablazione-e-scaling']),
    dict(id='dolore', ico='bolt', label="Ho dolore o un'urgenza", urgent=True,
         title='Dolore, gonfiore o trauma',
         text='Se un dente fa molto male, la gengiva è gonfia o hai preso una botta, non aspettare: chiamaci.',
         links=[('endodonzia', None), ('chirurgia-orale', None)], schede=['cura-canalare'],
         note="Con un dente caduto del tutto, conservalo in un contenitore con latte o saliva e portalo con te. Fuori orario, rivolgiti al pronto soccorso. Se il gonfiore si estende a viso o collo, o fai fatica a respirare o a deglutire, chiama subito il 112."),
    dict(id='mancanti', ico='tooth', label='Mi manca un dente',
         title='Sostituire uno o più denti',
         text='Impianto, ponte e protesi mobile sono tre strade diverse. Dopo la visita ti spieghiamo vantaggi e limiti di ciascuna nel tuo caso.',
         links=[('implantologia-dentale', None), ('protesi-dentarie', None)], schede=['impianto-dentale', 'ponte-dentale', 'protesi-mobile']),
    dict(id='sorriso', ico='smile', label='Voglio un sorriso più bello',
         title='Estetica e allineamento',
         text="Sbiancamento, faccette o apparecchio: prima di scegliere guardiamo la salute di denti e gengive, poi ti mostriamo cosa è possibile fare.",
         links=[('estetica-dentale', None), ('ortodonzia', None)], schede=['sbiancamento-dentale', 'faccette-dentali']),
    dict(id='gengive', ico='shield', label='Le gengive sanguinano',
         title='Gengive che sanguinano',
         text='Il sanguinamento è spesso il primo segnale di un’infiammazione. Controllarla presto è molto più semplice che curarla tardi.',
         links=[('parodontologia', None), ('igiene-prevenzione', None)], schede=['ablazione-e-scaling']),
    dict(id='cura', ico='check', label='Devo curare un dente',
         title='Carie e denti rovinati',
         text='Dalla piccola otturazione alla cura canalare, fino alle corone su misura: si sceglie la soluzione che conserva più dente sano possibile.',
         links=[('conservativa', None), ('endodonzia', None)], schede=['cura-canalare', 'corona-onlay-intarsio']),
    dict(id='bambini', ico='baby', label='Devo portare mio figlio',
         title='La visita dei più piccoli',
         text="La prima visita non deve aspettare il primo mal di denti. In studio il punto di riferimento per i bambini è Aurora Colombo.",
         links=[('pedodonzia', None), ('ortodonzia', None)], schede=[]),
]

def finder(P):
    opts, panels = '', ''
    for i, f in enumerate(FINDER):
        urgent = ' urgent' if f.get('urgent') else ''
        opts += f'<button class="finder-opt{urgent}" type="button" data-fopt="{f["id"]}" aria-pressed="{"true" if i == 0 else "false"}"><span class="fo-ico">{ICON[f["ico"]]}</span><span>{esc(f["label"])}</span></button>'
        links = ''
        for slug, custom in f['links']:
            if custom:
                links += f'<a class="fp-link" href="{P}prima-visita.html"><span class="ico">{ICON["clock"]}</span><span>{esc(custom[0])}<small>{esc(custom[1])}</small></span>{ARR}</a>'
            else:
                links += f'<a class="fp-link" href="{P}servizi/{slug}.html"><span class="ico">{S[slug]["icon"]}</span><span>{esc(S[slug]["name"])}<small>{esc(BLURB[slug])}</small></span>{ARR}</a>'
        sch = ''
        if f['schede']:
            sch = '<div class="fp-schede"><span class="lbl">Schede da leggere o da guardare insieme</span>' + ''.join(
                f'<a class="fp-scheda" href="{P}schede/{s}.html" data-scheda-open="{s}" data-scheda-title="{esc(SCHEDE_BY_SLUG[s]["title"])}"><img src="{P}assets/schede/{s}.webp" alt="" width="38" height="28" loading="lazy">{esc(SCHEDE_BY_SLUG[s]["short"])}</a>' for s in f['schede']) + '</div>'
        urgent_box = ''
        if f.get('urgent'):
            urgent_box = (f'<div class="fp-urgent"><strong>Chiamaci subito.</strong> Cerchiamo sempre di trovare spazio per le urgenze.<div class="btn-row" style="margin-top:.8rem">'
                          f'<a class="btn btn-primary btn-sm" href="tel:{PHONE_HREF}" data-tel>{ICON["phone"]}Chiama {PHONE}</a>'
                          f'{wa_icon_btn(P, "WhatsApp", "Buongiorno, ho un dolore o un’urgenza dentale. Potete aiutarmi?").replace("btn btn-whatsapp", "btn btn-whatsapp btn-sm")}</div></div>')
        cta = '' if f.get('urgent') else f'<div class="btn-row"><a class="btn btn-primary btn-sm" href="{P}prenota.html">Prenota una visita</a>{wa_icon_btn(P, "Scrivici", "Buongiorno, vorrei informazioni: " + f["label"].lower() + ".").replace("btn btn-whatsapp", "btn btn-whatsapp btn-sm")}</div>'
        note = f'<p class="fp-note">{esc(f["note"])}</p>' if f.get('note') else ''
        active = ' is-active' if i == 0 else ''
        panels += (f'<div class="finder-panel{active}" id="fp-{f["id"]}" role="region" aria-label="{esc(f["title"])}"><h3>{esc(f["title"])}</h3><p>{esc(f["text"])}</p>{urgent_box}'
                   f'<div class="fp-links">{links}</div>{sch}{cta}{note}</div>')
    return (f'<div class="finder" data-finder data-anim="fade"><div class="finder-grid"><div class="finder-head"><span class="eyebrow">Ti aiutiamo a orientarti</span>'
            f'<h2 data-split data-smile>Cosa ti serve oggi?</h2><p>Scegli la situazione più vicina alla tua: ti mostriamo il trattamento giusto da cui partire e le schede da leggere.</p>'
            f'<div class="finder-opts" role="group" aria-label="Scegli la tua situazione">{opts}</div></div>'
            f'<div class="finder-out" aria-live="polite">{panels}</div></div></div>')

def hero(P):
    wa_path = ICON['whatsapp']
    return f'''<section class="hero">
<div class="container">
<div class="hero-copy">
<h1>Il sorriso della tua famiglia, curato come il nostro.</h1>
<div class="quick-actions">
<a href="tel:{PHONE_HREF}" data-tel class="quick-action"><span class="qa-icon">{ICON["phone"]}</span><span>Chiama</span></a>
<a href="https://wa.me/{WHATSAPP_HREF}" data-whatsapp target="_blank" rel="noopener" class="quick-action qa-whatsapp"><span class="qa-icon">{wa_path}</span><span>WhatsApp</span></a>
<a href="{P}servizi.html" class="quick-action"><span class="qa-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg></span><span>Trattamenti</span></a>
</div>
<p class="lede">Alfredo, Roberto e Aurora Colombo: tre dentisti della stessa famiglia, in un solo studio nel cuore di Patti.</p>
<div class="btn-row">
<a href="{P}prenota.html" class="btn btn-primary">Prenota una visita</a>
<a href="https://wa.me/{WHATSAPP_HREF}" data-whatsapp target="_blank" rel="noopener" class="btn btn-whatsapp">{wa_path}Scrivici su WhatsApp</a>
</div>
<div class="hero-meta"><div><span data-open-status>{HOURS_SHORT}</span><span>Stato dello studio in tempo reale</span></div></div>
</div>
<div class="hero-visual" aria-hidden="true">
<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
<circle class="hero-arc" cx="250" cy="250" r="215" fill="none" stroke="var(--beige-deep)" stroke-width="30" stroke-linecap="round" stroke-dasharray="230 1120" transform="rotate(140 250 250)"/>
<circle class="hero-arc" cx="250" cy="250" r="175" fill="none" stroke="var(--azure)" stroke-width="26" stroke-linecap="round" stroke-dasharray="300 930" transform="rotate(-35 250 250)"/>
<circle class="hero-arc" cx="250" cy="250" r="135" fill="none" stroke="var(--blue)" stroke-width="34" stroke-linecap="round" stroke-dasharray="260 720" transform="rotate(60 250 250)"/>
</svg>
<img class="mark" src="{P}assets/logo.png" alt="" width="425" height="425" fetchpriority="high">
</div>
</div>
</section>'''

TEAM = [
    dict(slug='roberto', name='Dott. Roberto Colombo', short="Laureato all'Università di Messina, si dedica in particolare a implantologia e protesi, con una formazione post-laurea in continuo aggiornamento.",
         long="Laureato in Odontoiatria e Protesi Dentaria presso l'Università degli Studi di Messina, esercita la professione dal 2024. Sta completando un master post-laurea in implantoprotesi presso l'Università di Torino, con un interesse particolare per l'implantologia e la parodontologia.",
         uni='Università degli Studi di Messina'),
    dict(slug='alfredo', name='Dott. Alfredo Colombo', short='Fondatore dello studio, laureato a Messina nel 1989. Lavora a Patti dal 1992 e si occupa di ogni tipo di trattamento.',
         long='Fondatore dello studio, laureato in Odontoiatria presso l\'Università degli Studi di Messina nel 1989. Lavora a Patti dal 1992 e si occupa naturalmente di ogni tipo di trattamento, dalla prevenzione alla chirurgia.',
         uni='Università degli Studi di Messina'),
    dict(slug='aurora', name='Dott.ssa Aurora Colombo', short='Laureata a Torino nel 2025, sta specializzandosi in Chirurgia Orale a Messina. Il punto di riferimento in studio quando si tratta di pazienti bambini.',
         long="Laureata in Odontoiatria presso l'Università degli Studi di Torino nel 2025, sta frequentando la scuola di specializzazione in Chirurgia Orale dell'Università degli Studi di Messina. In studio si occupa di ogni tipo di trattamento, ma è lei il punto di riferimento quando ad avere bisogno di cure è un bambino.",
         uni='Università degli Studi di Torino'),
]

def portrait(P, t):
    return (f'<div class="portrait"><img src="{P}assets/team/{t["slug"]}.jpg" alt="{esc(t["name"])}" width="500" height="500" loading="lazy" decoding="async">'
            f'<svg viewBox="0 0 100 100" aria-hidden="true"><circle class="a1" cx="50" cy="50" r="53"/><circle class="a2" cx="50" cy="50" r="49"/><circle class="a3" cx="50" cy="50" r="45"/></svg></div>')

def team_grid(P, long=False):
    cards = ''.join(f'<article class="team-card">{portrait(P, t)}<h3>{esc(t["name"])}</h3><p class="role">Odontoiatra</p><p>{esc(t["long" if long else "short"])}</p></article>' for t in TEAM)
    return f'<div class="team-grid">{cards}</div>'

def assist_row(center=True):
    return ('<div class="assist-row' + (' center' if center else '') + '">'
            '<div class="assist-item"><div class="avatar" aria-hidden="true">D</div><div><strong>Daniela</strong><span>Assistente alla poltrona</span></div></div>'
            '<div class="assist-item"><div class="avatar" aria-hidden="true">T</div><div><strong>Tonina</strong><span>Assistente alla poltrona</span></div></div></div>')

def home():
    P = ''
    # trattamenti raggruppati
    rows = ''
    for g in GROUPS:
        chips = ''.join(service_chip(s, P) for s in g['services'])
        rows += (f'<div class="service-group-row"><div class="service-group-label"><h3>{esc(g["name"])}</h3><p>{esc(g["blurb"])}</p></div>'
                 f'<div class="service-chip-grid">{chips}</div></div>')
    services = head_block('I nostri trattamenti', 'Tutto quello che serve ai tuoi denti, in un solo studio',
                          'Dalla prevenzione alla chirurgia, dai bambini agli adulti. Scegli un trattamento per leggere come lavoriamo.',
                          wide_extra=f'<a class="btn btn-secondary" href="{P}servizi.html">Tutti i trattamenti {ARR}</a>') + f'<div class="service-groups">{rows}</div>'
    # schede
    cards = ''.join(scheda_card(sc, P) for sc in SCHEDE)
    rail_ctrl = (f'<div class="rail-ctrl"><button class="rail-btn" type="button" data-rail-prev aria-label="Schede precedenti">{ICON["arrow-left"]}</button>'
                 f'<button class="rail-btn" type="button" data-rail-next aria-label="Schede successive">{ICON["arrow"]}</button></div>')
    schede = (head_block('Schede informative', 'Capire un trattamento prima di decidere',
                         'Dodici schede illustrate che spiegano cosa succede, quanto dura, quali sono i rischi e cosa fare dopo. Si leggono con calma a casa, oppure le apriamo a tutto schermo insieme in studio.', wide_extra=rail_ctrl) +
              f'<div class="rail-wrap" data-rail><div class="schede-rail" data-scheda-set>{cards}</div><div class="rail-bar" aria-hidden="true"><i></i></div></div>'
              f'<p style="margin-top:var(--sp-5)"><a class="link-arrow" href="{P}schede.html">Vedi tutte le schede {ICON["arrow"]}</a></p>')
    # prima visita
    steps = [
        ('Ci contatti', 'Telefono, WhatsApp o il modulo del sito: scegli tu. Ti rispondiamo con le date più vicine alle tue esigenze.'),
        ('Ti accogliamo', 'Daniela o Tonina ti accolgono in studio. Ti chiediamo qualche informazione sulla tua salute e sui farmaci che prendi.'),
        ('Visita e, se serve, scansione', 'Guardiamo denti e gengive e, quando è utile, usiamo lo scanner intraorale o una radiografia. Niente impronte in pasta.'),
        ('Il piano di cura, spiegato', 'Ti raccontiamo cosa abbiamo trovato, quali strade ci sono e i costi, prima di iniziare. Decidi con calma.'),
    ]
    st = ''.join(f'<div class="path-step"><h3>{esc(t)}</h3><p>{esc(p)}</p></div>' for t, p in steps)
    visita = (head_block('La prima visita', 'Come funziona, passo dopo passo', 'Sapere cosa aspettarti toglie metà dell’ansia. Ecco come va una prima visita da noi.',
                         wide_extra=f'<a class="btn btn-secondary" href="{P}prima-visita.html">Leggi i dettagli {ARR}</a>') +
              f'<div class="path" data-path>{st}</div>')
    # numeri + team
    stats = [
        ('1992', 34, 'anni a Patti', 'Alfredo Colombo esercita a Patti dal 1992.'),
        (None, 3, 'dentisti in famiglia', 'Alfredo, Roberto e Aurora lavorano ogni giorno nello stesso studio.'),
        (None, 12, 'trattamenti spiegati', "Dall'igiene all'implantologia, ognuno con la sua pagina."),
        (None, 12, 'schede illustrate', 'Da leggere con calma o da guardare insieme durante la visita.'),
    ]
    sh = ''
    for since, n, t, p in stats:
        sa = f' data-since="{since}"' if since else ''
        sh += f'<div class="stat"><span class="big num" data-count-to="{n}"{sa}>{n}</span><h3>{t}</h3><p>{p}</p></div>'
    team = (f'<div class="stats">{sh}</div><div style="height:var(--sp-9)"></div>' +
            head_block('Chi si prende cura di te', 'Una famiglia di dentisti, a due passi da casa', 'Alfredo, Roberto e Aurora Colombo lavorano ogni giorno nello stesso studio, insieme a Daniela e Tonina.') +
            team_grid(P) + assist_row() +
            f'<p style="margin-top:var(--sp-7);text-align:center"><a href="{P}chi-siamo.html" class="link-underline">Scopri di più sullo studio e sul nostro team</a></p>')
    # recensioni
    reviews = (head_block('Dicono di noi', 'Le opinioni dei pazienti', 'Le recensioni sono pubbliche su Google: leggile e, se ti sei trovato bene, lascia la tua.', center=True) +
               f'<div class="reviews-box" data-reviews-fallback><div><div class="stars" aria-hidden="true">' + ICON['star'].replace('<svg ', '<svg fill="currentColor" ') * 5 + '</div>'
               '<h3 style="margin-top:.6rem">Leggi le recensioni su Google</h3><p>Le opinioni di chi si è già curato da noi si leggono direttamente sul profilo Google dello studio, aggiornate in tempo reale.</p></div>'
               f'<a class="btn btn-primary" data-reviews-url href="https://www.google.com/maps/search/?api=1&query=Studio+Dentistico+Colombo+Patti+ME" target="_blank" rel="noopener">Apri su Google {ICON["external"]}</a></div>'
               '<div data-reviews hidden></div>')
    # dove siamo
    where = (head_block('Dove siamo', 'A Patti, facile da raggiungere', 'Siamo in Via Fontanella, a Patti. Dall’autostrada A20 si esce a Patti.') +
             f'<div class="contact-grid"><div class="info-list">{info_rows(P)}<div class="info-row"><span class="icon">{ICON["clock"]}</span><div><p class="info-label">Orari</p><p><span data-open-status>{HOURS_SHORT}</span></p>{hours_table()}</div></div></div>'
             f'<div>{map_card(P)}<div class="btn-row" style="margin-top:var(--sp-4)"><a class="btn btn-primary btn-sm" href="{P}contatti.html">Contatti e come arrivare</a><button class="btn btn-secondary btn-sm" type="button" data-vcard>{ICON["plus"]}Salva in rubrica</button></div></div></div>')
    cta = cta_band(P, title='Hai un dubbio? Scrivici o chiamaci.', text='Rispondiamo volentieri, anche prima di fissare una visita.', msg='Buongiorno, vorrei avere informazioni sullo studio.')

    main = (hero(P) +
            section(finder(P), prev=None, tight=True, cls='finder-sec', id='orientamento') +
            section(services, bg='bg-warm', prev='', id='trattamenti') +
            section(schede, bg='bg-alt', prev='bg-warm', id='schede') +
            section(visita, bg='', prev='bg-alt', id='prima-visita') +
            section(team, bg='bg-warm', prev='', id='team') +
            section(reviews, bg='bg-alt', prev='bg-warm', id='recensioni') +
            section(where, bg='', prev='bg-alt', id='dove-siamo') +
            section(cta, bg='', prev='', tight=True))
    desc = 'Dentista a Patti (ME): Studio Dentistico Colombo, tre dentisti di famiglia. Igiene, impianti, endodonzia, ortodonzia e cure per bambini. Prenota la tua visita.'
    d = dentist_full(); d['hasMap'] = 'https://www.google.com/maps/search/?api=1&query=Studio+Dentistico+Colombo+Patti+ME'
    ld = [d, website_ld(),
          {"@context": "https://schema.org", "@type": "WebPage", "@id": SITE_URL + "/#home", "url": SITE_URL + "/", "name": 'Dentista a Patti (ME) | Studio Dentistico Colombo', "description": desc,
           "inLanguage": "it-IT", "isPartOf": {"@id": SITE_URL + "/#sito"}, "about": {"@id": SITE_URL + "/#studio"}, "primaryImageOfPage": SITE_URL + "/assets/og-cover.jpg"}]
    return dict(path='', title='Dentista a Patti (ME) | Studio Dentistico Colombo', desc=desc, nav='home', main=main, ld=ld, footer_prev='var(--paper)')

# =========================================================== HUB TRATTAMENTI ===
def hub_servizi():
    P = ''
    groups = ''
    for g in GROUPS:
        cards = ''
        for s in g['services']:
            sc_links = ''.join(f'<a href="{P}schede/{x}.html" data-scheda-open="{x}" data-scheda-title="{esc(SCHEDE_BY_SLUG[x]["title"])}">{esc(SCHEDE_BY_SLUG[x]["short"])}</a>' for x in S[s]['schede'][:3])
            sc = f'<div class="hc-schede" aria-label="Schede collegate">{sc_links}</div>' if sc_links else ''
            cards += (f'<article class="hub-card" data-anim="iris"><span class="icon">{S[s]["icon"]}</span><h3><a href="{P}servizi/{s}.html">{esc(S[s]["name"])}</a></h3><p>{esc(BLURB[s])}</p>{sc}</article>')
        groups += (f'<section class="hub-group" aria-label="{esc(g["name"])}"><div class="hub-group-head"><h2 data-split>{esc(g["name"])}</h2><p>{esc(g["blurb"])}</p></div>'
                   f'<div class="link-cards" data-scheda-set>{cards}</div></section>')
    hero_ = page_hero(P, [('Home', 'index.html'), ('Trattamenti', None)], 'I trattamenti dello studio',
                      'Dodici aree di cura, dalla prevenzione alla chirurgia, per adulti e bambini. Scegli quella che ti interessa: trovi come lavoriamo, quando serve e le schede da leggere.',
                      extra=f'<div class="btn-row" style="margin-top:var(--sp-5)"><button class="btn btn-secondary" type="button" data-open-search>{ICON["search"]}Cerca un trattamento</button><a class="btn btn-primary" href="{P}prenota.html">Prenota una visita</a></div>')
    main = (hero_ + section(groups, prev=None, tight=True) + section(cta_band(P, title='Non sai quale trattamento ti serve?', text='Capita spesso: con una visita lo capiamo insieme, senza impegno.'), prev='', tight=True))
    ld = [breadcrumb([('Home', ''), ('Trattamenti', 'servizi.html')]),
          {"@context": "https://schema.org", "@type": "CollectionPage", "@id": SITE_URL + "/servizi.html#pagina", "url": SITE_URL + "/servizi.html", "name": 'Trattamenti dentistici a Patti', "inLanguage": "it-IT",
           "isPartOf": {"@id": SITE_URL + "/#sito"}, "about": provider(),
           "mainEntity": {"@type": "ItemList", "itemListElement": [{"@type": "ListItem", "position": i + 1, "name": S[s]['name'], "url": f"{SITE_URL}/servizi/{s}.html"} for i, s in enumerate(SERVICE_ORDER)]}}]
    return dict(path='servizi.html', title='Trattamenti dentistici a Patti (ME) | Studio Colombo',
                desc="Tutti i trattamenti dello Studio Dentistico Colombo a Patti: igiene, conservativa, endodonzia, parodontologia, implantologia, protesi, ortodonzia, estetica e pedodonzia.",
                nav='servizi', main=main, ld=ld)

# ============================================================ PAGINA TRATTAMENTO ===
HOW_ICONS = ['clock', 'shield', 'smile', 'info', 'check']

def service_page(slug):
    P = '../'
    s = S[slug]
    url = f'{SITE_URL}/servizi/{slug}.html'
    grp = next(g for g in GROUPS if slug in g['services'])
    schede = [SCHEDE_BY_SLUG[x] for x in s['schede']]
    chips = [grp['name'], 'Studio di famiglia a Patti'] + (['Con schede informative'] if schede else [])
    chips_html = ''.join(f'<span class="chip">{esc(c)}</span>' for c in chips)
    msg = f'Buongiorno, vorrei informazioni su: {s["name"]}.'
    rings = ('<svg class="rings" viewBox="-20 -20 340 340" aria-hidden="true">'
             '<g transform="rotate(150 150 150)"><circle class="r1" cx="150" cy="150" r="150"/></g>'
             '<g transform="rotate(-35 150 150)"><circle class="r2" cx="150" cy="150" r="124"/></g>'
             '<g transform="rotate(60 150 150)"><circle class="r3" cx="150" cy="150" r="98"/></g></svg>')
    hero_ = (f'<section class="page-hero"><div class="container">{crumbs([("Home", "index.html"), ("Trattamenti", "servizi.html"), (s["name"], None)], P)}'
             f'<div class="svc-hero-grid"><div><h1>{esc(s["h1"])}</h1><p class="lead">{esc(s["lead"])}</p><div class="svc-chips">{chips_html}</div>'
             f'<div class="btn-row"><a class="btn btn-primary" href="{P}prenota.html">{ICON["calendar"]}Prenota una visita</a>{wa_icon_btn(P, "Scrivici su WhatsApp", msg)}</div></div>'
             f'<div class="svc-visual" aria-hidden="true">{rings}<div class="badge">{s["icon"]}</div></div></div></div></section>')

    toc_items = [('cose', 'In cosa consiste'), ('quando', 'Quando serve'), ('come', 'Come lavoriamo')] + ([('schede', 'Schede')] if schede else []) + [('domande', 'Domande')]
    toc = '<div class="toc-title">In questa pagina</div>' + ''.join(f'<a href="#{i}">{t}</a>' for i, t in toc_items)
    toc_bar = '<nav class="toc-bar" aria-label="In questa pagina">' + ''.join(f'<a href="#{i}">{t}</a>' for i, t in toc_items) + '</nav>'

    about = ''.join(f'<p class="{"lead-p" if i == 0 else ""}">{esc(t)}</p>' for i, t in enumerate(s['about']))
    ticks = ''.join(f'<li>{ICON["check"]}<span>{rich(b)}</span></li>' for b in s['bullets'])
    signs = ''.join(f'<li>{ICON["check"]}<span>{esc(b)}</span></li>' for b in s['signs'])
    how = ''.join(f'<div class="how-card"><span class="hc-ico">{ICON[HOW_ICONS[i % len(HOW_ICONS)]]}</span><h3>{esc(t)}</h3><p>{esc(d)}</p></div>' for i, (t, d) in enumerate(s['how']))
    sec_cose = f'<section class="svc-sec" id="cose"><h2 data-split data-smile>In cosa consiste</h2><div class="prose">{about}</div><p class="mini-h">Di cosa ci occupiamo</p><ul class="tick-list">{ticks}</ul></section>'
    sec_quando = f'<section class="svc-sec" id="quando"><h2 data-split data-smile>Quando conviene farsi visitare</h2><div class="prose"><p>Potresti aver bisogno di questo trattamento se ti riconosci in una di queste situazioni.</p></div><ul class="tick-list signs">{signs}</ul></section>'
    sec_come = f'<section class="svc-sec" id="come"><h2 data-split data-smile>Come lavoriamo</h2><div class="how-grid">{how}</div></section>'
    sec_sch = ''
    if schede:
        cards = ''.join(scheda_card(x, P, area=False) for x in schede)
        sec_sch = (f'<section class="svc-sec" id="schede"><div class="schede-box" data-scheda-set><h2 data-split data-smile>Le schede informative</h2>'
                   f'<p class="sb-lead">Spiegazioni illustrate, passo per passo. Le puoi leggere con calma oppure le apriamo insieme, a tutto schermo, durante la visita: un tocco e si aprono.</p>'
                   f'<div class="scheda-grid">{cards}</div><p style="margin-top:var(--sp-5)"><a class="link-arrow" href="{P}schede.html">Tutte le schede informative {ICON["arrow"]}</a></p></div></section>')
    faqs = ''.join(faq_item(q, f'<p>{esc(a)}</p>') for q, a in s['faq'])
    sec_faq = f'<section class="svc-sec" id="domande"><h2 data-split data-smile>Domande frequenti</h2><div class="faq-list">{faqs}</div>' \
              f'<div class="note-box">{ICON["info"]}<p>Le informazioni di questa pagina sono generali e non sostituiscono una visita: il piano di cura dipende sempre dal tuo caso.</p></div></section>'

    doc = DOCTOR_NOTE.get(slug)
    aside = (f'<aside class="svc-aside"><div class="book-card"><h3>Vuoi parlarne con noi?</h3><p>Una visita ti dà una risposta per il tuo caso. Prenota o scrivici.</p>'
             f'<a class="btn btn-primary btn-block" href="{P}prenota.html">Prenota una visita</a>'
             f'<a class="btn btn-secondary btn-block" href="tel:{PHONE_HREF}" data-tel>{ICON["phone"]}Chiama {PHONE}</a>'
             f'{wa_icon_btn(P, "WhatsApp", msg).replace("btn btn-whatsapp", "btn btn-whatsapp btn-block")}'
             f'<div class="bc-status"><span data-open-status>{HOURS_SHORT}</span></div></div>'
             + (f'<div class="aside-note">{esc(doc)}</div>' if doc else '')
             + f'<div class="aside-note">Vuoi vedere come si svolge una visita? <a href="{P}prima-visita.html">Leggi la prima visita</a>.</div></aside>')
    layout = f'{toc_bar}<div class="svc-layout"><nav class="toc" aria-label="In questa pagina">{toc}</nav><div class="svc-main">{sec_cose}{sec_quando}{sec_come}{sec_sch}{sec_faq}</div>{aside}</div>'

    rel = ''.join(f'<a class="service-link-card" href="{P}servizi/{r}.html" data-anim="iris"><span class="icon">{S[r]["icon"]}</span><h3>{esc(S[r]["name"])}</h3><p>{esc(BLURB[r])}</p><span class="more">Scopri di più {ICON["arrow"]}</span></a>' for r in s['related'])
    related = head_block('Per approfondire', 'Trattamenti collegati') + f'<div class="link-cards">{rel}</div>'

    main = (hero_ + section(layout, prev=None, tight=True) + section(related, bg='bg-alt', prev='') +
            section(cta_band(P, title=f'Parliamone in una visita.', text='Ti spieghiamo cosa è possibile fare nel tuo caso, con calma e senza impegno.', msg=msg), prev='bg-alt', bg='', tight=True))
    ld = [breadcrumb([('Home', ''), ('Trattamenti', 'servizi.html'), (s['name'], f'servizi/{slug}.html')]),
          {"@context": "https://schema.org", "@type": "Service", "@id": url + "#servizio", "url": url, "name": s['name'], "serviceType": s['name'], "description": s['seo_desc'],
           "provider": provider(), "areaServed": [{"@type": "City", "name": "Patti"}, {"@type": "AdministrativeArea", "name": "Provincia di Messina"}],
           "audience": {"@type": "PeopleAudience", "audienceType": "Pazienti adulti e bambini"}},
          faq_ld([(q, a) for q, a in s['faq']])]
    return dict(path=f'servizi/{slug}.html', P=P, title=s['seo_title'], desc=s['seo_desc'], nav='servizi', main=main, ld=ld, footer_prev='var(--paper)')

# ================================================================ HUB SCHEDE ===
def hub_schede():
    P = ''
    pills = '<button class="fpill" type="button" data-f-cat="all" aria-pressed="true">Tutte</button>' + ''.join(
        f'<button class="fpill" type="button" data-f-cat="{k}" aria-pressed="false">{esc(v)}</button>' for k, v in AREAS)
    cards = ''.join(scheda_card(sc, P) for sc in SCHEDE)
    howto = ''.join(f'<div class="ht"><span class="hc-ico">{ICON[i]}</span><div><h2 class="as-h3">{esc(t)}</h2><p>{esc(p)}</p></div></div>' for i, t, p in [
        ('file', 'Leggila con calma', 'Ogni scheda spiega il trattamento passo per passo: a cosa serve, come si svolge, quanto dura, quali sono i rischi e cosa fare dopo.'),
        ('screen', 'Guardala insieme a noi', 'In studio possiamo aprire la scheda a tutto schermo e vederla insieme, per rispondere ai tuoi dubbi mentre la leggi.'),
        ('qr', 'Portala con te', 'Ogni scheda ha un link e un codice QR: puoi mandarla a un familiare o ritrovarla più tardi dal telefono.')])
    body = (f'<div class="how-to">{howto}</div><div style="height:var(--sp-7)"></div>'
            f'<div data-filter><div class="filter-bar"><div class="filter-pills" role="group" aria-label="Filtra per argomento">{pills}</div>'
            f'<label class="search-field">{ICON["search"]}<span class="visually-hidden">Cerca nelle schede</span><input type="search" data-f-search placeholder="Cerca una scheda…" autocomplete="off" enterkeyhint="search"></label></div>'
            f'<p class="text-soft" data-f-count aria-live="polite" style="margin:-.6rem 0 var(--sp-4);font-size:var(--small)">{len(SCHEDE)} risultati</p>'
            f'<div class="scheda-grid" data-scheda-set>{cards}</div>'
            f'<div class="empty-state" data-f-empty hidden><b>Nessuna scheda trovata</b>Prova con un’altra parola, per esempio «impianto», «sbiancamento» o «canalare».</div></div>'
            f'<div class="note-box">{ICON["info"]}<p>Le schede servono a capire un trattamento in generale e non sostituiscono la visita: il piano di cura dipende sempre dal tuo caso.</p></div>')
    hero_ = page_hero(P, [('Home', 'index.html'), ('Schede informative', None)], 'Schede informative per i pazienti',
                      'Dodici schede illustrate che spiegano i trattamenti in modo semplice. Da leggere a casa, da guardare insieme in studio, da condividere con chi vuoi.')
    main = hero_ + section(body, prev=None, tight=True) + section(cta_band(P, title='Hai letto una scheda e hai dei dubbi?', text='Scrivici o chiamaci: ne parliamo con calma.', msg='Buongiorno, ho letto una scheda sul vostro sito e vorrei qualche informazione.'), prev='', tight=True)
    ld = [breadcrumb([('Home', ''), ('Schede informative', 'schede.html')]),
          {"@context": "https://schema.org", "@type": "CollectionPage", "@id": SITE_URL + "/schede.html#pagina", "url": SITE_URL + "/schede.html", "name": 'Schede informative per i pazienti', "inLanguage": "it-IT",
           "isPartOf": {"@id": SITE_URL + "/#sito"}, "publisher": provider(),
           "mainEntity": {"@type": "ItemList", "itemListElement": [{"@type": "ListItem", "position": i + 1, "name": sc['title'], "url": f"{SITE_URL}/schede/{sc['slug']}.html"} for i, sc in enumerate(SCHEDE)]}}]
    return dict(path='schede.html', title='Schede informative sui trattamenti dentali | Studio Colombo Patti',
                desc="Schede illustrate per capire impianti, protesi, cura canalare, faccette, sbiancamento e igiene. Da leggere, mostrare in studio o condividere. Studio Dentistico Colombo, Patti.",
                nav='schede', main=main, ld=ld)
