# Studio Dentistico Colombo — sito web

Sito statico (HTML, CSS e JavaScript puri): niente database, niente WordPress, niente aggiornamenti da fare. Si pubblica caricando i file via FTP su Aruba e si apre subito.

## Cosa c'è in questa cartella

| Cartella / file | A cosa serve |
|---|---|
| `sito/` | **Il sito.** Il suo contenuto va caricato nella cartella pubblica di Aruba. |
| `strumenti/imposta-sito.py` | Piccolo programma opzionale per inserire in tutte le pagine dominio, civico e social in un colpo solo. |
| `sorgenti/` | Opzionale. I programmi con cui il sito viene generato (serve solo a chi vuole rigenerare le pagine). |
| `LEGGIMI.md` | Questa guida. |

## 1. Prima di pubblicare: cosa va completato

Nel sito ci sono quattro dati "segnaposto" che solo voi potete confermare. Il sito funziona anche senza, ma conviene sistemarli prima di caricarlo.

1. **Dominio.** Nelle pagine c'è `https://www.studiodentisticocolombo.it` come indirizzo provvisorio (canonical, sitemap, anteprime social, dati per Google). Va sostituito con il dominio vero.
2. **Numero civico di Via Fontanella.** Al momento compare solo "Via Fontanella, 98066 Patti (ME)".
3. **Link Facebook e Instagram.** Finché non li inserite, i pulsanti social restano nascosti (non compaiono link morti).
4. **Foto di Daniela e Tonina** (se le volete in "Chi siamo"). Ci sono già Alfredo, Roberto e Aurora.

Da verificare anche:

- **Testi medici.** Le 12 schede e le pagine dei trattamenti sono scritte in modo informativo e prudente, ma **devono essere riviste e approvate da voi dentisti**: sono la vostra responsabilità professionale. Verificate in particolare tempi, durate, rischi e indicazioni post-operatorie.
- **«Dall'autostrada A20 si esce a Patti»**: è scritto nelle pagine Contatti e Dentista a Patti. Controllate che sia corretto.
- **Recensioni.** Il sito non contiene recensioni inventate: mostra un invito a lasciare una recensione su Google. Vedi il punto 5.

### Inserire dominio, civico e social con un comando

Serve Python 3 (gratuito, python.org). Dalla cartella che contiene `sito/` e `strumenti/`:

```
python3 strumenti/imposta-sito.py --dominio https://www.iltuodominio.it
python3 strumenti/imposta-sito.py --civico 12
python3 strumenti/imposta-sito.py --facebook https://www.facebook.com/tuapagina --instagram https://www.instagram.com/tuoprofilo
```

Si possono unire in un solo comando. Fatelo **prima** di caricare i file. (Senza Python: in `sito/js/config.js` si cambiano social e indirizzo, ma dominio e civico compaiono anche dentro le pagine, quindi serve una ricerca-e-sostituisci su tutti i file con un editor di testo come Notepad++ o VS Code.)

## 2. Caricare il sito su Aruba

1. Dal pannello Aruba create (o recuperate) le credenziali FTP del dominio.
2. Con un programma FTP (FileZilla) collegatevi e aprite la cartella pubblica del sito (di solito la radice del dominio, o `public_html`/`www`, a seconda del piano).
3. Caricate **il contenuto** della cartella `sito/` (non la cartella stessa), compresi i file nascosti: **`.htaccess`** è indispensabile (HTTPS automatico, compressione, cache e pagina 404).
4. Attivate il certificato SSL/HTTPS dal pannello Aruba e aprite `https://tuodominio.it`.
5. Provate: telefono, WhatsApp, menu, ricerca (tasto `/` sul computer), prenotazione, una scheda a schermo intero, la pagina 404.

Se in futuro modificate CSS o JavaScript, il browser dei visitatori può tenere per una settimana la versione vecchia: cambiate il numero dopo `?v=` nei collegamenti ai file in `<head>` oppure rigenerate il sito dai sorgenti, che lo fa da solo.

## 3. Comparire su Google

Il sito è già pronto per l'indicizzazione: titoli e descrizioni diversi per ogni pagina, indirizzi canonici, sitemap, `robots.txt`, dati strutturati (studio dentistico, orari, FAQ, trattamenti, schede) e pagine dedicate per ogni trattamento. Google però impiega comunque da pochi giorni a qualche settimana a mostrarlo. Per accelerare:

1. **Google Search Console** (search.google.com/search-console): aggiungete il dominio, verificatelo (Aruba permette la verifica via DNS) e inviate `https://tuodominio.it/sitemap.xml`. Poi, da "Controllo URL", richiedete l'indicizzazione di Home, Dentista a Patti, Contatti e dei trattamenti principali.
2. **Google Business Profile** (business.google.com): è la cosa che pesa di più per "dentista Patti" e "dentista vicino a me" (la scheda con mappa). Inserite nome esatto **Studio Dentistico Colombo**, indirizzo con civico, telefono 0941 22749, orari (gli stessi del sito), categoria principale *Dentista*, sito web e qualche foto vera dello studio. Nome, indirizzo e telefono devono essere identici ovunque (sito, Google, Facebook, elenchi).
3. **Recensioni.** Sono il fattore locale più forte. Chiedete a pazienti soddisfatti di recensirvi su Google: dal profilo potete copiare il link diretto "Chiedi recensioni" e incollarlo in `recensioniUrl` dentro `sito/js/config.js`.
4. Aggiungete il sito ai vostri profili social e ovunque lo studio sia già citato (Pagine Gialle, Doctolib o simili): sono collegamenti utili per Google.

Nulla garantisce un posto fisso in prima pagina: dipende da concorrenza, recensioni e tempo. Questa base tecnica fa sì che il sito non parta svantaggiato.

## 4. Cosa si può modificare senza programmare

Tutto in `sito/js/config.js` (si apre con un editor di testo):

- **telefono, WhatsApp, email, indirizzo**
- **orari di apertura** (lo stato "Aperto ora / Chiuso" sul sito si aggiorna da solo, con ora italiana e festività nazionali)
- **ferie**, per esempio:
  `ferie: [{ da: "2026-08-10", a: "2026-08-21", nota: "Chiusura estiva" }]`
- **social** e **link recensioni**

Attenzione: telefono, orari e indirizzo compaiono anche scritti dentro le pagine (servono a Google, che non esegue sempre il JavaScript). Se cambiano davvero in modo definitivo, vanno cambiati anche lì: in quel caso chiedete la rigenerazione del sito, oppure usate ricerca-e-sostituisci.

## 5. Recensioni Google nel sito (facoltativo)

Tre strade, dalla più semplice:

1. **Niente da fare:** il sito mostra un invito a lasciare una recensione, con il link che avete impostato.
2. **A mano:** copiate alcune recensioni (con il consenso dei pazienti) in `recensioni: [...]` di `config.js`; il formato di esempio è nel file.
3. **Automatiche:** copiate `sito/api/config.sample.php` in `config.php`, inserite la chiave API Google (Places API) e il Place ID della scheda, poi in `config.js` mettete `recensioniApi: true`. Le recensioni si aggiornano da sole (cache di 6 ore). Serve PHP, incluso nei piani Aruba. Limitate la chiave API al vostro dominio dalla console Google Cloud.

## 6. Privacy, cookie e statistiche

Il sito **non usa cookie di tracciamento né strumenti di analisi**, non carica font o script da servizi esterni e la mappa Google parte solo se il visitatore tocca "Mostra la mappa". Per questo non c'è un banner cookie invadente. I moduli (contatti e prenotazione) non salvano nulla sul sito: preparano un'email o un messaggio WhatsApp sul telefono del paziente. Le pagine Privacy e Cookie sono scritte di conseguenza: **fatele leggere a chi segue la vostra privacy** e, se aggiungete strumenti nuovi (analytics, pixel, chat), aggiornatele.

## 7. Le schede per i pazienti

Nella pagina **Schede** e dentro ogni pagina di **trattamento** ci sono le 12 schede informative. Si aprono in una finestra a tutto schermo, comoda per mostrarle al paziente alla poltrona e passare alla scheda successiva o precedente; si possono aprire anche come pagina intera, condividere con link o codice QR, e stampare. Le pagine sono indicizzabili da Google.

## 8. Struttura delle pagine

```
index.html                Home
dentista-patti.html       Pagina per la ricerca "dentista a Patti"
servizi.html              Tutti i trattamenti
servizi/*.html            Un trattamento per pagina (11)
schede.html               Indice delle schede
schede/*.html             Le 12 schede
prima-visita.html         Come funziona la prima visita
chi-siamo.html            Il team
faq.html                  Domande frequenti
prenota.html              Prenotazione (apre WhatsApp con il messaggio pronto)
contatti.html             Indirizzo, orari, mappa
privacy-policy.html, cookie-policy.html, 404.html
sitemap.xml, robots.txt, .htaccess, site.webmanifest
css/  js/  fonts/  assets/  api/
```

## 9. Compatibilità

Pensato per telefono, tablet e computer. Rispetta le impostazioni di accessibilità del dispositivo (animazioni ridotte, navigazione da tastiera, lettori di schermo). Se JavaScript è disattivato il sito resta leggibile e utilizzabile.
