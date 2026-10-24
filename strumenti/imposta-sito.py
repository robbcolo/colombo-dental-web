#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
imposta-sito.py — aggiorna in un colpo solo i dati "segnaposto" del sito
(Studio Dentistico Colombo) in TUTTE le pagine.

Serve Python 3 (si scarica da python.org). Esempi, da terminale, nella cartella
che contiene questo file e la cartella "sito":

  python3 imposta-sito.py --dominio https://www.nomedeldominio.it
  python3 imposta-sito.py --civico 12
  python3 imposta-sito.py --facebook https://www.facebook.com/tuapagina --instagram https://www.instagram.com/tuoprofilo
  python3 imposta-sito.py --dominio https://www.nomedeldominio.it --civico 12 --cartella ./sito

Si possono combinare. Modifica solo file di testo del sito (html, xml, txt, js,
webmanifest). Fai sempre una copia di sicurezza prima.
"""
import argparse, os, re, sys

VECCHIO_DOMINIO = "https://www.studiodentisticocolombo.it"
EXT = (".html", ".xml", ".txt", ".js", ".webmanifest", ".json")

ap = argparse.ArgumentParser(description="Imposta dominio, civico e social del sito.")
ap.add_argument("--cartella", default="sito", help="cartella del sito (default: ./sito)")
ap.add_argument("--dominio", help="dominio definitivo, es. https://www.studiocolombo.it (senza / finale)")
ap.add_argument("--civico", help="numero civico di Via Fontanella, es. 12")
ap.add_argument("--facebook", help="indirizzo completo della pagina Facebook")
ap.add_argument("--instagram", help="indirizzo completo del profilo Instagram")
a = ap.parse_args()

if not os.path.isdir(a.cartella):
    sys.exit("Cartella non trovata: %s (usa --cartella)" % a.cartella)
if not any([a.dominio, a.civico, a.facebook, a.instagram]):
    sys.exit("Niente da fare: indica almeno --dominio, --civico, --facebook o --instagram.")
if a.dominio:
    a.dominio = a.dominio.strip().rstrip("/")
    if not re.match(r"^https://[a-z0-9.-]+\.[a-z]{2,}$", a.dominio, re.I):
        sys.exit("Il dominio deve essere tipo https://www.esempio.it (con https://, senza / finale).")
if a.civico:
    a.civico = a.civico.strip()
    if not re.match(r"^[0-9]{1,4}[A-Za-z]?(/[0-9A-Za-z]+)?$", a.civico):
        sys.exit("Civico non valido (esempi: 12, 12/A, 7B).")

toccati = 0
for d, _, files in os.walk(a.cartella):
    for f in files:
        if not f.lower().endswith(EXT):
            continue
        p = os.path.join(d, f)
        s = open(p, encoding="utf-8").read()
        o = s
        if a.dominio:
            s = s.replace(VECCHIO_DOMINIO, a.dominio)
            # anche eventuale dominio già impostato in precedenza non viene toccato: si ripete con --dominio
        if a.civico:
            # "Via Fontanella, 98066" -> "Via Fontanella 12, 98066" (testi e indirizzo postale)
            s = re.sub(r"Via Fontanella(?! \d)(, 98066)", r"Via Fontanella %s\1" % a.civico, s)
            # dati strutturati per Google
            s = s.replace('"streetAddress":"Via Fontanella"', '"streetAddress":"Via Fontanella %s"' % a.civico)
            s = s.replace('"streetAddress": "Via Fontanella"', '"streetAddress": "Via Fontanella %s"' % a.civico)
            s = s.replace("Via Fontanella;Patti;ME;98066", "Via Fontanella %s;Patti;ME;98066" % a.civico)
        if f == "config.js":
            if a.facebook:
                s = re.sub(r'facebook:\s*"[^"]*"', 'facebook: "%s"' % a.facebook.strip(), s)
            if a.instagram:
                s = re.sub(r'instagram:\s*"[^"]*"', 'instagram: "%s"' % a.instagram.strip(), s)
            if a.civico:
                s = s.replace('indirizzo: "Via Fontanella, 98066 Patti (ME)"', 'indirizzo: "Via Fontanella %s, 98066 Patti (ME)"' % a.civico)
        if s != o:
            open(p, "w", encoding="utf-8").write(s)
            toccati += 1
print("Fatto: %d file aggiornati." % toccati)
if a.dominio:
    print("Ricorda: in .htaccess puoi attivare il reindirizzamento verso 'www' (vedi LEGGIMI).")
