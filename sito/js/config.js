/* ==========================================================================
   STUDIO DENTISTICO COLOMBO — dati modificabili
   Se cambia un numero, un orario o un link, si modifica qui: i valori
   dinamici del sito (stato "aperto/chiuso", pulsanti, form, mappa, recensioni)
   leggono questo file. (I testi fissi delle pagine — utili ai motori di ricerca —
   sono scritti anche dentro l'HTML.)
   ========================================================================== */
window.STUDIO = {
  telefono: "0941 22749",
  telefonoHref: "+39094122749",
  whatsapp: "+39 379 152 3085",
  whatsappHref: "393791523085",               // solo cifre, con prefisso, senza +
  email: "colombostudiodentistico@gmail.com",
  indirizzo: "Via Fontanella, 98066 Patti (ME)", // aggiungere il numero civico quando confermato

  // Social: lasciare vuoto finché non ci sono i link reali (i pulsanti restano nascosti).
  facebook: "",
  instagram: "",

  // Mappe
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Studio+Dentistico+Colombo+Patti+ME",
  appleMapsUrl: "https://maps.apple.com/?q=Studio+Dentistico+Colombo&ll=38.1404,14.9708",
  mappaIncorporata: "https://www.google.com/maps?q=Studio+Dentistico+Colombo,+Via+Fontanella,+Patti+ME&output=embed",

  // Recensioni Google
  // Per ora il sito rimanda al profilo Google. Sostituire con il link diretto "scrivi una recensione"
  // (da Google Business Profile → "Chiedi recensioni") quando disponibile.
  recensioniUrl: "https://www.google.com/maps/search/?api=1&query=Studio+Dentistico+Colombo+Patti+ME",
  // Se si attiva api/recensioni.php (vedi README) impostare true: le recensioni si aggiornano da sole.
  recensioniApi: false,
  // In alternativa, recensioni copiate a mano (solo con consenso dei pazienti):
  // { nome: "Maria R.", stelle: 5, testo: "…", quando: "ottobre 2026" }
  recensioni: [],

  fusoOrario: "Europe/Rome",

  // Orari. Indice 0 = domenica … 6 = sabato. Fasce: [oraInizio, minInizio, oraFine, minFine]
  giorni: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
  orari: [
    { fasce: [] },
    { fasce: [[8,30,12,30],[16,0,20,0]] },
    { fasce: [[8,30,12,30],[16,0,20,0]] },
    { fasce: [[8,30,12,30],[16,0,20,0]] },
    { fasce: [[8,30,12,30],[16,0,20,0]] },
    { fasce: [[8,30,12,30]] },
    { fasce: [] }
  ],

  // Chiusure straordinarie (ferie, ponti…). Le festività nazionali sono già gestite dal sito.
  // Esempio: { da: "2026-08-10", a: "2026-08-21", nota: "Chiusura estiva" }
  ferie: []
};
