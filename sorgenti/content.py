# -*- coding: utf-8 -*-
"""Contenuti del sito Studio Dentistico Colombo.

Tutti i testi dei trattamenti si basano sulle informazioni già validate nelle
schede informative dello studio (impianti, protesi, endodonzia, ecc.). Tono:
informativo, mai promozionale (L. 145/2018 e codice deontologico), dato del "tu".
"""
import json, os

HERE = os.path.dirname(os.path.abspath(__file__))
ICONS = json.load(open(os.path.join(HERE, 'icons.json'), encoding='utf8'))

# ---------------------------------------------------------------- gruppi ---
GROUPS = [
    dict(id='base', name='Prevenzione e cura di base', blurb='Le visite più frequenti, alla base di ogni percorso.',
         services=['igiene-prevenzione', 'conservativa', 'endodonzia']),
    dict(id='gengive', name='Gengive e chirurgia', blurb='Quando serve intervenire più a fondo.',
         services=['parodontologia', 'chirurgia-orale']),
    dict(id='impianti', name='Impianti e protesi', blurb='Per sostituire uno o più denti mancanti.',
         services=['implantologia-dentale', 'protesi-dentarie']),
    dict(id='funzione', name='Allineamento e funzione', blurb='Occlusione, articolazione e postura dei denti.',
         services=['ortodonzia', 'gnatologia']),
    dict(id='estetica', name='Estetica e bambini', blurb='Il sorriso che si vede, a ogni età.',
         services=['estetica-dentale', 'pedodonzia']),
    dict(id='tecnologia', name='Tecnologia in studio', blurb='Gli strumenti che rendono la visita più semplice.',
         services=['scanner-intraorale']),
]

# ------------------------------------------------------------- trattamenti ---
S = {}

S['igiene-prevenzione'] = dict(
    name='Igiene dentale e prevenzione', short='Igiene e prevenzione', h1='Igiene dentale e prevenzione a Patti',
    group='base',
    seo_title='Igiene dentale e pulizia dei denti a Patti (ME) | Studio Colombo',
    seo_desc='Igiene dentale professionale e controlli di prevenzione a Patti (Messina): ablazione del tartaro, controllo di denti e gengive, consigli su misura. Studio Dentistico Colombo.',
    lead="Il punto di partenza di ogni percorso di cura. Con sedute periodiche di igiene professionale togliamo placca e tartaro nei punti che lo spazzolino non raggiunge, e controlliamo denti e gengive prima che i problemi diventino seri.",
    about=[
        "L'igiene professionale, o ablazione del tartaro, toglie placca e tartaro dai denti, sopra e appena sotto il bordo della gengiva. Non sostituisce la pulizia di ogni giorno a casa: la completa.",
        "Durante la seduta controlliamo anche denti e gengive. Una carie o un'infiammazione trovate presto si curano con interventi più piccoli.",
    ],
    bullets=['Ablazione del tartaro e lucidatura', 'Controllo periodico di denti e gengive', 'Consigli personalizzati di igiene domiciliare'],
    signs=[
        'Le gengive sanguinano quando ti lavi i denti.',
        'Vedi depositi gialli o scuri vicino alle gengive.',
        "L'alito non è fresco nonostante la pulizia quotidiana.",
        "Sono passati più di sei mesi dall'ultimo controllo.",
        'Hai macchie di caffè, tè o fumo sui denti.',
    ],
    how=[
        ('Sedute di 30–45 minuti', "Una seduta di igiene dura in genere 30–45 minuti, senza fretta."),
        ("Di solito senza anestesia", "Se una zona è sensibile, appoggiamo sulla gengiva un cotone con un anestetico in spray."),
        ('Ultrasuoni, con delicatezza', "Lavoriamo con punte a ultrasuoni (Piezon), che staccano il tartaro senza strumenti manuali."),
        ('Consigli su misura', "Alla fine ti mostriamo come usare spazzolino, scovolino e filo nella tua bocca."),
    ],
    faq=[
        ("Ogni quanto devo fare l'igiene professionale?",
         "Dipende dal rischio di ciascuno. Per gli adulti con gengive sane gli studi non mostrano una frequenza migliore delle altre: farla ogni 6 o 12 mesi cambia poco l'infiammazione. Dopo una parodontite servono controlli più ravvicinati, spesso ogni 3–4 mesi. Lo decidiamo insieme alla visita."),
        ("L'igiene dei denti fa male?",
         "Di solito dà solo un po' di fastidio, soprattutto se i denti sono sensibili o la gengiva è infiammata, e non richiede anestesia. Se una zona è sensibile, appoggiamo sulla gengiva un cotone con un anestetico in spray."),
        ("Che differenza c'è tra ablazione e scaling?",
         "L'ablazione toglie placca e tartaro sopra la gengiva e appena sotto il bordo. Lo scaling e root planing arriva in fondo alle tasche con una punta a ultrasuoni sottile e pulisce le radici: serve quando c'è una parodontite."),
    ],
    related=['parodontologia', 'conservativa', 'pedodonzia'],
    schede=['ablazione-e-scaling'],
)

S['conservativa'] = dict(
    name='Conservativa', short='Conservativa', h1='Conservativa a Patti: cura della carie e otturazioni',
    group='base',
    seo_title='Cura della carie e otturazioni a Patti (ME) | Studio Colombo',
    seo_desc="Otturazioni estetiche e cura della carie a Patti (Messina): composito dello stesso colore del dente, intarsi, onlay e corone su misura. Studio Dentistico Colombo.",
    lead="Curiamo la carie con otturazioni in composito dello stesso colore del dente: togliamo il tessuto compromesso e restituiamo forma e funzione, conservando più dente sano possibile.",
    about=[
        "La conservativa si occupa dei denti danneggiati da carie, fratture o usura, ricostruendoli con materiali dello stesso colore del dente. Più presto si interviene, meno dente sano bisogna togliere: per questo cerchiamo la carie già durante le visite di controllo.",
        "Quando un dente è troppo rovinato per una semplice otturazione, si ricostruisce con un intarsio, un onlay o una corona su misura, fatti in laboratorio. Si sceglie il restauro che conserva più dente sano possibile.",
    ],
    bullets=['Otturazioni estetiche in composito', 'Ricostruzione di denti usurati o fratturati', 'Diagnosi precoce della carie',
             'Intarsi, onlay e corone su misura in zirconia, senza metallo'],
    signs=[
        'Un dente fa male o è sensibile al dolce, al caldo o al freddo.',
        'Vedi una macchia scura o un piccolo buco su un dente.',
        'Un\'otturazione si è rotta o si è staccata.',
        'Il filo interdentale si sfilaccia sempre nello stesso punto.',
        'Un dente si è scheggiato.',
    ],
    how=[
        ('Togliamo il minimo necessario', "Rimuoviamo solo il tessuto compromesso: l'obiettivo è conservare più dente sano possibile."),
        ('Colore scelto insieme', "Il composito si abbina al colore dei denti vicini, così l'otturazione si nota poco."),
        ('Restauri su misura quando servono', "Per i denti molto rovinati usiamo intarsi, onlay e corone in zirconia, con impronta digitale."),
        ('Non tutti i buchi sono carie', "Al colletto o sui bordi dei denti si formano a volte lesioni da usura: di solito si ricostruiscono con il composito, senza limare il dente."),
    ],
    faq=[
        ("Quando serve una corona o un onlay invece di un'otturazione?",
         "Per cavità piccole e medie l'otturazione in composito è spesso la scelta migliore. Quando la cavità è grande o le pareti sono deboli, un restauro fatto in laboratorio permette di ricostruire con più precisione forma e contatti, e l'onlay o la corona proteggono le cuspidi dalle fratture."),
        ("Bisogna devitalizzare il dente per mettere una corona?",
         "No: se il dente è vivo, resta vivo. In una piccola parte dei casi il nervo si infiamma nel tempo, circa 5 denti su 100 dopo una corona, e serve una cura canalare. Se il dente è già devitalizzato, di solito si preferisce coprire le cuspidi con un onlay o una corona."),
        ("Ogni buco nel dente è una carie?",
         "No. Al colletto, vicino alla gengiva, o sui bordi dei denti si possono formare scalini o piccole conche dovute ad acidi, spazzolamento e forze del morso. Sono lesioni senza batteri: non sempre vanno curate, ma se danno sensibilità o trattengono placca si ricostruiscono con il composito."),
    ],
    related=['igiene-prevenzione', 'endodonzia', 'estetica-dentale'],
    schede=['corona-onlay-intarsio', 'colletti-bordi-consumati'],
)

S['endodonzia'] = dict(
    name='Endodonzia', short='Endodonzia', h1='Endodonzia a Patti: cura canalare e devitalizzazione',
    group='base',
    seo_title='Endodonzia e devitalizzazione a Patti (ME) | Studio Colombo',
    seo_desc="Terapia canalare (devitalizzazione) a Patti (Messina) per salvare denti compromessi da carie profonda o trauma. Cura in anestesia locale. Studio Dentistico Colombo.",
    lead="Quando la carie o un trauma raggiungono la polpa del dente, la terapia canalare (devitalizzazione) permette spesso di salvare il dente naturale invece di estrarlo, eliminando il dolore e l'infezione.",
    about=[
        "La cura canalare toglie la polpa infiammata o infetta dall'interno del dente, disinfetta i canali della radice e li sigilla. Poi il dente si ricostruisce in composito, con un perno in fibra di vetro quando ne è rimasto poco. Così si conserva il proprio dente.",
        "Si fa in anestesia locale, di solito in una o due sedute da circa 1–2 ore ciascuna.",
    ],
    bullets=['Terapia canalare su denti singoli o pluriradicolati', 'Ritrattamenti canalari', 'Gestione del dolore odontogeno urgente',
             'Ricostruzione del dente in composito, con perno in fibra di vetro quando serve'],
    signs=[
        'Un dolore pulsante, soprattutto di notte o con il caldo.',
        'Un dente fa male quando mastichi o lo tocchi.',
        'Il dolore resta a lungo dopo qualcosa di caldo o freddo.',
        'La gengiva è gonfia vicino a un dente, o compare una piccola bollicina (fistola).',
        'Un dente si è scurito dopo una botta.',
    ],
    how=[
        ('Diga di gomma', "Isoliamo il dente con la diga di gomma: lo tiene asciutto e pulito, lontano dalla saliva e dai suoi batteri."),
        ('Strumenti Reciproc Blue', "Per pulire e sagomare i canali usiamo strumenti Reciproc Blue in nichel-titanio: per ogni paziente se ne apre uno nuovo e sterile."),
        ('Canali sigillati, dente ricostruito', "I canali si sigillano con guttaperca; poi si ricostruisce il dente in composito, con un perno in fibra quando ne è rimasto poco."),
        ('Una o due sedute', "Dipende dal dente e dal tempo necessario: la guarigione è simile."),
    ],
    faq=[
        ("La devitalizzazione fa male?",
         "Con l'anestesia locale la cura non fa male: si sentono pressione e vibrazioni. Quando il dente è molto infiammato, a volte l'anestesia ha bisogno di più tempo o di una dose in più. Nei giorni dopo è normale un fastidio alla masticazione, che diminuisce in fretta."),
        ("Non basta un antibiotico?",
         "No. L'antibiotico non cura la polpa infiammata o infetta: serve curare il dente. Si usa solo in casi particolari, per esempio con febbre o un gonfiore che si estende."),
        ("Il dente devitalizzato è un «dente morto»?",
         "Si toglie la polpa, quindi il dente non sente più il caldo e il freddo. Resta però vivo il legamento che lo tiene attaccato all'osso: il dente rimane al suo posto e sente la pressione della masticazione."),
        ("E se la cura non funziona?",
         "Si può rifare la cura (ritrattamento), fare una piccola chirurgia sulla punta della radice (apicectomia) oppure estrarre il dente. Il dentista ti spiega quale soluzione è adatta al tuo caso."),
    ],
    related=['conservativa', 'chirurgia-orale', 'estetica-dentale'],
    schede=['cura-canalare', 'apicectomia', 'sbiancamento-interno'],
)

S['parodontologia'] = dict(
    name='Parodontologia', short='Parodontologia', h1='Parodontologia a Patti: cura delle gengive',
    group='gengive',
    seo_title='Parodontologia e cura delle gengive a Patti (ME) | Studio Colombo',
    seo_desc="Diagnosi e cura della parodontite (piorrea) a Patti (Messina): gengive che sanguinano, scaling, controlli nel tempo. Studio Dentistico Colombo.",
    lead="Ci prendiamo cura delle gengive e dei tessuti che sostengono il dente: curiamo la parodontite (piorrea) prima che porti alla perdita dei denti, con controlli mirati e igiene profonda quando serve.",
    about=[
        "La parodontite è un'infiammazione che colpisce le gengive e l'osso che sostiene i denti. All'inizio spesso non fa male: per questo il segnale da non ignorare è il sanguinamento delle gengive.",
        "Il primo passo è la diagnosi: misuriamo la profondità delle tasche intorno ai denti e, quando serve, controlliamo l'osso con le radiografie. Poi si pulisce in profondità con lo scaling e root planing e si programmano controlli regolari.",
    ],
    bullets=['Diagnosi e mappatura parodontale', 'Levigatura radicolare e terapia non chirurgica', 'Mantenimento parodontale nel tempo'],
    signs=[
        'Le gengive sanguinano, sono rosse o gonfie.',
        'I denti sembrano più lunghi perché la gengiva si ritira.',
        "L'alito cattivo non passa.",
        'Un dente si muove o si è spostato.',
    ],
    how=[
        ('Un quadrante alla volta', "Lo scaling si fa di solito in quattro sedute di 30–45 minuti, una per quadrante, lavorando con calma su una zona alla volta."),
        ('Ultrasuoni, di solito senza anestesia', "Usiamo una punta a ultrasuoni sottile. Se una zona è sensibile, appoggiamo sulla gengiva un cotone con un anestetico in spray."),
        ('Controlli nel tempo', "Dopo la terapia servono controlli più ravvicinati, spesso ogni 3–4 mesi: la parodontite si tiene sotto controllo, ma va seguita."),
    ],
    faq=[
        ("L'osso perso ricresce?",
         "Con lo scaling no: lo scopo è fermare la malattia e far stringere la gengiva intorno al dente. In alcuni difetti dell'osso si può valutare in seguito una chirurgia rigenerativa."),
        ("Dopo lo scaling i denti sembrano più lunghi: è normale?",
         "Sì. La gengiva infiammata era gonfia; guarendo si sgonfia e si stringe alla radice, e il dente appare più lungo. È il segno che l'infiammazione è diminuita."),
        ("La parodontite c'entra con il diabete?",
         "Sì, le due malattie si influenzano. Nelle persone con diabete, curare la parodontite migliora un po' il controllo della glicemia."),
    ],
    related=['igiene-prevenzione', 'chirurgia-orale', 'implantologia-dentale'],
    schede=['ablazione-e-scaling'],
)

S['chirurgia-orale'] = dict(
    name='Chirurgia orale', short='Chirurgia orale', h1='Chirurgia orale a Patti: estrazioni e piccoli interventi',
    group='gengive',
    seo_title='Chirurgia orale ed estrazioni a Patti (ME) | Studio Colombo',
    seo_desc="Estrazioni dentali, denti del giudizio e piccola chirurgia orale a Patti (Messina), in anestesia locale. Studio Dentistico Colombo.",
    lead="Ci occupiamo di estrazioni semplici e complesse, compresi i denti del giudizio, e di altri piccoli interventi chirurgici del cavo orale, con attenzione al dolore e al post-operatorio.",
    about=[
        "La chirurgia orale comprende le estrazioni e gli interventi sui tessuti della bocca, come l'apicectomia o la rigenerazione dell'osso. Quando è possibile preferiamo salvare il dente naturale: l'estrazione è l'ultima opzione, valutata dopo aver considerato alternative come l'endodonzia o la parodontologia.",
        "Aurora Colombo frequenta la scuola di specializzazione in Chirurgia Orale dell'Università di Messina.",
    ],
    bullets=['Estrazioni semplici e complesse', 'Estrazione dei denti del giudizio (ottavi)', 'Piccola chirurgia orale',
             'Apicectomia e rigenerazione ossea nei casi indicati'],
    signs=[
        'Un dente del giudizio fa male o spunta storto.',
        'Hai infiammazioni che tornano dietro l\'ultimo molare.',
        'Un dente è troppo compromesso per essere curato.',
        'Dopo una cura canalare, l\'infezione alla punta della radice non guarisce.',
    ],
    how=[
        ('Solo anestesia locale', "Nello studio lavoriamo in anestesia locale, senza sedazione: durante l'intervento si sentono pressione e vibrazioni, non dolore."),
        ('Prima valutiamo le alternative', "Se il dente si può salvare, ti spieghiamo come."),
        ('Il dopo, spiegato bene', "Ti diciamo cosa fare nei giorni successivi e quando chiamarci. Le istruzioni sono anche nelle schede illustrate, da rileggere a casa."),
    ],
    faq=[
        ("I denti del giudizio vanno sempre estratti?",
         "No, non sempre: se hanno spazio per spuntare correttamente, sono in una posizione funzionale e non danno problemi, possono anche essere lasciati e controllati nel tempo. L'estrazione si consiglia quando restano inclusi, causano infiammazioni ricorrenti o danneggiano il dente vicino."),
        ("L'estrazione fa male?",
         "L'intervento si fa in anestesia locale: si sentono pressione e vibrazioni, non dolore. Nei giorni successivi il fastidio è di solito moderato e si controlla con gli antidolorifici prescritti."),
        ("Posso mettere l'impianto subito dopo l'estrazione?",
         "In casi selezionati sì: è l'impianto post-estrattivo, che ha una scheda dedicata. Servono pareti d'osso integre e abbastanza osso oltre la radice per fissare l'impianto."),
    ],
    related=['implantologia-dentale', 'endodonzia', 'parodontologia'],
    schede=['impianto-post-estrattivo', 'apicectomia'],
)

S['implantologia-dentale'] = dict(
    name='Implantologia dentale', short='Implantologia', h1='Implantologia dentale a Patti',
    group='impianti',
    seo_title='Impianti dentali a Patti (ME) | Studio Dentistico Colombo',
    seo_desc="Impianti dentali a Patti (Messina) per sostituire uno o più denti mancanti. Roberto Colombo segue l'implantoprotesi nello Studio Dentistico Colombo.",
    lead="Sostituiamo uno o più denti mancanti con impianti dentali, restituendo funzione masticatoria ed estetica senza limare i denti vicini. Roberto Colombo segue in particolare questa area, con una formazione post-laurea dedicata all'implantoprotesi.",
    about=[
        "Un impianto è una piccola vite in titanio che si inserisce nell'osso al posto della radice di un dente mancante. Quando si è saldata all'osso, sostiene un dente nuovo che si usa e si pulisce come un dente vero.",
        "Il percorso dura in genere da 4 a 10 mesi per un impianto singolo, con circa 6–8 appuntamenti. Sono valori indicativi: tempi e costi del tuo caso te li spieghiamo alla visita.",
    ],
    bullets=['Impianti singoli e multipli', 'Riabilitazioni implanto-protesiche complesse', 'Piano di cura personalizzato con studio radiografico',
             "Pianificazione anche con <a href=\"scanner-intraorale.html\" class=\"link-underline\">scanner intraorale</a>",
             'Impianto post-estrattivo e rigenerazione ossea nei casi indicati'],
    signs=[
        'Hai perso un dente o devi estrarne uno.',
        'Porti una protesi mobile che si muove o che non ti piace.',
        'Un dente non si può più curare.',
        'Vorresti evitare di limare i denti vicini per un ponte.',
    ],
    how=[
        ('Visita e piano di cura', "Partiamo da visita, radiografie e, quando serve, scansione digitale: il piano è personalizzato."),
        ('Anestesia locale', "L'intervento si fa in anestesia locale, di solito in meno di un'ora per impianto. Non facciamo sedazione."),
        ('Corona in zirconia', "La corona sull'impianto è in zirconia, senza metallo. Per le impronte usiamo lo scanner intraorale."),
        ('Controlli nel tempo', "La gengiva intorno a un impianto si difende meno dai batteri: servono igiene e controlli regolari, spesso ogni 3–6 mesi."),
    ],
    faq=[
        ("L'impianto dentale fa male?",
         "L'intervento si fa in anestesia locale: si sente pressione e vibrazione, non dolore. Nei giorni successivi il fastidio è di solito moderato e si controlla con gli antidolorifici prescritti."),
        ("Resterò senza dente durante il trattamento?",
         "Nella zona che si vede quando sorridi si può quasi sempre mettere un dente provvisorio mobile fino alla corona provvisoria sull'impianto."),
        ("Quanto dura un impianto?",
         "Secondo le revisioni della letteratura scientifica, circa 95 impianti su 100 sono ancora al loro posto dopo 10 anni. Conta molto l'igiene a casa e il rispetto dei controlli: la perimplantite, un'infiammazione intorno all'impianto, è la complicanza più frequente."),
        ("Sono troppo anziano per un impianto?",
         "L'età da sola non è un limite. Contano la salute generale, la quantità di osso e la possibilità di pulire bene l'impianto. Nei ragazzi invece si aspetta che la crescita delle ossa sia finita."),
    ],
    related=['protesi-dentarie', 'chirurgia-orale', 'scanner-intraorale'],
    schede=['impianto-dentale', 'impianto-post-estrattivo', 'ponte-dentale', 'protesi-mobile'],
)

S['protesi-dentarie'] = dict(
    name='Protesi', short='Protesi', h1='Protesi dentarie a Patti: corone, ponti e protesi mobili',
    group='impianti',
    seo_title='Protesi dentarie, corone e ponti a Patti (ME) | Studio Colombo',
    seo_desc="Corone, ponti e protesi mobili o fisse su misura a Patti (Messina), con impronta digitale. Lo Studio Dentistico Colombo restituisce funzione ed estetica al sorriso.",
    lead="Realizziamo corone, ponti e protesi mobili su misura, per restituire masticazione e sorriso a chi ha perso uno o più denti, anche in combinazione con l'implantologia.",
    about=[
        "La protesi sostituisce i denti mancanti o ricopre i denti molto rovinati. Può essere fissa (corone e ponti, che non si tolgono) oppure mobile (si toglie per pulirla). La scelta dipende da quanti denti mancano, da come sono quelli rimasti e dall'osso residuo.",
        "Corone, onlay, intarsi e ponti li realizziamo in zirconia, una ceramica resistente senza metallo, con un colore simile a quello dei denti.",
    ],
    bullets=['Corone e ponti fissi', 'Protesi mobili parziali e totali', 'Protesi su impianti (full arch)',
             "Impronte digitali, con <a href=\"scanner-intraorale.html\" class=\"link-underline\">scanner intraorale</a>",
             'Protesi mobili in resina, scheletrate o in nylon flessibile'],
    signs=[
        'Hai perso uno o più denti.',
        'Una corona o un ponte si sono rotti o non tengono più.',
        'La protesi mobile si muove o ti dà fastidio.',
        'Un dente è troppo rovinato per essere otturato.',
    ],
    how=[
        ('Impronta digitale', "Niente paste in bocca: acquisiamo l'impronta con lo scanner intraorale."),
        ('Le alternative, spiegate', "Ti presentiamo le soluzioni possibili (ponte, protesi mobile, impianto) con vantaggi e limiti, senza dare per scontata una soluzione."),
        ('Provvisorio mentre guarisce', "Dopo le estrazioni, mentre l'osso si assesta, si può portare una protesi provvisoria."),
    ],
    faq=[
        ("Ponte o impianto: come scelgo?",
         "Per fare un ponte si limano i denti vicini, e quei denti avranno sempre bisogno di una corona. Se hanno già grandi otturazioni o corone, il ponte li ricopre e li protegge. Se sono intatti, l'impianto permette di non toccarli. Ne parliamo insieme, in base al tuo caso."),
        ("Posso dormire con la protesi mobile?",
         "No: di notte toglila e tienila in acqua. La gengiva riposa e si riduce il rischio di infezioni."),
        ("Quanto serve per abituarsi alla protesi mobile?",
         "Di solito qualche settimana. All'inizio è normale sentirla ingombrante e avere più saliva; parlare e masticare migliorano con l'uso."),
        ("Di che materiale sono corone e ponti?",
         "In zirconia: è resistente, ha un colore simile a quello dei denti e non contiene metallo."),
    ],
    related=['implantologia-dentale', 'conservativa', 'scanner-intraorale'],
    schede=['ponte-dentale', 'protesi-mobile', 'corona-onlay-intarsio', 'impianto-dentale'],
)

S['ortodonzia'] = dict(
    name='Ortodonzia e Invisalign', short='Ortodonzia', h1='Ortodonzia e allineatori Invisalign a Patti',
    group='funzione',
    seo_title='Ortodonzia e Invisalign a Patti (ME) | Studio Colombo',
    seo_desc="Apparecchi ortodontici fissi, mobili e allineatori trasparenti Invisalign a Patti (Messina), per bambini e adulti. Studio Dentistico Colombo.",
    lead="Correggiamo l'allineamento dei denti e l'occlusione con apparecchi fissi, mobili o allineatori trasparenti Invisalign, per i più giovani in crescita e per gli adulti che desiderano intervenire più tardi.",
    about=[
        "L'ortodonzia sposta i denti e corregge il modo in cui combaciano: serve all'estetica del sorriso e anche alla pulizia e alla masticazione. Non c'è un limite di età: si può iniziare da bambini, durante la crescita, o da adulti.",
        "Lavoriamo con apparecchi fissi, apparecchi mobili e allineatori trasparenti Invisalign. Per partire dallo stato dei tuoi denti usiamo la scansione digitale con lo scanner intraorale.",
    ],
    bullets=['Apparecchi ortodontici fissi', "Apparecchi mobili per l'età evolutiva", 'Ortodonzia intercettiva nei bambini', 'Allineatori trasparenti Invisalign',
             "Scansione digitale dell'arcata con <a href=\"scanner-intraorale.html\" class=\"link-underline\">scanner intraorale</a>"],
    signs=[
        'I denti sono storti, sovrapposti o distanziati.',
        'I denti di sopra e di sotto non combaciano bene.',
        'Nel bambino: i denti permanenti spuntano storti o molto affollati.',
        'Da adulto: i denti si sono spostati col tempo.',
    ],
    how=[
        ('Visita e scansione digitale', "Cominciamo con una visita e la scansione dell'arcata: poi ti spieghiamo le opzioni."),
        ('Più strade possibili', "Apparecchio fisso, mobile o allineatori trasparenti: la scelta dipende da come sono i tuoi denti e da cosa serve correggere."),
        ('Bambini e adulti', "Seguiamo i più piccoli in crescita e gli adulti che scelgono di intervenire per la prima volta. Per i bambini il riferimento in studio è Aurora."),
    ],
    faq=[
        ("Si può fare l'ortodonzia da adulti?",
         "Sì, non c'è un limite di età per allineare i denti. Cambia la velocità di alcuni movimenti rispetto a un paziente in crescita, ma apparecchi fissi, mobili o allineatori trasparenti come Invisalign sono scelte comuni anche per chi interviene per la prima volta da adulto."),
        ("Gli allineatori Invisalign vanno bene per tutti?",
         "Non per tutti i casi: dipende da come sono i denti e da cosa serve correggere. Dopo la visita ti diciamo se sono adatti o se conviene un apparecchio diverso."),
        ("A che età si fa la prima visita ortodontica?",
         "Non c'è un'età fissa. Dalla prima visita pediatrica controlliamo la crescita dei denti e delle ossa, e ti diciamo se e quando conviene intervenire."),
    ],
    related=['gnatologia', 'pedodonzia', 'scanner-intraorale'],
    schede=[],
)

S['gnatologia'] = dict(
    name='Gnatologia', short='Gnatologia', h1='Gnatologia a Patti: bruxismo e dolore alla mascella',
    group='funzione',
    seo_title='Gnatologia, bruxismo e bite a Patti (ME) | Studio Colombo',
    seo_desc="Diagnosi e cura dei disturbi dell'articolazione mandibolare e del bruxismo a Patti (Messina), con bite su misura. Studio Dentistico Colombo.",
    lead="Studiamo e trattiamo i disturbi dell'articolazione temporo-mandibolare, il bruxismo (il digrignamento notturno) e i dolori muscolari collegati, spesso con l'aiuto di bite su misura.",
    about=[
        "La gnatologia si occupa del modo in cui i denti combaciano e dell'articolazione della mandibola (ATM), con i muscoli che la muovono. Dolore alla mascella, schiocchi, mal di testa al risveglio e denti consumati possono essere collegati.",
        "Il bruxismo è l'abitudine, spesso involontaria e notturna, di digrignare o serrare i denti. Nel tempo può consumare lo smalto e affaticare i muscoli della mascella.",
    ],
    bullets=["Diagnosi dei disturbi dell'ATM", 'Bite notturni su misura per il bruxismo', 'Gestione del dolore mandibolare e cefalee correlate',
             "Bite su misura anche da <a href=\"scanner-intraorale.html\" class=\"link-underline\">scansione intraorale digitale</a>"],
    signs=[
        'Ti svegli con mal di testa o la mascella tesa.',
        'Senti dolore o rumori (schiocchi) quando apri la bocca.',
        'I denti hanno bordi consumati o scheggiati.',
        'Hai denti sensibili al freddo senza carie.',
    ],
    how=[
        ('Prima capiamo da dove viene', "Il dolore può dipendere dai denti, dai muscoli o dall'articolazione: lo valutiamo prima di ogni trattamento."),
        ('Bite su misura', "Nella maggior parte dei casi la prima soluzione che valutiamo è un bite notturno su misura, anche da scansione intraorale."),
        ('Un bite per proteggere', "Il bite serve soprattutto a proteggere denti e ricostruzioni dallo sfregamento notturno: non ci sono prove forti che riduca il digrignamento in sé."),
    ],
    faq=[
        ("Cos'è il bruxismo e come si cura?",
         "È l'abitudine, spesso involontaria e notturna, di digrignare o serrare i denti. Nel tempo può consumare lo smalto, affaticare i muscoli della mascella e provocare mal di testa al risveglio. Nella maggior parte dei casi si affronta con un bite su misura da portare di notte."),
        ("Il bite serve davvero?",
         "Non ci sono prove forti che un bite riduca il digrignamento. Lo consigliamo per proteggere denti e ricostruzioni dallo sfregamento notturno, che è il suo scopo principale."),
        ("Le conche sui denti sono carie?",
         "Non sempre. Al colletto e sui bordi dei denti si formano lesioni da usura, senza batteri, dovute ad acidi, spazzolamento e forze del morso. Di solito si ricostruiscono con il composito, senza limare il dente: trovi tutto nella scheda dedicata."),
    ],
    related=['ortodonzia', 'estetica-dentale', 'conservativa'],
    schede=['colletti-bordi-consumati'],
)

S['estetica-dentale'] = dict(
    name='Estetica dentale', short='Estetica dentale', h1='Estetica dentale a Patti: sbiancamento e faccette',
    group='estetica',
    seo_title='Sbiancamento dentale e faccette a Patti (ME) | Studio Colombo',
    seo_desc="Sbiancamento dentale professionale, faccette e restauri estetici a Patti (Messina). Studio Dentistico Colombo valuta sempre prima la salute di denti e gengive.",
    lead="Interveniamo sull'aspetto del sorriso con sbiancamento professionale, faccette e ricostruzioni in composito, valutando sempre prima la salute di denti e gengive.",
    about=[
        "Colore, forma e lunghezza dei denti si possono cambiare in modi diversi. Lo sbiancamento schiarisce il colore naturale dei denti con un gel a base di perossido, senza limare nulla. Le faccette sono gusci sottili di ceramica incollati sulla parte visibile dei denti anteriori. Il composito ricostruisce bordi e piccole imperfezioni.",
        "Un sorriso più luminoso deve partire da una bocca sana: prima di qualunque trattamento estetico controlliamo lo stato di denti e gengive.",
    ],
    bullets=['Sbiancamento dentale professionale, in studio o a casa', 'Sbiancamento interno dei denti devitalizzati', 'Faccette in ceramica, con o senza limatura',
             'Restauri estetici in composito', 'Valutazione estetica del sorriso'],
    signs=[
        'I denti si sono scuriti o macchiati.',
        'Un dente devitalizzato è diventato grigio o marrone.',
        'Non ti piacciono forma, lunghezza o spazi tra i denti davanti.',
        'I bordi dei denti sono scheggiati o consumati.',
    ],
    how=[
        ('Sbiancamento senza limare', "Non si toglie smalto e non serve anestesia. Si può fare in studio, in una seduta, oppure a casa con mascherine su misura."),
        ('Senza lampada', "Il gel che usiamo in studio si attiva da solo: gli studi mostrano che la luce non dà un colore migliore e non riduce la sensibilità."),
        ('Faccette provate prima', "Forma e colore delle faccette si scelgono insieme con il mock-up e la prova, perché il risultato sembri naturale."),
    ],
    faq=[
        ("Lo sbiancamento rovina lo smalto?",
         "No: non si toglie e non si lima nulla. Usato con le indicazioni del dentista, gli effetti indesiderati più comuni sono la sensibilità e l'irritazione delle gengive, e sono passeggeri."),
        ("Meglio sbiancare in studio o a casa?",
         "Alla fine il colore è simile. In studio il risultato arriva in una seduta. A casa arriva gradualmente, in circa due settimane, con mascherine su misura che restano per i ritocchi."),
        ("Come si schiarisce un dente devitalizzato scurito?",
         "Di solito dall'interno, con lo sbiancamento interno: il gel si mette dentro il dente, da una piccola apertura sul lato verso il palato, e si cambia ogni pochi giorni fino al colore giusto. Davanti il dente non si lima."),
        ("Le faccette si possono sbiancare?",
         "No, la ceramica non cambia colore con lo sbiancamento. Se vuoi denti più chiari, lo sbiancamento si fa prima e il colore delle faccette si sceglie dopo."),
    ],
    related=['conservativa', 'gnatologia', 'endodonzia'],
    schede=['sbiancamento-dentale', 'sbiancamento-interno', 'faccette-dentali'],
)

S['pedodonzia'] = dict(
    name='Pedodonzia', short='Pedodonzia', h1='Dentista per bambini a Patti: pedodonzia',
    group='estetica',
    seo_title='Dentista per bambini a Patti (ME) | Studio Colombo',
    seo_desc="Pedodonzia a Patti (Messina): cura dentale dedicata ai bambini, dalla prima visita alla prevenzione. Aurora Colombo è il punto di riferimento. Studio Dentistico Colombo.",
    lead="Seguiamo i pazienti più piccoli fin dalla prima visita, in un ambiente pensato per non spaventarli, per costruire fin da subito un rapporto sereno con la cura dei denti.",
    about=[
        "La prima visita non deve aspettare il primo mal di denti: portare i bambini dal dentista in tenera età li aiuta a costruire un rapporto sereno con le cure future. In studio il punto di riferimento per i pazienti bambini è Aurora Colombo.",
        "Controlliamo la crescita dei denti e delle ossa, insegniamo a lavarli bene e curiamo la carie quando serve.",
    ],
    bullets=['Prima visita pediatrica e prevenzione', 'Sigillature dei solchi sui denti permanenti', 'Cura della carie nei denti da latte',
             'Controllo della crescita e prima valutazione ortodontica'],
    signs=[
        'Stanno spuntando i primi denti da latte.',
        'Il bambino ha dolore o sensibilità.',
        'Vedi macchie bianche o scure sui denti.',
        'Un dente si è rotto o è caduto per una caduta.',
    ],
    how=[
        ('Spieghiamo prima di fare', "Raccontiamo al bambino cosa faremo, con parole semplici, prima di toccare qualunque cosa."),
        ('Prevenzione prima di tutto', "Sigillature dei solchi e insegnamento dell'igiene aiutano a prevenire la carie."),
        ('Solo anestesia locale', "Nello studio non facciamo sedazione: quando serve, lavoriamo in anestesia locale."),
    ],
    faq=[
        ("A che età va fatta la prima visita dal dentista?",
         "Non serve aspettare il primo mal di denti: una prima visita già in tenera età, indicativamente entro i tre anni o appena spuntano i primi denti da latte, aiuta a controllare che tutto proceda bene e a far prendere confidenza al bambino con lo studio."),
        ("Si curano anche i denti da latte?",
         "Sì: anche i denti da latte si curano, perché tengono il posto ai denti permanenti e permettono al bambino di masticare e parlare."),
        ("Cosa devo fare se al bambino si rompe o cade un dente?",
         "Chiamaci subito. Se un dente è caduto del tutto, conservalo in un contenitore con latte o saliva e portalo con te: nei traumi dentali il tempo è importante. Fuori dal nostro orario, rivolgiti al pronto soccorso più vicino."),
    ],
    related=['ortodonzia', 'igiene-prevenzione', 'conservativa'],
    schede=[],
)

S['scanner-intraorale'] = dict(
    name='Scanner intraorale', short='Scanner intraorale', h1='Scanner intraorale e impronta digitale a Patti',
    group='tecnologia',
    seo_title='Scanner intraorale e impronta digitale a Patti (ME) | Studio Colombo',
    seo_desc="Scanner intraorale per l'impronta digitale a Patti (Messina): niente impronte in pasta, scansione rapida per implantologia, protesi e ortodonzia. Studio Dentistico Colombo.",
    lead="Per diversi trattamenti, invece della tradizionale impronta in pasta, usiamo uno scanner intraorale: una piccola telecamera che acquisisce in pochi minuti un modello digitale tridimensionale della bocca.",
    about=[
        "Lo scanner intraorale registra la forma di denti e gengive con una serie di immagini, che il programma unisce in un modello digitale. Lo usiamo già dalle prime visite e per implantologia, protesi, ortodonzia e gnatologia.",
        "Non sostituisce la visita clinica: la affianca, come uno strumento in più per la diagnosi e per realizzare protesi, apparecchi e bite.",
    ],
    bullets=['Niente impronte in pasta, né il relativo riflesso del vomito', 'Scansione rapida, in genere pochi minuti per arcata',
             'Modello digitale preciso, visibile subito a te e a noi', 'Più semplice da condividere con odontotecnico e altri specialisti'],
    signs=[
        'Il solo pensiero della pasta per le impronte ti mette a disagio.',
        'Devi fare una corona, un ponte o un impianto.',
        'Vuoi un apparecchio ortodontico o un bite su misura.',
    ],
    how=[
        ('Quando lo usiamo', "Nelle prime visite, in implantologia, protesi, ortodonzia e gnatologia."),
        ('Come funziona', "Passiamo la piccola telecamera sui denti: sullo schermo vedi il modello formarsi."),
        ('Corone, ponti e restauri', "Per corone, onlay, intarsi e ponti l'impronta si fa solo in digitale."),
    ],
    faq=[
        ("Lo scanner intraorale fa male?",
         "No. È una piccola telecamera che si muove sui denti, senza pasta e senza il fastidio dell'impronta tradizionale."),
        ("Lo scanner sostituisce la visita?",
         "No: la affianca. Resta uno strumento in più per la diagnosi e per la realizzazione di protesi, apparecchi e bite."),
    ],
    related=['implantologia-dentale', 'protesi-dentarie', 'ortodonzia', 'gnatologia'],
    schede=['impianto-dentale', 'corona-onlay-intarsio'],
)

SERVICE_ORDER = [s for g in GROUPS for s in g['services']]
for slug in S:
    S[slug]['slug'] = slug
    S[slug]['icon'] = ICONS[slug]

# ------------------------------------------------------------------ schede ---
# Ogni scheda: file sorgente (titolo originale), slug pubblico, area, trattamenti collegati.
AREAS = [
    ('impianti', 'Impianti e chirurgia'),
    ('protesi', 'Protesi e restauri'),
    ('cura', 'Cura del dente'),
    ('gengive', 'Gengive e igiene'),
    ('estetica', 'Estetica'),
]

SCHEDE = [
    dict(slug='impianto-dentale', src='Scheda Impianto Dentale', title="L'impianto dentale", short='Impianto dentale', area='impianti',
         seo_title='Impianto dentale: fasi, tempi e rischi | Studio Colombo Patti',
         desc="Cos'è un impianto dentale, come si svolge l'intervento passo per passo, quanto dura, rischi e cosa fare dopo. Scheda dello Studio Colombo, Patti.",
         chips=['Anestesia locale', '4–10 mesi in tutto'], services=['implantologia-dentale', 'scanner-intraorale'], procedure='Impianto dentale'),
    dict(slug='impianto-post-estrattivo', src='Scheda Impianto Post-estrattivo', title="L'impianto post-estrattivo", short='Impianto post-estrattivo', area='impianti',
         seo_title='Impianto post-estrattivo: come funziona | Studio Colombo Patti',
         desc="Impianto inserito subito dopo l'estrazione del dente: quando si può fare, tempi, rischi e istruzioni post-operatorie. Scheda dello Studio Colombo, Patti.",
         chips=['Anestesia locale', 'Estrazione e impianto insieme'], services=['implantologia-dentale', 'chirurgia-orale'], procedure='Impianto post-estrattivo'),
    dict(slug='ponte-dentale', src='Scheda Ponte Dentale', title='Il ponte dentale', short='Ponte dentale', area='protesi',
         seo_title='Ponte dentale in zirconia: fasi e durata | Studio Colombo Patti',
         desc="Come si fa un ponte dentale in zirconia: fasi, tempi, durata, rischi, alternative e istruzioni per dopo. Scheda informativa dello Studio Dentistico Colombo, Patti.",
         chips=['Senza chirurgia', '2–4 settimane'], services=['protesi-dentarie'], procedure='Ponte dentale'),
    dict(slug='protesi-mobile', src='Scheda Protesi Mobile', title='La protesi mobile', short='Protesi mobile', area='protesi',
         seo_title='Protesi mobile: resina, scheletrata o nylon | Studio Colombo Patti',
         desc="I tre tipi di protesi mobile (resina, scheletrata, nylon flessibile), le fasi, come abituarsi e come pulirla. Scheda informativa dello Studio Dentistico Colombo, Patti.",
         chips=['Senza chirurgia', 'Circa 1 mese'], services=['protesi-dentarie'], procedure='Protesi mobile'),
    dict(slug='corona-onlay-intarsio', src='Scheda Corona, Onlay e Intarsio', title='Corona, onlay e intarsio', short='Corona, onlay e intarsio', area='protesi',
         seo_title='Corona, onlay e intarsio: differenze | Studio Colombo Patti',
         desc="Differenza tra intarsio, onlay e corona in zirconia, quando servono, come si fanno con l'impronta digitale, durata e rischi. Scheda dello Studio Dentistico Colombo, Patti.",
         chips=['Impronta digitale', 'Su misura, senza metallo'], services=['protesi-dentarie', 'conservativa', 'scanner-intraorale'], procedure='Corona dentale, onlay e intarsio'),
    dict(slug='cura-canalare', src='Scheda Cura Canalare', title='La cura canalare', short='Cura canalare', area='cura',
         seo_title='Cura canalare (devitalizzazione): fasi | Studio Colombo Patti',
         desc="Cos'è la cura canalare (devitalizzazione), come si svolge in nove fasi, quando serve il perno, rischi e cosa fare dopo. Scheda dello Studio Colombo, Patti.",
         chips=['Anestesia locale', '1–2 sedute'], services=['endodonzia'], procedure='Terapia canalare (devitalizzazione)'),
    dict(slug='apicectomia', src='Scheda Apicectomia', title="L'apicectomia", short='Apicectomia', area='impianti',
         seo_title='Apicectomia: quando serve e come si fa | Studio Colombo Patti',
         desc="Apicectomia: la piccola chirurgia sulla punta della radice quando l'infezione non guarisce dopo la cura canalare. Fasi, rischi e istruzioni. Studio Colombo, Patti.",
         chips=['Anestesia locale', '30–90 minuti'], services=['endodonzia', 'chirurgia-orale'], procedure='Apicectomia'),
    dict(slug='colletti-bordi-consumati', src='Scheda Colletti e Bordi Consumati', title='Colletti e bordi consumati', short='Colletti e bordi consumati', area='cura',
         seo_title='Colletti e bordi consumati: cause e cura | Studio Colombo Patti',
         desc="Colletti scoperti e bordi consumati: cause (acidi, spazzolamento, morso), ricostruzione in composito o chirurgia gengivale. Studio Colombo, Patti.",
         chips=['In composito', 'Senza limare il dente'], services=['conservativa', 'gnatologia'], procedure='Restauro di lesioni cervicali non cariose'),
    dict(slug='ablazione-e-scaling', src='Scheda Ablazione e Scaling', title='Ablazione e scaling', short='Ablazione e scaling', area='gengive',
         seo_title='Ablazione del tartaro e scaling: differenze | Studio Colombo Patti',
         desc="Differenza tra ablazione e scaling, come cresce la parodontite, fasi della terapia e frequenza dei controlli. Scheda dello Studio Colombo, Patti.",
         chips=['Di solito senza anestesia', '30–45 min a seduta'], services=['igiene-prevenzione', 'parodontologia'], procedure='Ablazione del tartaro e scaling radicolare'),
    dict(slug='faccette-dentali', src='Scheda Faccette Dentali', title='Le faccette dentali', short='Faccette dentali', area='estetica',
         seo_title='Faccette dentali in ceramica: fasi e durata | Studio Colombo Patti',
         desc="Le faccette dentali: gusci sottili di ceramica, con o senza limatura, fasi, durata, rischi e cura dopo. Scheda dello Studio Colombo, Patti.",
         chips=['Ceramica sottile', 'Con o senza limatura'], services=['estetica-dentale'], procedure='Faccette dentali'),
    dict(slug='sbiancamento-dentale', src='Scheda Sbiancamento Dentale', title='Lo sbiancamento dei denti', short='Sbiancamento dei denti', area='estetica',
         seo_title='Sbiancamento dei denti: in studio o a casa | Studio Colombo Patti',
         desc="Sbiancamento dentale in studio o a casa: come funziona, cosa aspettarsi, sensibilità, durata del risultato e domande frequenti. Scheda dello Studio Dentistico Colombo, Patti.",
         chips=['Senza anestesia', 'In studio o a casa'], services=['estetica-dentale'], procedure='Sbiancamento dentale'),
    dict(slug='sbiancamento-interno', src='Scheda Sbiancamento Interno', title='Lo sbiancamento interno', short='Sbiancamento interno', area='estetica',
         seo_title='Sbiancamento interno dente devitalizzato | Studio Colombo Patti',
         desc="Come si schiarisce dall'interno un dente devitalizzato scurito: quando si fa, sedute, rischi, risultato nel tempo. Scheda informativa dello Studio Dentistico Colombo, Patti.",
         chips=['Dente devitalizzato', 'Alcune sedute'], services=['estetica-dentale', 'endodonzia'], procedure='Sbiancamento interno di dente devitalizzato'),
]
SCHEDE_BY_SLUG = {s['slug']: s for s in SCHEDE}
# mappa dei vecchi indirizzi GitHub Pages -> slug interni
OLD_URLS = {'impianto': 'impianto-dentale', 'post-estrattivo': 'impianto-post-estrattivo', 'ponte': 'ponte-dentale',
            'protesi-mobile': 'protesi-mobile', 'parodontale': 'ablazione-e-scaling', 'faccette': 'faccette-dentali',
            'corona-onlay': 'corona-onlay-intarsio', 'canalare': 'cura-canalare', 'apicectomia': 'apicectomia',
            'usura': 'colletti-bordi-consumati', 'sbiancamento': 'sbiancamento-dentale', 'sbiancamento-interno': 'sbiancamento-interno'}

# schede correlate (per il fondo di ogni scheda)
SCHEDE_RELATED = {
    'impianto-dentale': ['impianto-post-estrattivo', 'ponte-dentale', 'protesi-mobile'],
    'impianto-post-estrattivo': ['impianto-dentale', 'ponte-dentale', 'protesi-mobile'],
    'ponte-dentale': ['impianto-dentale', 'protesi-mobile', 'corona-onlay-intarsio'],
    'protesi-mobile': ['impianto-dentale', 'ponte-dentale', 'corona-onlay-intarsio'],
    'corona-onlay-intarsio': ['ponte-dentale', 'cura-canalare', 'colletti-bordi-consumati'],
    'cura-canalare': ['apicectomia', 'corona-onlay-intarsio', 'sbiancamento-interno'],
    'apicectomia': ['cura-canalare', 'impianto-post-estrattivo', 'corona-onlay-intarsio'],
    'colletti-bordi-consumati': ['corona-onlay-intarsio', 'sbiancamento-dentale', 'ablazione-e-scaling'],
    'ablazione-e-scaling': ['colletti-bordi-consumati', 'sbiancamento-dentale', 'impianto-dentale'],
    'faccette-dentali': ['sbiancamento-dentale', 'corona-onlay-intarsio', 'sbiancamento-interno'],
    'sbiancamento-dentale': ['sbiancamento-interno', 'faccette-dentali', 'ablazione-e-scaling'],
    'sbiancamento-interno': ['sbiancamento-dentale', 'cura-canalare', 'faccette-dentali'],
}

# servizi -> schede (calcolato dai dati sopra, usato per l'inserimento automatico)
def schede_for_service(slug):
    return list(S[slug].get('schede', []))
