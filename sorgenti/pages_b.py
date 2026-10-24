# -*- coding: utf-8 -*-
"""Pagine: chi siamo, prima visita, dentista a Patti, contatti, prenota, FAQ, privacy, cookie, 404."""
from sitelib import *
from pages_a import BLURB, provider, website_ld, TEAM, team_grid, assist_row, portrait

# ============================================================== CHI SIAMO =====
def chi_siamo():
    P = ''
    hero_ = page_hero(P, [('Home', 'index.html'), ('Chi siamo', None)], 'Padre e figli, dentisti insieme a Patti',
                      'Lo Studio Dentistico Colombo nasce a Patti come studio di famiglia: oggi Alfredo, Roberto e Aurora Colombo lavorano fianco a fianco, ogni giorno, nello stesso ambulatorio.')
    storia = (head_block('La nostra storia', 'Una famiglia che si prende cura del tuo sorriso') +
              '<div class="two-col"><div class="prose"><p class="lead-p">Quello che oggi è lo Studio Dentistico Colombo è nato dal lavoro del Dott. Alfredo Colombo, che nel tempo ha condiviso l’ambulatorio con i figli Roberto e Aurora, entrambi diventati a loro volta odontoiatri.</p>'
              '<p>Non siamo tre professionisti che condividono uno spazio: siamo una famiglia che ha scelto di esercitare la stessa professione, nello stesso studio, per le stesse persone.</p></div>'
              '<div class="prose"><p>Questo significa poter contare su una continuità rara: chi ti segue oggi conosce la tua storia clinica, ed è la stessa persona — o un collega di famiglia — che ti seguirà anche fra dieci anni.</p>'
              '<p>Ogni paziente ha un dentista di riferimento, ma può contare sul confronto costante fra Alfredo, Roberto e Aurora per le decisioni più delicate: tre punti di vista della stessa famiglia, sullo stesso caso.</p></div></div>')
    come = (head_block('Come lavoriamo', 'In studio, dalla porta alla poltrona') +
            '<div class="how-grid">'
            f'<div class="how-card" data-anim="iris"><span class="hc-ico">{ICON["smile"]}</span><h3>Daniela e Tonina</h3><p>Le nostre assistenti alla poltrona seguono ogni visita dall’accoglienza in studio fino al termine della seduta, per rendere il tempo passato da noi il più semplice e sereno possibile.</p></div>'
            f'<div class="how-card" data-anim="iris"><span class="hc-ico">{ICON["screen"]}</span><h3>Scanner intraorale</h3><p>Già dalla prima visita, quando è utile, usiamo uno scanner intraorale per esaminare la bocca senza dover ricorrere alle impronte tradizionali. <a class="link-underline" href="{P}servizi/scanner-intraorale.html">Come funziona</a>.</p></div>'
            f'<div class="how-card" data-anim="iris"><span class="hc-ico">{ICON["file"]}</span><h3>Schede illustrate</h3><p>Per spiegarti i trattamenti usiamo anche le nostre schede informative: le puoi leggere a casa o guardare insieme a noi. <a class="link-underline" href="{P}schede.html">Vedi le schede</a>.</p></div>'
            f'<div class="how-card" data-anim="iris"><span class="hc-ico">{ICON["clock"]}</span><h3>Tempo per le domande</h3><p>Prima di ogni trattamento ti raccontiamo cosa faremo e perché, con parole semplici, senza tecnicismi inutili.</p></div></div>')
    team = (head_block('Il team', 'I dentisti dello studio') + team_grid(P, long=True) + assist_row(center=False))
    values = [
        ('info', 'Ti spieghiamo tutto', 'Prima di ogni trattamento ti raccontiamo cosa faremo e perché, con parole semplici, senza tecnicismi inutili.'),
        ('file', 'Un piano di cura chiaro', 'Sappiamo che il tempo e i costi contano: ti presentiamo sempre un piano di cura chiaro prima di iniziare.'),
        ('shield', 'Ti seguiamo nel tempo', 'Non ci limitiamo alla singola visita: teniamo traccia della tua storia clinica per curarti al meglio negli anni.'),
        ('smile', 'Un ambiente sereno', 'Dai più piccoli ai più anziani, lo studio è pensato per mettere a proprio agio ogni tipo di paziente.'),
    ]
    vh = ''.join(f'<div class="bring" data-anim="iris"><span class="hc-ico">{ICON[i]}</span><h3>{esc(t)}</h3><p>{esc(p)}</p></div>' for i, t, p in values)
    val = head_block('Come ti trattiamo', 'Professionali, ma mai distanti') + f'<div class="bring-grid">{vh}</div>'
    cta = cta_band(P, title='Vuoi conoscerci di persona?', text='Prenota una visita o passa a trovarci: ti accogliamo con piacere.', msg='Buongiorno, vorrei prenotare una visita.')
    main = (hero_ + section(storia, prev=None) + section(come, bg='bg-warm', prev='') + section(team, prev='bg-warm', bg='') + section(val, bg='bg-alt', prev='') + section(cta, prev='bg-alt', bg='', tight=True))
    persons = [{"@context": "https://schema.org", "@type": "Person", "name": t['name'].replace('Dott.ssa ', '').replace('Dott. ', ''), "jobTitle": "Odontoiatra",
                "honorificPrefix": "Dott.ssa" if 'ssa' in t['name'] else "Dott.", "worksFor": provider(), "alumniOf": {"@type": "CollegeOrUniversity", "name": t['uni']},
                "description": t['long'], "image": f"{SITE_URL}/assets/team/{t['slug']}.jpg"} for t in TEAM]
    ld = [breadcrumb([('Home', ''), ('Chi siamo', 'chi-siamo.html')]),
          {"@context": "https://schema.org", "@type": "AboutPage", "@id": SITE_URL + "/chi-siamo.html#pagina", "url": SITE_URL + "/chi-siamo.html", "name": 'Chi siamo', "inLanguage": "it-IT",
           "isPartOf": {"@id": SITE_URL + "/#sito"}, "about": provider()}] + persons
    return dict(path='chi-siamo.html', title='Chi siamo | Dentisti a Patti: Alfredo, Roberto e Aurora Colombo',
                desc='Lo Studio Dentistico Colombo è uno studio di famiglia a Patti: Alfredo, Roberto e Aurora Colombo, con Daniela e Tonina. La nostra storia e come lavoriamo.',
                nav='chi-siamo', main=main, ld=ld, footer_prev='var(--paper)')

# ============================================================ PRIMA VISITA =====
FAQ_PV = [
    ("Devo portare qualcosa alla prima visita?", "Ti chiediamo il codice fiscale (la tessera sanitaria va benissimo), l'elenco dei farmaci che prendi e, se ce l'hai, le radiografie o i referti di visite precedenti."),
    ("Posso venire se ho paura del dentista?", "Certo, ed è più comune di quanto pensi. Dillo subito: ti spieghiamo ogni passaggio prima di farlo, e la prima visita serve proprio a conoscerci senza fretta."),
    ("Dopo la visita devo decidere subito?", "No. Ti spieghiamo cosa abbiamo trovato, le alternative e i costi. Il piano di cura è chiaro prima di iniziare e hai il tempo che ti serve per decidere."),
]

def prima_visita():
    P = ''
    steps = [
        ('Prenoti', 'Come preferisci', ['Telefono: <a class="link-underline" href="tel:+39094122749" data-tel>0941 22749</a>', 'WhatsApp, anche fuori orario: ti rispondiamo appena possibile', 'Il <a class="link-underline" href="prenota.html">modulo del sito</a>: prepara il messaggio per te'],
         'Se hai un dolore forte o un gonfiore, dillo subito: cerchiamo sempre di trovare spazio per le urgenze.'),
        ('Arrivi in studio', 'Daniela o Tonina ti accolgono', ['Ti chiediamo qualche informazione sulla tua salute e sui farmaci che prendi', 'Se hai radiografie o referti recenti, portali', 'Per i bambini, è necessario un genitore o chi esercita la responsabilità'],
         'Arriva con qualche minuto di anticipo, così la visita parte senza fretta.'),
        ('Visita', 'Guardiamo denti, gengive e bocca', ['Controlliamo denti, gengive e mucose', 'Quando è utile usiamo lo scanner intraorale, senza impronte in pasta', 'Se serve, una radiografia'],
         'Se qualcosa ti preoccupa, diccelo: ci fermiamo quando hai bisogno di una pausa.'),
        ('Il piano di cura', 'Ti spieghiamo, tu decidi', ['Cosa abbiamo trovato e perché', 'Le strade possibili, con vantaggi e limiti di ciascuna', 'Tempi e costi, chiari prima di iniziare'],
         'Possiamo mostrarti le schede illustrate sul trattamento, a tutto schermo, e dartele da portare via con un link o un QR.'),
        ('Dopo la visita', 'Non ti lasciamo da solo', ['Ti diciamo cosa fare a casa e quando tornare', 'Per qualsiasi dubbio puoi chiamarci o scriverci su WhatsApp', 'Il tuo dentista di riferimento conosce già la tua storia'],
         ''),
    ]
    tl = ''
    for i, (t, sub, items, note) in enumerate(steps, 1):
        lis = ''.join(f'<li>{ICON["check"]}<span>{it}</span></li>' for it in items)
        nt = f'<p style="margin-top:var(--sp-3);font-size:var(--small)">{esc(note)}</p>' if note else ''
        tl += f'<div class="tl-step"><div class="tl-num"><span>{i}</span></div><div class="tl-card" data-anim="iris"><h2>{esc(t)}</h2><p>{esc(sub)}</p><ul>{lis}</ul>{nt}</div></div>'
    bring = ''.join(f'<div class="bring" data-anim="iris"><span class="hc-ico">{ICON[i]}</span><h3>{esc(t)}</h3><p>{esc(p)}</p></div>' for i, t, p in [
        ('file', 'Codice fiscale', 'La tessera sanitaria va benissimo.'),
        ('info', 'Elenco dei farmaci', 'Anche quelli senza ricetta, e se hai allergie o patologie di cui tenere conto.'),
        ('screen', 'Radiografie e referti', 'Panoramiche, lastre o relazioni di altri dentisti, se le hai.'),
        ('baby', 'Per i bambini', 'Un genitore, o chi esercita la responsabilità genitoriale.')])
    faqs = ''.join(faq_item(q, f'<p>{esc(a)}</p>') for q, a in FAQ_PV)
    aside_pv = (f'<aside class="svc-aside tl-aside"><div class="book-card"><h3>Pronto a venire?</h3><p>Ti rispondiamo con le date più vicine. Per un dolore forte o un gonfiore, chiamaci subito.</p>'
                f'<a class="btn btn-primary btn-block" href="{P}prenota.html">Prenota una visita</a>'
                f'<a class="btn btn-secondary btn-block" href="tel:{PHONE_HREF}" data-tel>{ICON["phone"]}Chiama {PHONE}</a>'
                f'{wa_icon_btn(P, "WhatsApp", "Buongiorno, vorrei prenotare una prima visita.").replace("btn btn-whatsapp", "btn btn-whatsapp btn-block")}'
                f'<div class="bc-status"><span data-open-status>{HOURS_SHORT}</span></div></div>'
                f'<div class="aside-note">Hai paura del dentista? Dillo a Daniela e Tonina appena arrivi. Se vuoi sapere prima se si sente male, <a href="{P}faq.html#d-le-cure-dal-dentista-sono-dolorose">leggi la risposta</a>.</div></aside>')
    intro = (f'<div class="tl-layout"><div class="timeline" data-path>{tl}</div>{aside_pv}</div>')
    hero_ = page_hero(P, [('Home', 'index.html'), ('La prima visita', None)], 'La prima visita, passo dopo passo',
                      'Sapere cosa aspettarti toglie metà dell’ansia. Ecco come va una prima visita allo Studio Dentistico Colombo, a Patti.',
                      extra=f'<div class="btn-row" style="margin-top:var(--sp-5)"><a class="btn btn-primary" href="{P}prenota.html">{ICON["calendar"]}Prenota una visita</a>{wa_icon_btn(P, "Scrivici su WhatsApp", "Buongiorno, vorrei prenotare una prima visita.")}</div>')
    main = (hero_ + section(intro, prev=None, tight=True) +
            section(head_block('Cosa portare', 'Poche cose, tutte semplici') + f'<div class="bring-grid">{bring}</div>', bg='bg-warm', prev='') +
            section(head_block('Domande frequenti', 'Prima di venire') + f'<div class="faq-list">{faqs}</div><p style="margin-top:var(--sp-5)"><a class="link-arrow" href="{P}faq.html">Tutte le domande frequenti {ICON["arrow"]}</a></p>', prev='bg-warm', bg='') +
            section(cta_band(P, title='Pronto a fissare la prima visita?', text='Scegli come preferisci: ti rispondiamo con le date più vicine.', msg='Buongiorno, vorrei prenotare una prima visita.'), prev='', bg='', tight=True))
    ld = [breadcrumb([('Home', ''), ('La prima visita', 'prima-visita.html')]),
          {"@context": "https://schema.org", "@type": "WebPage", "@id": SITE_URL + "/prima-visita.html#pagina", "url": SITE_URL + "/prima-visita.html", "name": 'La prima visita dal dentista a Patti', "inLanguage": "it-IT",
           "isPartOf": {"@id": SITE_URL + "/#sito"}, "about": provider()}, faq_ld(FAQ_PV)]
    return dict(path='prima-visita.html', title='La prima visita dal dentista a Patti: come funziona | Studio Colombo',
                desc='Come si svolge la prima visita dal dentista: prenotazione, accoglienza, visita, piano di cura e cosa portare. Studio Dentistico Colombo, Patti (ME).',
                nav='prima-visita', main=main, ld=ld)

# ========================================================== DENTISTA A PATTI ===
FAQ_LOCAL = [
    ("Dove si trova lo Studio Dentistico Colombo?", f"Siamo a Patti, in provincia di Messina, in {ADDRESS_LINE.replace(', 98066 Patti (ME)', '')}. Dall'autostrada A20 si esce a Patti. Trovi la mappa e le indicazioni nella pagina contatti."),
    ("Quali sono gli orari dello studio?", "Riceviamo dal lunedì al giovedì dalle 8:30 alle 12:30 e dalle 16:00 alle 20:00, il venerdì dalle 8:30 alle 12:30. Il sabato e la domenica siamo chiusi."),
    ("Come posso prenotare una visita?", "Puoi chiamare lo 0941 22749, scrivere su WhatsApp al 379 152 3085 oppure usare il modulo di prenotazione del sito, che prepara per te il messaggio da inviare."),
    ("Visitate anche i bambini?", "Sì. In studio il punto di riferimento per i pazienti bambini è Aurora Colombo. Una prima visita può essere fatta già in tenera età, appena spuntano i primi denti da latte."),
    ("Ricevete pazienti dai paesi vicini?", "Sì: molti pazienti vengono da Gioiosa Marea, Brolo, Capo d'Orlando, Oliveri, Montagnareale, Sant'Angelo di Brolo, Piraino, Librizzi, Falcone, Furnari, Barcellona Pozzo di Gotto e da altri comuni della provincia di Messina."),
    ("Cosa fare in caso di urgenza?", "Se siamo aperti, chiamaci subito: cerchiamo sempre di trovare spazio per le urgenze. Fuori orario, per un trauma importante, rivolgiti al pronto soccorso più vicino."),
]

def dentista_patti():
    P = ''
    svc = ''.join(f'<li><a class="link-arrow" href="{P}servizi/{s}.html">{esc(S[s]["name"])}</a></li>' for s in SERVICE_ORDER)
    choose = [
        ('Che sia iscritto all’Albo', 'Ogni odontoiatra deve essere iscritto all’Albo dei Medici Chirurghi e degli Odontoiatri: puoi verificarlo sul sito dell’Ordine della provincia.'),
        ('Che ti spieghi tutto con chiarezza', 'Cosa ha trovato, quali alternative ci sono, quanto dura e quali rischi comporta ciascuna cura. Se non capisci, chiedi: è un tuo diritto.'),
        ('Un preventivo chiaro, per iscritto', 'Prima di iniziare dovresti sapere cosa verrà fatto, in quanti appuntamenti e a che costo.'),
        ('Che ti segua nel tempo', 'Una cura dentale non finisce con l’ultima seduta: servono controlli, e conviene avere un dentista di riferimento che conosca la tua storia.'),
        ('Che sia facile da raggiungere', 'Per i controlli ogni sei mesi, ma anche per un’urgenza, contano la vicinanza e la possibilità di essere ricevuti in tempi ragionevoli.'),
    ]
    ch = ''.join(f'<li><div><b>{esc(t)}</b><span>{esc(d)}</span></div></li>' for t, d in choose)
    towns = ''.join(f'<li>{esc(t)}</li>' for t in TOWNS)
    faqs = ''.join(faq_item(q, f'<p>{esc(a)}</p>') for q, a in FAQ_LOCAL)
    s1 = (f'<div class="two-col"><div class="prose"><p class="lead-p">Lo Studio Dentistico Colombo è uno studio dentistico di famiglia a Patti, in provincia di Messina. Ci lavorano tre dentisti: Alfredo, Roberto e Aurora Colombo, insieme alle assistenti Daniela e Tonina.</p>'
          f'<p>Alfredo esercita a Patti dal 1992, Roberto e Aurora sono i figli: oggi lavorano insieme nello stesso studio, per le stesse persone. Ci occupiamo di igiene e prevenzione, conservativa, endodonzia, parodontologia, chirurgia orale, implantologia, protesi, ortodonzia, gnatologia, estetica e pedodonzia.</p>'
          f'<div class="btn-row"><a class="btn btn-primary" href="{P}prenota.html">{ICON["calendar"]}Prenota una visita</a><a class="btn btn-secondary" href="{P}chi-siamo.html">Chi siamo</a></div></div>'
          f'<div class="panel"><div class="info-list">{info_rows(P)}<div class="info-row"><span class="icon">{ICON["clock"]}</span><div><p class="info-label">Orari</p><p><span data-open-status>{HOURS_SHORT}</span></p></div></div></div></div></div>')
    chips = ''.join(service_chip(s, P) for s in SERVICE_ORDER)
    s2 = (head_block('Cosa trovi da noi', 'Tutti i trattamenti, in un solo studio') + f'<div class="service-chip-grid">{chips}</div>')
    s3 = (head_block('Come scegliere', 'Come scegliere il dentista giusto a Patti', 'Non esiste un «miglior dentista» valido per tutti: esiste il dentista giusto per te. Questi sono i criteri a cui conviene guardare, da noi come da chiunque altro.') +
          f'<ol class="check-steps">{ch}</ol>')
    s4 = (head_block('Da tutta la zona', 'Un dentista a Patti per chi vive nei dintorni', 'Da noi vengono pazienti da tutta la zona. Dall’autostrada A20 si esce a Patti.') +
          f'<ul class="town-list">{towns}</ul><p class="text-soft">E da altri comuni della provincia di Messina. Se vieni da lontano, possiamo concentrare le sedute per limitare gli spostamenti: chiedilo quando prenoti.</p>'
          f'<div style="margin-top:var(--sp-6)">{map_card(P)}</div>')
    s5 = head_block('Domande frequenti', 'Dentista a Patti: le domande più comuni') + f'<div class="faq-list">{faqs}</div>'
    main = (page_hero(P, [('Home', 'index.html'), ('Dentista a Patti', None)], 'Dentista a Patti: Studio Dentistico Colombo',
                      'Tre dentisti della stessa famiglia, in Via Fontanella a Patti (Messina). Visite per adulti e bambini, dalla prevenzione all’implantologia.') +
            section(s1, prev=None, tight=True) + section(s2, bg='bg-warm', prev='') + section(s3, prev='bg-warm', bg='') +
            section(s4, bg='bg-alt', prev='') + section(s5, prev='bg-alt', bg='') + section(cta_band(P), prev='', bg='', tight=True))
    d = dentist_full()
    ld = [breadcrumb([('Home', ''), ('Dentista a Patti', 'dentista-patti.html')]),
          {"@context": "https://schema.org", "@type": "WebPage", "@id": SITE_URL + "/dentista-patti.html#pagina", "url": SITE_URL + "/dentista-patti.html", "name": 'Dentista a Patti (ME)', "inLanguage": "it-IT",
           "isPartOf": {"@id": SITE_URL + "/#sito"}, "about": provider(), "mainEntity": provider()}, faq_ld(FAQ_LOCAL)]
    return dict(path='dentista-patti.html', title='Dentista a Patti (ME) | Studio Dentistico Colombo',
                desc='Cerchi un dentista a Patti? Studio Dentistico Colombo, in Via Fontanella: tre dentisti di famiglia, orari, come scegliere il dentista giusto e come prenotare.',
                nav='', main=main, ld=ld)

# ================================================================ CONTATTI =====
def contatti():
    P = ''
    left = (f'<div class="info-list">{info_rows(P)}</div>'
            f'<div style="margin-top:var(--sp-6)"><h2 style="font-size:1.4rem;margin-bottom:var(--sp-3)">Orari di apertura</h2><p style="margin-bottom:var(--sp-3)"><span data-open-status>{HOURS_SHORT}</span></p>{hours_table()}</div>')
    right = (map_card(P) + f'<div class="btn-row" style="margin-top:var(--sp-4)"><button class="btn btn-secondary btn-sm" type="button" data-vcard>{ICON["plus"]}Salva in rubrica</button>'
             f'<a class="btn btn-secondary btn-sm" data-gmaps href="https://www.google.com/maps/search/?api=1&query=Studio+Dentistico+Colombo+Patti+ME" target="_blank" rel="noopener">{ICON["external"]}Indicazioni</a></div>'
             f'<div class="note-box">{ICON["car"]}<p>Arrivi in auto? Dall’autostrada A20 esci a Patti. Per le urgenze fuori orario, in caso di trauma importante, rivolgiti al pronto soccorso più vicino.</p></div>')
    form = (f'<div class="panel"><h2 style="font-size:var(--h3)" data-split>Hai una domanda prima di prenotare?</h2>'
            '<p class="text-soft" style="margin:var(--sp-3) 0 var(--sp-5)">Compila il modulo: si aprirà la tua email già pronta da inviare allo studio. Per una richiesta più rapida, usa WhatsApp.</p>'
            '<form id="contact-form" class="form-grid" novalidate>'
            '<div class="form-row"><div class="field"><label for="c-nome">Nome e cognome</label><input id="c-nome" name="nome" type="text" autocomplete="name" required><span class="error">Inserisci il tuo nome.</span></div>'
            '<div class="field"><label for="c-tel">Telefono <span class="hint">(facoltativo)</span></label><input id="c-tel" name="telefono" type="tel" autocomplete="tel" inputmode="tel"><span class="error">Inserisci un numero valido.</span></div></div>'
            '<div class="field"><label for="c-email">Email</label><input id="c-email" name="email" type="email" autocomplete="email" required><span class="error">Inserisci un indirizzo email valido.</span></div>'
            '<div class="field"><label for="c-msg">Messaggio</label><textarea id="c-msg" name="messaggio" rows="5" required></textarea><span class="error">Scrivi un messaggio.</span></div>'
            f'<div class="btn-row"><button class="btn btn-primary" type="submit">{ICON["mail"]}Invia messaggio</button>{wa_icon_btn(P, "Preferisco WhatsApp", "Buongiorno, ho una domanda.")}</div>'
            '<div class="form-status" role="status" aria-live="polite"></div></form></div>')
    main = (page_hero(P, [('Home', 'index.html'), ('Contatti', None)], 'Vieni a trovarci, o scrivici prima',
                      'Siamo a Patti, in Via Fontanella. Qui trovi indirizzo, contatti e orari aggiornati in tempo reale.') +
            section(f'<div class="contact-grid"><div>{left}</div><div>{right}</div></div>', prev=None, tight=True) +
            section(form, bg='bg-alt', prev='') + section(cta_band(P, title='Preferisci sentirci a voce?', text='Siamo al telefono negli orari di apertura.'), prev='bg-alt', bg='', tight=True))
    d = dentist_full()
    ld = [breadcrumb([('Home', ''), ('Contatti', 'contatti.html')]),
          {"@context": "https://schema.org", "@type": "ContactPage", "@id": SITE_URL + "/contatti.html#pagina", "url": SITE_URL + "/contatti.html", "name": 'Contatti', "inLanguage": "it-IT",
           "isPartOf": {"@id": SITE_URL + "/#sito"}, "about": d}]
    return dict(path='contatti.html', title='Contatti e orari | Studio Dentistico Colombo, Patti (ME)',
                desc='Indirizzo, telefono, WhatsApp, email e orari dello Studio Dentistico Colombo a Patti (Messina). Siamo in Via Fontanella: contattaci o prenota una visita.',
                nav='contatti', main=main, ld=ld)

# ================================================================= PRENOTA =====
def prenota():
    P = ''
    opts = '<option value="Prima visita / non so ancora" selected>Prima visita / non so ancora</option>' + ''.join(
        f'<option value="{esc(S[s]["name"])}">{esc(S[s]["name"])}</option>' for s in SERVICE_ORDER if s != 'scanner-intraorale')
    def pills(name, vals, checked):
        return '<div class="pill-group">' + ''.join(
            f'<label class="pill"><input type="radio" name="{name}" value="{esc(v)}"{" checked" if v == checked else ""}><span>{esc(v)}</span></label>' for v in vals) + '</div>'
    form = (f'<div class="panel"><form id="booking-form" class="form-grid" novalidate>'
            '<div class="form-row"><div class="field"><label for="p-nome">Nome e cognome</label><input id="p-nome" name="nome" type="text" autocomplete="name" required><span class="error">Inserisci il tuo nome.</span></div>'
            '<div class="field"><label for="p-tel">Telefono</label><input id="p-tel" name="telefono" type="tel" autocomplete="tel" inputmode="tel" required><span class="error">Inserisci un numero di telefono valido.</span></div></div>'
            f'<fieldset class="field"><legend>Per chi è la visita?</legend>{pills("per", ["Per me", "Per mio figlio/a", "Per un familiare"], "Per me")}</fieldset>'
            f'<fieldset class="field"><legend>Sei già nostro paziente?</legend>{pills("paziente", ["Sì, sono già paziente", "No, è la prima volta"], "No, è la prima volta")}</fieldset>'
            f'<div class="field"><label for="p-trat">Di cosa hai bisogno?</label><select id="p-trat" name="trattamento">{opts}</select></div>'
            '<div class="form-row form-row-date"><div class="field"><label for="p-data">Giorno preferito <span class="hint">(facoltativo)</span></label><input id="p-data" name="data" type="date"><span class="error"></span></div>'
            f'<fieldset class="field"><legend>Fascia oraria</legend>{pills("fascia", ["Mattina", "Pomeriggio", "Indifferente"], "Indifferente")}<span class="hint">Il venerdì riceviamo solo la mattina.</span></fieldset></div>'
            '<div class="field"><label for="p-note">Note <span class="hint">(facoltativo)</span></label><textarea id="p-note" name="note" rows="3"></textarea></div>'
            '<div><label class="switch-line"><input type="checkbox" id="p-urgente" name="urgente" value="1"><span>È un’urgenza (dolore forte, gonfiore, trauma)</span></label>'
            f'<div class="urgent-box" role="note"><strong>Per le urgenze, chiamaci subito:</strong> <a class="link-underline" href="tel:{PHONE_HREF}" data-tel>{PHONE}</a>. Il messaggio WhatsApp parte comunque, ma a voce siamo più rapidi. Fuori orario, con un trauma importante, vai al pronto soccorso.</div></div>'
            f'<button class="btn btn-whatsapp btn-block" type="submit">{ICON["whatsapp"]}Invia la richiesta su WhatsApp</button>'
            '<p class="text-soft" style="font-size:var(--small)">Inviando la richiesta si apre WhatsApp con il messaggio già scritto: potrai rivederlo prima di inviarlo. Ti confermiamo noi data e ora.</p>'
            '<div class="form-status" role="status" aria-live="polite"></div></form></div>')
    steps = ''.join(f'<div class="step"><span class="n">{i}</span><div><h3>{esc(t)}</h3><p>{esc(p)}</p></div></div>' for i, (t, p) in enumerate([
        ('Compila il modulo', 'Dicci chi sei, cosa ti serve e quando preferisci venire.'),
        ('Invia su WhatsApp', 'Un tocco e il messaggio parte direttamente al numero dello studio.'),
        ('Confermiamo l’appuntamento', 'Ti rispondiamo con la data e l’ora disponibili più vicine alla tua richiesta.')], 1))
    side = (f'<div><h2 style="font-size:var(--h3);margin-bottom:var(--sp-5)" data-split>Come funziona</h2><div class="steps">{steps}</div>'
            f'<div class="panel" style="margin-top:var(--sp-7)"><h3 style="font-size:1.4rem;margin-bottom:var(--sp-3)">Preferisci sentirci a voce?</h3><p style="margin-bottom:var(--sp-3)"><span data-open-status>{HOURS_SHORT}</span></p>'
            f'<div class="btn-row"><a class="btn btn-primary btn-sm" href="tel:{PHONE_HREF}" data-tel>{ICON["phone"]}Chiama {PHONE}</a><a class="btn btn-secondary btn-sm" href="mailto:{EMAIL}" data-email>{ICON["mail"]}Scrivi un’email</a></div></div></div>')
    main = (page_hero(P, [('Home', 'index.html'), ('Prenota', None)], 'Prenota la tua visita in pochi minuti',
                      'Compila il modulo: prepariamo il messaggio con tutti i dettagli e lo invii su WhatsApp allo studio con un tocco. Ti confermiamo noi data e ora.') +
            section(f'<div class="booking-grid">{form}{side}</div>', prev=None, tight=True))
    ld = [breadcrumb([('Home', ''), ('Prenota', 'prenota.html')]),
          {"@context": "https://schema.org", "@type": "WebPage", "@id": SITE_URL + "/prenota.html#pagina", "url": SITE_URL + "/prenota.html", "name": 'Prenota una visita', "inLanguage": "it-IT",
           "isPartOf": {"@id": SITE_URL + "/#sito"}, "about": provider()}]
    return dict(path='prenota.html', title='Prenota una visita dal dentista a Patti | Studio Colombo',
                desc='Prenota una visita allo Studio Dentistico Colombo di Patti (ME): compila il modulo e invia la richiesta su WhatsApp, oppure chiama lo 0941 22749.',
                nav='', main=main, ld=ld)

# ===================================================================== FAQ =====
FAQ = [
    ('visite', 'Prima visita e controlli', [
        ("Ogni quanto è consigliato fare un controllo dal dentista?", "<p>In genere una visita di controllo e igiene ogni sei mesi è la cadenza consigliata per la maggior parte delle persone, anche in assenza di dolore o fastidi: permette di intercettare una carie o un principio di infiammazione gengivale quando sono ancora facili da curare.</p><p>In alcuni casi (bambini, chi soffre di parodontite, chi porta un apparecchio ortodontico) può essere utile un controllo più ravvicinato: ne parliamo insieme in visita.</p>"),
        ("Come funziona la prima visita?", f"<p>Ti accogliamo, ti chiediamo qualche informazione sulla tua salute, guardiamo denti e gengive e ti spieghiamo cosa abbiamo trovato e quali strade ci sono. Trovi tutti i passaggi nella pagina <a href=\"prima-visita.html\">La prima visita</a>.</p>"),
        ("Quanto costa una visita o una cura?", "<p>Il costo dipende da cosa serve nel tuo caso. Dopo la visita ti presentiamo un piano di cura chiaro, con i tempi e i costi, prima di iniziare qualsiasi trattamento.</p>"),
        ("Come posso prenotare?", f"<p>Puoi chiamarci allo <a href=\"tel:{PHONE_HREF}\">{PHONE}</a>, scriverci su WhatsApp o usare il <a href=\"prenota.html\">modulo di prenotazione</a>, che prepara il messaggio per te.</p>"),
    ]),
    ('gengive', 'Gengive e igiene', [
        ("È normale che le gengive sanguinino quando mi lavo i denti?", "<p>No, anche se è un fenomeno molto comune. Il sanguinamento è spesso il primo segnale di un'infiammazione gengivale, che se trascurata può evolvere in parodontite. Vale la pena farsi controllare, piuttosto che ignorarlo o limitarsi a lavarsi i denti con meno decisione.</p>"),
        ("Qual è la differenza tra ablazione del tartaro e scaling?", "<p>L'ablazione toglie placca e tartaro sopra la gengiva e appena sotto il bordo. Lo scaling e root planing arriva in fondo alle tasche con una punta a ultrasuoni sottile e pulisce le radici: serve quando c'è una parodontite. Ne parliamo nella <a href=\"schede/ablazione-e-scaling.html\">scheda dedicata</a>.</p>"),
    ]),
    ('cure', 'Cure e dolore', [
        ("Le cure dal dentista sono dolorose?", "<p>Con le tecniche di anestesia locale oggi disponibili, la maggior parte dei trattamenti — comprese devitalizzazioni ed estrazioni — si esegue senza dolore durante l'intervento; è normale invece avvertire una sensibilità nei giorni successivi ad alcune procedure.</p><p>Se hai ansia legata al dentista, diccelo pure: possiamo adattare tempi e modi della visita.</p>"),
        ("Cos'è una devitalizzazione (terapia canalare) ed è dolorosa?", "<p>È il trattamento che rimuove la polpa infiammata o infetta all'interno del dente, quando la carie o un trauma l'hanno raggiunta, per salvare il dente evitando l'estrazione. Si esegue in anestesia locale: durante la procedura non si sente dolore, e nei giorni successivi può restare una lieve sensibilità nella zona trattata.</p><p>Ne parliamo più nel dettaglio nella pagina sull'<a href=\"servizi/endodonzia.html\">endodonzia</a> e nella <a href=\"schede/cura-canalare.html\">scheda sulla cura canalare</a>.</p>"),
        ("I denti del giudizio vanno sempre estratti?", "<p>No, non sempre: se hanno spazio sufficiente per erompere correttamente, sono in una posizione funzionale e non danno problemi, possono anche essere lasciati e semplicemente monitorati nel tempo. L'estrazione si consiglia quando restano inclusi, causano infiammazioni ricorrenti o danneggiano il dente vicino: se ne occupa la <a href=\"servizi/chirurgia-orale.html\">chirurgia orale</a>.</p>"),
        ("Cos'è il bruxismo e come si cura?", "<p>Il bruxismo è l'abitudine, spesso involontaria e notturna, di digrignare o serrare i denti. Nel tempo può consumare lo smalto, affaticare i muscoli della mascella e provocare mal di testa al risveglio. Nella maggior parte dei casi si affronta con un bite su misura da indossare di notte: se ne occupa la <a href=\"servizi/gnatologia.html\">gnatologia</a>.</p>"),
        ("Si possono curare i denti in gravidanza?", "<p>Sì, ed è importante non trascurare la salute orale in questo periodo: i cambiamenti ormonali possono aumentare il rischio di infiammazione gengivale. I controlli di routine si possono fare in ogni fase della gravidanza; per i trattamenti non urgenti, il secondo trimestre è generalmente il momento più indicato.</p><p>Segnalaci sempre che sei in gravidanza prima di una visita.</p>"),
    ]),
    ('mancanti', 'Denti mancanti', [
        ("Qual è la differenza tra un impianto dentale e un ponte?", "<p>L'impianto è una vite in titanio inserita nell'osso che sostituisce la radice del dente mancante, su cui viene poi fissata una corona: non richiede di intervenire sui denti vicini. Il ponte si appoggia invece ai denti naturali accanto allo spazio vuoto, che vengono limati per fare da supporto.</p><p>La scelta dipende dallo stato dei denti vicini, dalla quantità di osso disponibile e dalle tue preferenze. Trovi i dettagli nelle schede sull'<a href=\"schede/impianto-dentale.html\">impianto</a> e sul <a href=\"schede/ponte-dentale.html\">ponte</a>.</p>"),
    ]),
    ('estetica', 'Estetica e ortodonzia', [
        ("Lo sbiancamento dentale danneggia lo smalto?", "<p>Se eseguito in studio con prodotti e concentrazioni professionali, no. Il discorso cambia con prodotti fai-da-te non controllati, che possono essere aggressivi o semplicemente inefficaci. Prima di qualsiasi sbiancamento controlliamo sempre lo stato di salute di denti e gengive. Leggi la <a href=\"schede/sbiancamento-dentale.html\">scheda sullo sbiancamento</a>.</p>"),
        ("Si può fare l'ortodonzia anche da adulti?", "<p>Sì, non c'è un limite di età per allineare i denti. Cambia la velocità di alcuni movimenti dentali rispetto a un paziente in crescita, ma apparecchi fissi, mobili o allineatori trasparenti come Invisalign sono scelte comuni anche per chi decide di intervenire per la prima volta da adulto. Vai alla pagina <a href=\"servizi/ortodonzia.html\">ortodonzia e Invisalign</a>.</p>"),
    ]),
    ('bambini', 'Bambini', [
        ("A che età va fatta la prima visita dal dentista per un bambino?", "<p>Non serve aspettare il primo mal di denti: una prima visita già in tenera età, indicativamente entro i tre anni o comunque appena spuntano i primi denti da latte, aiuta a controllare che tutto proceda bene e a far prendere confidenza al bambino con lo studio. Se ne occupa in particolare la <a href=\"servizi/pedodonzia.html\">pedodonzia</a>.</p>"),
    ]),
    ('urgenze', 'Urgenze', [
        ("Cosa fare in caso di forte mal di denti improvviso o di un trauma?", f"<p>Se siamo aperti, chiamaci o scrivici subito: cerchiamo sempre di trovare spazio per le urgenze.</p><p>Se il problema si presenta fuori dal nostro orario e riguarda un trauma importante, per esempio un dente che è caduto del tutto, conserva il dente in un contenitore con latte o saliva e rivolgiti al pronto soccorso più vicino: nei traumi dentali il tempo è un fattore importante. Se il gonfiore si estende a viso o collo, o fai fatica a respirare o a deglutire, chiama subito il 112.</p>"),
    ]),
    ('tecnologia', 'Tecnologia', [
        ("Cos'è lo scanner intraorale e sostituisce le impronte tradizionali?", "<p>È una piccola telecamera che acquisisce in pochi minuti un modello digitale tridimensionale della bocca, evitando in molti casi la classica impronta con la pasta e il relativo fastidio. Lo utilizziamo per diversi trattamenti, dall'implantologia alla protesi fino agli apparecchi ortodontici: i dettagli sono nella pagina dedicata allo <a href=\"servizi/scanner-intraorale.html\">scanner intraorale</a>.</p>"),
    ]),
]

def faq_pairs_all():
    return [(q, a) for _, _, items in FAQ for q, a in items]

def faq():
    P = ''
    cats = '<button class="fpill" type="button" data-f-cat="all" aria-pressed="true">Tutte</button>' + ''.join(f'<button class="fpill" type="button" data-f-cat="{k}" aria-pressed="false">{esc(n)}</button>' for k, n, _ in FAQ)
    groups = ''
    for k, n, items in FAQ:
        groups += f'<section class="faq-group" data-f-group aria-label="{esc(n)}"><h2>{esc(n)}</h2><div class="faq-list">' + ''.join(faq_item(q, a, fcat=k, fid=faq_id(q)) for q, a in items) + '</div></section>'
    total = len(faq_pairs_all())
    body = (f'<div data-filter><div class="filter-bar"><div class="filter-pills" role="group" aria-label="Filtra per argomento">{cats}</div>'
            f'<label class="search-field">{ICON["search"]}<span class="visually-hidden">Cerca nelle domande</span><input type="search" data-f-search placeholder="Cerca una domanda…" autocomplete="off" enterkeyhint="search"></label></div>'
            f'<p class="text-soft" data-f-count aria-live="polite" style="margin:-.6rem 0 var(--sp-5);font-size:var(--small)">{total} risultati</p>{groups}'
            f'<div class="empty-state" data-f-empty hidden><b>Nessuna domanda trovata</b>Prova con un’altra parola, oppure scrivici: ti rispondiamo volentieri.</div></div>')
    end = (f'<div class="cta-band bg-dark" data-anim="fade"><div><h2>Non hai trovato la tua risposta?</h2><p>Scrivici: ti rispondiamo appena possibile.</p></div>'
           f'<div class="btn-row">{wa_icon_btn(P, "Scrivici su WhatsApp", "Buongiorno, ho una domanda.")}<a class="btn btn-secondary" href="{P}contatti.html">Tutti i contatti</a></div></div>')
    aside_faq = (f'<aside class="svc-aside tl-aside"><div class="book-card"><h3>Non trovi la risposta?</h3><p>Scrivici o chiamaci: ti rispondiamo volentieri, anche prima di fissare una visita.</p>'
                 f'{wa_icon_btn(P, "Scrivici su WhatsApp", "Buongiorno, ho una domanda.").replace("btn btn-whatsapp", "btn btn-whatsapp btn-block")}'
                 f'<a class="btn btn-secondary btn-block" href="tel:{PHONE_HREF}" data-tel>{ICON["phone"]}Chiama {PHONE}</a>'
                 f'<a class="btn btn-primary btn-block" href="{P}prenota.html">Prenota una visita</a>'
                 f'<div class="bc-status"><span data-open-status>{HOURS_SHORT}</span></div></div></aside>')
    main = (page_hero(P, [('Home', 'index.html'), ('Domande frequenti', None)], 'Le domande che ci fanno più spesso',
                      'Risposte semplici alle domande più comuni sulla cura dei denti. Se non trovi quella che cerchi, scrivici pure.') +
            section(f'<div class="tl-layout">{body}{aside_faq}</div>', prev=None, tight=True) + section(end, prev='', bg='', tight=True))
    ld = [breadcrumb([('Home', ''), ('Domande frequenti', 'faq.html')]), faq_ld(faq_pairs_all()),
          {"@context": "https://schema.org", "@type": "WebPage", "@id": SITE_URL + "/faq.html#pagina", "url": SITE_URL + "/faq.html", "name": 'Domande frequenti', "inLanguage": "it-IT", "isPartOf": {"@id": SITE_URL + "/#sito"}}]
    return dict(path='faq.html', title='Domande frequenti dal dentista | Studio Colombo, Patti (ME)',
                desc='Risposte alle domande più comuni: controllo ogni sei mesi, gengive che sanguinano, devitalizzazione, impianto o ponte, sbiancamento, bambini e urgenze.',
                nav='', main=main, ld=ld)

# ================================================================== LEGALI =====
def legal_page(path, title, desc, h1, lead, body):
    P = ''
    main = (page_hero(P, [('Home', 'index.html'), (title, None)], h1, lead) +
            section(f'<div class="legal-content">{body}</div>', prev=None, tight=True))
    ld = [breadcrumb([('Home', ''), (title, path)])]
    return dict(path=path, title=f'{title} | Studio Dentistico Colombo', desc=desc, nav='', main=main, ld=ld)

def privacy():
    body = f'''<p class="updated">Ultimo aggiornamento: ottobre 2026</p>
<h2>1. Titolare del trattamento</h2>
<p>Il Titolare del trattamento dei dati raccolti tramite questo sito è <strong>{SITE_NAME}</strong>, con sede in {ADDRESS_LINE}, P.IVA {VAT}. Per qualsiasi richiesta relativa al trattamento dei dati personali puoi scrivere a <a href="mailto:{EMAIL}">{EMAIL}</a>.</p>
<h2>2. Che tipo di sito è questo</h2>
<p>Questo sito è composto da pagine statiche (HTML) e non dispone di un proprio server applicativo, di un database o di un'area riservata con login. Non raccogliamo né conserviamo dati su un nostro server: qualunque informazione ci venga inviata passa attraverso servizi di terze parti (email, WhatsApp) descritti di seguito.</p>
<h2>3. Quali dati raccogliamo</h2>
<p>Distinguiamo due categorie di dati:</p>
<ul><li><strong>Dati di navigazione tecnici:</strong> il fornitore del servizio di hosting (Aruba S.p.A.) può raccogliere in automatico, per il solo funzionamento tecnico del sito e per finalità di sicurezza, informazioni come l'indirizzo IP, il tipo di browser, la pagina di provenienza e la data e l'ora della visita. Questi dati non vengono da noi incrociati con altre informazioni per identificare l'utente.</li>
<li><strong>Dati forniti volontariamente:</strong> se compili il modulo nella pagina Contatti o nella pagina Prenota, ci fornisci volontariamente dati come nome, numero di telefono, indirizzo email, motivo della visita, giorno e fascia oraria preferiti, eventuali note.</li></ul>
<h2>4. Come funzionano i moduli del sito</h2>
<p>È importante sapere che questo sito non invia i dati dei moduli a un nostro server:</p>
<ul><li>Il modulo della pagina Contatti prepara un'email con i dati inseriti e apre il programma di posta elettronica del tuo dispositivo, con l'email già indirizzata a {EMAIL}: sei tu a decidere se inviarla effettivamente.</li>
<li>Il modulo della pagina Prenota prepara un messaggio con i dati inseriti e apre WhatsApp, con il messaggio già indirizzato al numero dello studio: anche in questo caso sei tu a decidere se inviarlo.</li></ul>
<p>In entrambi i casi, una volta inviato, il messaggio viene recapitato e conservato secondo le modalità dei rispettivi servizi (Gmail/Google per le email, WhatsApp/Meta per i messaggi), che restano autonomi titolari del trattamento per la parte di loro competenza. Ti invitiamo a consultare le rispettive informative: Google Privacy Policy e WhatsApp Privacy Policy.</p>
<p>Ti chiediamo di non indicare nei moduli informazioni dettagliate sul tuo stato di salute: le raccoglieremo direttamente in studio, durante la visita.</p>
<h2>5. Finalità e base giuridica del trattamento</h2>
<p>I dati forniti tramite i moduli vengono utilizzati esclusivamente per rispondere alle tue richieste di informazioni o per organizzare un appuntamento presso lo studio. La base giuridica è il tuo consenso, espresso compilando e inviando volontariamente il modulo, oltre all'esecuzione di misure precontrattuali richieste dall'interessato (art. 6, paragrafo 1, lettere a e b del Regolamento UE 2016/679 — GDPR).</p>
<h2>6. Conservazione dei dati</h2>
<p>I messaggi ricevuti via email o WhatsApp vengono conservati per il tempo necessario a gestire la tua richiesta e, per chi diventa paziente dello studio, per i tempi previsti dalla normativa in materia di documentazione sanitaria e amministrativa. Puoi chiedere la cancellazione dei messaggi scambiati in qualsiasi momento, scrivendoci.</p>
<h2>7. Servizi di terze parti presenti nel sito</h2>
<p>Il sito può collegarsi ad alcuni servizi esterni, ciascuno regolato dalla rispettiva informativa privacy:</p>
<ul><li><strong>Google Maps</strong>, per mostrare la posizione dello studio: la mappa <strong>si carica solo se la richiedi</strong> premendo il pulsante «Mostra la mappa». Finché non lo fai, nessun dato viene inviato a Google;</li>
<li><strong>Recensioni Google</strong>: il sito rimanda al profilo Google dello studio; se attivata, la visualizzazione delle recensioni avviene tramite il nostro server, senza che il tuo browser contatti Google;</li>
<li><strong>WhatsApp (Meta)</strong>, per i contatti rapidi e il modulo di prenotazione;</li>
<li><strong>Aruba S.p.A.</strong>, come fornitore del servizio di hosting, con server situati in Italia.</li></ul>
<p>I caratteri tipografici del sito sono ospitati direttamente sul nostro server: non vengono caricati da servizi esterni. Maggiori dettagli sono disponibili nella nostra <a href="cookie-policy.html">Cookie Policy</a>.</p>
<h2>8. Trasferimento dei dati fuori dall'Unione Europea</h2>
<p>Google e Meta (WhatsApp) operano infrastrutture internazionali e potrebbero trattare i dati anche al di fuori dello Spazio Economico Europeo, nel rispetto delle clausole contrattuali standard e delle garanzie previste dal GDPR per questi trasferimenti. Non abbiamo controllo diretto su questi trattamenti, che restano di competenza dei rispettivi fornitori.</p>
<h2>9. Dati dei minori</h2>
<p>Il sito non è pensato per raccogliere consapevolmente dati di minori senza il coinvolgimento di un genitore o tutore. I dati clinici relativi ai pazienti minorenni (ad esempio per la pedodonzia) vengono raccolti direttamente in studio, con il genitore o tutore presente, e non attraverso questo sito.</p>
<h2>10. I tuoi diritti</h2>
<p>In qualità di interessato, hai il diritto di chiedere in qualsiasi momento, scrivendo a {EMAIL}:</p>
<ul><li>accesso ai dati personali che ti riguardano;</li><li>rettifica dei dati inesatti o incompleti;</li><li>cancellazione dei dati, quando non sussistano motivi legittimi per continuare a trattarli;</li><li>limitazione del trattamento in determinati casi;</li><li>opposizione al trattamento, per motivi legati alla tua situazione particolare;</li><li>portabilità dei dati, quando tecnicamente applicabile.</li></ul>
<p>Hai inoltre diritto di proporre reclamo al Garante per la Protezione dei Dati Personali, qualora ritenga che il trattamento violi la normativa vigente.</p>
<h2>11. Sicurezza</h2>
<p>Il sito è servito tramite connessione protetta (HTTPS). Non conservando dati su un nostro server, il principale rischio di sicurezza riguarda gli account email e WhatsApp dello studio, che vengono protetti con le ordinarie misure di sicurezza messe a disposizione da Google e Meta.</p>
<h2>12. Modifiche a questa informativa</h2>
<p>Questa informativa può essere aggiornata nel tempo, ad esempio in caso di modifiche ai servizi utilizzati dal sito o alla normativa di riferimento. La data di ultimo aggiornamento è indicata in cima alla pagina.</p>'''
    return legal_page('privacy-policy.html', 'Privacy Policy', 'Come lo Studio Dentistico Colombo tratta i dati di chi visita il sito e usa i moduli di contatto e prenotazione.',
                      'Privacy Policy', 'Come lo Studio Dentistico Colombo raccoglie, utilizza e protegge i dati di chi visita questo sito e utilizza i moduli di contatto e prenotazione.', body)

def cookie():
    body = f'''<p class="updated">Ultimo aggiornamento: ottobre 2026</p>
<h2>1. Cosa sono i cookie</h2>
<p>I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell'utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. Servono a scopi diversi: far funzionare correttamente un sito, ricordare le preferenze di navigazione, oppure raccogliere informazioni sul comportamento degli utenti a fini statistici o pubblicitari.</p>
<h2>2. I cookie di questo sito</h2>
<p>Lo Studio Dentistico Colombo ha scelto di mantenere questo sito il più semplice ed essenziale possibile:</p>
<ul><li>Il sito <strong>non utilizza cookie</strong> propri di profilazione, statistica o marketing e non usa strumenti di analisi del traffico.</li>
<li>Non essendoci login, aree riservate o carrelli, non sono necessari nemmeno cookie tecnici di sessione.</li>
<li>I caratteri tipografici sono ospitati sul nostro server: non vengono caricati da servizi esterni.</li></ul>
<h2>3. Contenuti di terze parti</h2>
<p>Alcune pagine possono caricare contenuti di servizi esterni che possono impostare propri cookie, secondo le finalità decise dai rispettivi fornitori e non da noi:</p>
<ul><li><strong>Google Maps</strong> (pagine Home, Contatti e Dentista a Patti): la mappa <strong>non viene caricata finché non premi «Mostra la mappa»</strong>. Solo dopo la tua richiesta il tuo browser si collega ai server di Google, che può ricevere l'indirizzo IP del dispositivo e impostare propri cookie.</li></ul>
<p>Non abbiamo controllo diretto su questi cookie di terze parti. Per informazioni dettagliate e per gestire le proprie preferenze, puoi consultare l'informativa cookie di Google.</p>
<p>I link diretti a WhatsApp presenti sul sito (per scriverci un messaggio) portano l'utente fuori dal nostro sito, sull'app o sul sito di WhatsApp: eventuali cookie impostati a quel punto sono di competenza di WhatsApp/Meta e regolati dalla loro informativa.</p>
<h2>4. Come gestire o disabilitare i cookie</h2>
<p>Puoi gestire o eliminare i cookie in qualsiasi momento tramite le impostazioni del tuo browser. Le procedure variano da browser a browser; qui sotto i link alle guide ufficiali dei principali browser:</p>
<ul><li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Google Chrome</a></li><li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener">Safari</a></li><li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener">Mozilla Firefox</a></li><li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener">Microsoft Edge</a></li></ul>
<p>Se non carichi la mappa, nessun cookie di terze parti viene impostato; il resto del sito funziona normalmente in ogni caso.</p>
<h2>5. Modifiche a questa informativa</h2>
<p>Questa Cookie Policy può essere aggiornata, ad esempio se in futuro il sito integrasse nuovi servizi esterni. La data di ultimo aggiornamento è indicata in cima alla pagina. Per qualunque domanda su questa informativa puoi scriverci a <a href="mailto:{EMAIL}">{EMAIL}</a>.</p>'''
    return legal_page('cookie-policy.html', 'Cookie Policy', 'Quali cookie usa il sito dello Studio Dentistico Colombo e come gestirli.',
                      'Cookie Policy', 'Quali cookie vengono utilizzati su questo sito e come gestirli.', body)

# ==================================================================== 404 ======
def not_found():
    P = '/'
    zero = ('<span class="z"><svg viewBox="0 0 100 100"><g transform="rotate(150 50 50)"><circle cx="50" cy="50" r="42" fill="none" stroke="#DEC8A0" stroke-width="9" stroke-linecap="round" stroke-dasharray="190 80"/></g>'
            '<g transform="rotate(-35 50 50)"><circle cx="50" cy="50" r="31" fill="none" stroke="#6FB3DE" stroke-width="9" stroke-linecap="round" stroke-dasharray="140 60"/></g>'
            '<g transform="rotate(60 50 50)"><circle cx="50" cy="50" r="20" fill="none" stroke="#0A67B0" stroke-width="9" stroke-linecap="round" stroke-dasharray="90 40"/></g></svg></span>')
    inner = (f'<div class="nf"><span class="big404" aria-hidden="true"><span>4</span>{zero}<span>4</span></span>'
             f'<h1 style="font-size:var(--h2)">Questa pagina non esiste, o si è spostata.</h1><p>Controlla l’indirizzo digitato, oppure riparti da qui.</p>'
             f'<div class="btn-row"><a class="btn btn-primary" href="{P}index.html">Torna alla home</a><a class="btn btn-secondary" href="{P}servizi.html">Vedi i trattamenti</a><a class="btn btn-secondary" href="{P}contatti.html">Contatti</a></div></div>')
    main = section(inner, prev=None)
    return dict(path='404.html', P=P, title='Pagina non trovata | Studio Dentistico Colombo', desc='La pagina che cerchi non esiste o è stata spostata. Torna alla home dello Studio Dentistico Colombo di Patti.',
                nav='', main=main, ld=[], robots='noindex,follow')
