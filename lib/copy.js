// ÚNICA FUENTE DE CONTENIDO VISIBLE — todo el texto mostrado por la landing
// vive aquí. Los componentes NO deben tener strings hardcodeados (excepto iconos
// UI neutros). Cualquier cambio de copy se hace en este archivo.
export const copy = {
  metadata: {
    title: "500 Veselīgas kūkas — Vecmāmiņa Rasma",
    description:
      "500 receptes mīkstām, gaisīgām un gardām kūkām, pilnībā bez lipekļa, piena produktiem un cukura.",
    productName: "Grāmata „Vecmāmiņas Rasmas 500 kūkas”",
  },

  hero: {
    urgencyBar: "PIEDĀVĀJUMS BEIDZAS ŠODIEN · 90% ATLAIDE tikai šodien",
    badge: "Jauna recepšu grāmata · +3 200 kursantu",
    headline: {
      before: "TU NEKAD VAIRS NESKATĪSIES UZ ",
      accent: "VESELĪGĀM KŪKĀM",
      after: " TĀPAT, KAD IERAUDZĪSI ŠO.",
    },
    subheadline:
      "Atklāj 500 receptes mīkstām, gaisīgām un gardām kūkām, pilnībā bez lipekļa, piena produktiem un cukura, lai tu varētu izbaudīt katru kumosu bez sāpēm, vainas apziņas vai ierobežojumiem.",
    ctaLabel: "JĀ, ES VĒLOS GRĀMATU",
    starsAriaLabel: "Vērtējums 5 no 5 zvaigznēm",
    starsRating: "5.0",
    socialProof: "+3 200 sertificētu kursantu",
    trustChips: [
      { icon: "🌾", text: "Bez lipekļa" },
      { icon: "🥛", text: "Bez piena" },
      { icon: "🍬", text: "Bez cukura" },
    ],
    image: {
      src: "/hero-mockup.webp",
      alt: "Vecmāmiņas Rasmas grāmata 500 veselīgas kūkas",
    },
    floatingBadges: {
      speed: { icon: "⏱️", top: "Gatavs", bottom: "20 min" },
      discount: { icon: "🔥", top: "Šodien", bottom: "90% ATLAIDE" },
    },
  },

  preview: {
    kicker: "Īss ieskats",
    headline: "APSKATI GARDUMUS, KO IEMĀCĪSIES PAGATAVOT",
    items: [
      { src: "/preview/3-6.webp", alt: "Veselīga kūka 1" },
      { src: "/preview/2-7.webp", alt: "Veselīga kūka 2" },
      { src: "/preview/4-3.webp", alt: "Veselīga kūka 3" },
      { src: "/preview/3-5-1.webp", alt: "Veselīga kūka 4" },
      { src: "/preview/1-7.webp", alt: "Veselīga kūka 5" },
      { src: "/preview/4-2.webp", alt: "Veselīga kūka 6" },
      { src: "/preview/7-1-2-2.webp", alt: "Veselīga kūka 7" },
      { src: "/preview/1-5-1.webp", alt: "Veselīga kūka 8" },
      { src: "/preview/3-3.webp", alt: "Veselīga kūka 9" },
      { src: "/preview/2-4.webp", alt: "Veselīga kūka 10" },
      { src: "/preview/1-4.webp", alt: "Veselīga kūka 11" },
      { src: "/preview/1-6-1.webp", alt: "Veselīga kūka 12" },
      { src: "/preview/2-3.webp", alt: "Veselīga kūka 13" },
      { src: "/preview/chocolate.webp", alt: "Veselīga šokolādes kūka" },
      { src: "/preview/ce2f26de6ce5f6b237a4-1.webp", alt: "Veselīga kūka 15" },
      { src: "/preview/Design-sem-nome-5-1.webp", alt: "Veselīga kūka 16" },
      { src: "/preview/12-1-2.webp", alt: "Veselīga kūka 17" },
      { src: "/preview/2-6.webp", alt: "Veselīga kūka 18" },
      { src: "/preview/1-8.webp", alt: "Veselīga kūka 19" },
    ],
  },

  benefits: {
    kicker: "Kāpēc tu iemīlēsies",
    headline: "Veselīgas kūkas bez kompromisiem attiecībā uz garšu",
    items: [
      { icon: "🎂", title: "500 garšas, lai nekad neapniktu" },
      { icon: "✨", title: "Lieliska tekstūra pat bez lipekļa" },
      { icon: "🌾", title: "Tev nav nepieciešami īpaši milti" },
      { icon: "⚡", title: "Ātrās kūkas 20 minūtēs" },
      { icon: "💚", title: "Bez piena un bez cukura" },
      { icon: "📖", title: "Soli pa solim pagatavošanā" },
    ],
  },

  samples: {
    kicker: "Izmēģini tās vispirms",
    headline: "NETICAMI GARDAS KŪKAS (TĪRĀ VERSIJA):",
    badge: "Bez cukura, lipekļa un laktozes",
    items: [
      {
        name: "ŠOKOLĀDES KŪKA",
        variant: "(FITNESA UN GAISĪGA)",
        kcal: "88",
        time: "20 minūtes",
        src: "/samples/pastel-chocolate.gif",
        alt: "Fitnesa šokolādes kūka",
      },
      {
        name: "BURKĀNU KŪKA",
        variant: "(AR FITNESA ŠOKOLĀDES GLAZŪRU)",
        kcal: "120",
        time: "20 minūtes",
        src: "/samples/pastel-zanahoria.gif",
        alt: "Burkānu kūka ar šokolādi",
      },
      {
        name: "BANĀNU KŪKA",
        variant: "(FITNESA)",
        kcal: "90",
        time: "20 minūtes",
        src: "/samples/pastel-platano.gif",
        alt: "Fitnesa banānu kūka",
      },
      {
        name: "TRES LECHES KŪKA",
        variant: "(BEZ LAKTOZES)",
        kcal: "100",
        time: "20 minūtes",
        src: "/samples/pastel-tres-leches.gif",
        alt: "Tres Leches kūka bez laktozes",
      },
      {
        name: "ŠOKOLĀDES TORTE",
        variant: "(AR 5 SASTĀVDAĻĀM)",
        kcal: "108",
        time: "20 minūtes",
        src: "/samples/chocotorta.gif",
        alt: "Veselīga šokolādes torte",
      },
      {
        name: "CITRONU KŪKA",
        variant: "(PAGATAVOTA BLENDERĪ)",
        kcal: "100",
        time: "20 minūtes",
        src: "/samples/pastel-limon.gif",
        alt: "Citronu kūka",
      },
      {
        name: "SARKANĀ SAMTA KŪKA",
        variant: "(FITNESA)",
        kcal: "105",
        time: "19 minūtes",
        src: "/samples/pastel-red-velvet.gif",
        alt: "Fitnesa sarkanā samta (Red Velvet) kūka",
      },
    ],
    caloriesLabel: "Kalorijas",
    timeLabel: "Laiks",
  },

  moreRecipesCta: {
    pretitle: "Un vēl vairāk nekā",
    big: "493",
    post: "KŪKU RECEPTES...",
    ctaLabel: "LEJUPIELĀDĒT SAVU KOPIJU",
  },

  testimonials: {
    kicker: "Reāli pierādījumi",
    headline: "LŪK, KO SAKA TIE, KURI TO JAU NOPIRKA",
    subheadline: "Ko stāsta mūsu kursanti",
    studentsBadge: "+ 3200 sertificētu kursantu",
    items: [
      {
        text: "Vakar uzcepām šokolādes kūku, un pāri nepalika ne gabaliņš 😍 Ģimene jau palūdza, lai izcepu to atkal šajā nedēļas nogalē. Bez cukura un bez lipekļa... vienkārši neticami!!",
        time: "10:23",
      },
      {
        text: "Nesapratu, kā kaut kas bez piena un cukura var būt tik garšīgs. Tres Leches kūka bez laktozes mani atstāja bez vārdiem 🤯 Jau 3 dienas cepu bez apstājas.",
        time: "11:47",
      },
      {
        text: "Man jau 10 gadus ir celiakija, un es nekad neesmu varējusi ēst īstu kūku. Ar šo grāmatu beidzot varu izbaudīt to kā visi pārējie 😭❤️",
        time: "14:02",
      },
      {
        text: "Burkānu kūka ar šokolādes glazūru garšoja TIEŠI TĀPAT kā no konditorejas, bet bez miltiem un cukura. Aiznesu uz ofisu, un neviens neticēja, ka tā ir veselīga, hahaha.",
        time: "09:15",
      },
      {
        text: "Man šī grāmata ir jau mēnesi, un esmu pagatavojusi vairāk nekā 15 receptes. Fitnesa sarkanā samta kūka sanāk gaisīga un ar tik skaistu krāsu 🎂 100% iesaku visiem!!",
        time: "16:38",
      },
      {
        text: "Sākumā biju skeptiska... bet pirmā kūka mani uzreiz pārliecināja. Fitnesa banānu kūka 20 minūtēs ir īsts brīnums ⭐⭐⭐⭐⭐ Paldies, ka jūs esat.",
        time: "20:54",
      },
    ],
    mockup: {
      src: "/testimonials/mockup-grande.webp",
      alt: "Recepšu grāmata tālrunī, datorā un planšetdatorā",
    },
  },

  categories: {
    kicker: "Lai neapniktu",
    headline: "RECEPTES, SADALĪTAS KATEGORIJĀS",
    groups: [
      {
        title: "100 pildītas kūkas",
        items: [
          { src: "/preview/1-4.webp", alt: "Pildīta kūka 1" },
          { src: "/preview/7-1-2-2.webp", alt: "Pildīta kūka 2" },
          { src: "/preview/12-1-2.webp", alt: "Pildīta kūka 3" },
          { src: "/preview/2-3.webp", alt: "Pildīta kūka 4" },
          { src: "/preview/7-1-2-1.webp", alt: "Pildīta kūka 5" },
        ],
      },
      {
        title: "100 augļu kūkas",
        items: [
          { src: "/preview/1-5-1.webp", alt: "Augļu kūka 1" },
          { src: "/preview/2-4.webp", alt: "Augļu kūka 2" },
          { src: "/preview/3-3.webp", alt: "Augļu kūka 3" },
          { src: "/preview/Design-sem-nome-5-1.webp", alt: "Augļu kūka 4" },
          { src: "/preview/Design-sem-nome-6-1.webp", alt: "Augļu kūka 5" },
        ],
      },
      {
        title: "100 klasiskās kūkas",
        items: [
          { src: "/preview/1-6-1.webp", alt: "Klasiskā kūka 1" },
          { src: "/preview/2-5-1.webp", alt: "Klasiskā kūka 2" },
          { src: "/preview/4-2.webp", alt: "Klasiskā kūka 3" },
        ],
      },
      {
        title: "100 slavenas kūkas no TikTok",
        items: [
          { src: "/preview/1-7.webp", alt: "TikTok kūka 1" },
          { src: "/preview/2-6.webp", alt: "TikTok kūka 2" },
          { src: "/preview/3-5-1.webp", alt: "TikTok kūka 3" },
          { src: "/preview/4-3.webp", alt: "TikTok kūka 4" },
        ],
      },
      {
        title: "100 aukstie deserti",
        items: [
          { src: "/preview/1-8.webp", alt: "Aukstais deserts 1" },
          { src: "/preview/2-7.webp", alt: "Aukstais deserts 2" },
          { src: "/preview/3-6.webp", alt: "Aukstais deserts 3" },
          { src: "/preview/4-4.webp", alt: "Aukstais deserts 4" },
        ],
      },
    ],
    ctaLabel: "ES VĒLOS RECEPTES",
  },

  story: {
    kicker: "Stāsts aiz grāmatas",
    headline: "KĀ RADĀS ŠĪ RECEPŠU GRĀMATA?",
    paragraphs: [
      "Vecmāmiņa Rasma vienmēr piepildīja mūsu māju ar kūku smaržu, kas saliedēja ģimeni. Bet, kad mana meita Zane uzzināja, ka nevar lietot uzturā lipekli (glutēnu), viss mainījās.",
      "Kā uztura speciāliste es nolēmu kopā ar mammu pārveidot šīs receptes drošās versijās: bez cukura, bez lipekļa un bez laktozes. Pēc daudziem mēģinājumiem mēs sasniedzām rezultātus, kas pārsteidza pat pašu vecmāmiņu Rasmu.",
      "Tā radās šī grāmata: ģimenes mantojums, pilns garšas un mīlestības, kas tagad var kļūt arī par daļu no tava stāsta.",
    ],
    image: {
      src: "/story.webp",
      alt: "Vecmāmiņa Rasma un viņas mazmeita virtuvē",
    },
  },

  bonuses: {
    kicker: "Iekļautās dāvanas",
    headline: "TU SAŅEM +5 BEZMAKSAS BONUSUS",
    items: [
      {
        label: "BONUSA GRĀMATA 1",
        name: "CEPUMI UN KEKSIŅI",
        desc: "20 neatvairāmas receptes kraukšķīgiem cepumiem un gaisīgiem keksiņiem, garšīgiem un veselīgiem.",
        price: "19.90 €",
        freeLabel: "ŠODIEN BEZ MAKSAS",
        image: { src: "/bonuses/bonus-galletas.webp", alt: "Bonuss Cepumi un Keksiņi" },
      },
      {
        label: "BONUSA GRĀMATA 2",
        name: "PROTEĪNA RECEPTES KARSTĀ GAISA FRITERIM",
        desc: "20 receptes ātrām, veselīgām un proteīniem bagātām maltītēm, kas pagatavotas tikai karstā gaisa friterī.",
        price: "19.90 €",
        freeLabel: "ŠODIEN BEZ MAKSAS",
        image: { src: "/bonuses/bonus-freidora.webp", alt: "Bonuss Karstā Gaisa Friteris" },
      },
      {
        label: "BONUSA GRĀMATA 3",
        name: "VESELĪGU PONČIKU RECEPTES",
        desc: "Kraukšķīgi kumosi bez sirdsapziņas pārmetumiem, veselīgi un garšas pilni katrā kumosā.",
        price: "19.90 €",
        freeLabel: "ŠODIEN BEZ MAKSAS",
        image: { src: "/bonuses/bonus-bunuelos.webp", alt: "Bonuss Veselīgi Pončiki" },
      },
      {
        label: "BONUSA GRĀMATA 4",
        name: "GARDU SALĀTU RECEPTES",
        desc: "Svaigi, vienkārši un veselīgi salāti, lai baudītu katru dienu ar garšu un līdzsvaru.",
        price: "19.90 €",
        freeLabel: "ŠODIEN BEZ MAKSAS",
        image: { src: "/bonuses/bonus-ensaladas.webp", alt: "Bonuss Salāti" },
      },
      {
        label: "BONUSA GRĀMATA 5",
        name: "67 DETOKS SULAS",
        desc: "Atjauno savu enerģiju ar 67 dabīgām, atspirdzinošām un barojošām detoks sulu receptēm.",
        price: "19.90 €",
        freeLabel: "ŠODIEN BEZ MAKSAS",
        image: { src: "/bonuses/bonus-sucos.webp", alt: "Bonuss 67 Detoks Sulas" },
      },
    ],
    secretBonus: {
      label: "+3 SLEPENIE BONUSI",
      name: "Ekskluzīvi pārsteigumi tiem, kuri iegādāsies recepšu grāmatu jau šodien",
      price: "59.90 €",
      freeLabel: "ŠODIEN BEZ MAKSAS",
      image: { src: "/bonuses/bonus-secreto.webp", alt: "Kaste ar slepenajiem bonusiem" },
    },
    ctaLabel: "ES VĒLOS RECEPTES",
  },

  audience: {
    kicker: "Vai tas ir domāts tev?",
    headline: "CILVĒKIEM, KURI MEKLĒ:",
    items: [
      "Veselīgākas receptes",
      "Izmaiņas uztura paradumos",
      "Ir laktozes nepanesība",
      "Cieš no celiakijas",
      "Ir diabētiķi",
    ],
  },

  finalCta: {
    flagline: "Pirmie 100 klienti saņem 20 bezmaksas video nodarbības",
    headline: "500 KŪKU GRĀMATA NO ŠEFPAVĀRES RASMAS ®",
    subheadline: "Viss, kas tev nepieciešams, lai ceptu bez vainas apziņas",
    includesTitle: "+5 BEZMAKSAS GRĀMATAS:",
    includes: [
      "+ GARDU SALĀTU UN MĒRČU RECEPTES",
      "+ VESELĪGU PONČIKU RECEPTES",
      "+ CEPUMU UN KEKSIŅU RECEPTES",
      "+ PROTEĪNA RECEPTES KARSTĀ GAISA FRITERIM",
      "+ 67 DETOKS SULU RECEPTES",
    ],
    secretTitle: "+3 SLEPENIE BONUSI:",
    discountLabel: "90% ATLAIDE",
    regularPriceLabel: "NO",
    regularPrice: "59.90 €",
    regularPriceSuffix: "...",
    offerPriceLabel: "Tikai par",
    offerCurrency: "",
    offerPrice: "8.90 €",
    button: "JĀ, ES TO VĒLOS",
    urgencyNote: "**PIEDĀVĀJUMS BEIDZAS ŠODIEN**",
    paymentLabel: "APMAKSAS VEIDI",
    paymentImage: { src: "/payment-methods.webp", alt: "Apmaksas veidi" },
    secureLabel: "100% DROŠA VIETNE",
    secureImage: { src: "/secure-site.webp", alt: "100% droša vietne" },
    image: { src: "/final-mockup.webp", alt: "Recepšu grāmatas visās platformās" },
    bonusesBadge: "+8 bezmaksas bonusi",
    discountStickerLabel: "Atlaide",
    discountStickerValue: "90% ATLAIDE",
  },

  delivery: {
    kicker: "Piegāde",
    headline: "KĀ ES SAŅEMŠU RECEPTES?",
    items: [
      { icon: "🖨️", text: "Tās var izdrukāt uz papīra." },
      { icon: "📱", text: "Tu vari tās skatīties savā tālrunī." },
      { icon: "💻", text: "Tu vari tās lasīt savā datorā." },
      { icon: "🚫", text: "Kā arī planšetdatorā." },
      { icon: "♾️", text: "Mūža piekļuve: Kopā ar jaunajām receptēm." },
      { icon: "📩", text: "Pazaudēji recepti? Mēs tev to nosūtīsim vēlreiz." },
      { icon: "📚", text: "Saņem jaunas grāmatas katru mēnesi." },
    ],
  },

  guarantee: {
    kicker: "Bez riska",
    headline: "IZMĒĢINI BEZ RISKA — 60 dienu beznosacījumu garantija.",
    body: "Tev ir 60 dienas, lai tās izmēģinātu. Ja receptes tevi nepārliecinās, es atgriezīšu tavu naudu līdz pēdējam centam. Bez sarežģījumiem. Bez stresa.",
    alt: "Zīmogs 60 dienu beznosacījumu garantijai",
    image: { src: "/guarantee-badge.webp", alt: "60 dienu garantija" },
  },

  faq: {
    kicker: "Jautājumi un atbildes",
    headline: "BUJ — tas, ko visi jautā",
    items: [
      {
        q: "Vai sastāvdaļas ir dārgas?",
        a: "Nē! Mēs izmantojam vienkāršas sastāvdaļas, kas tev jau ir mājās: nekādu sarežģītu vai dārgu produktu.",
      },
      {
        q: "Vai kūka patiešām ir garšīga bez kviešiem, piena, laktozes un cukura?",
        a: "Jā, un pats labākais: to ir ārkārtīgi viegli pagatavot! Receptes ir izveidotas tā, lai saglabātu garšu, ko tu dievini, ar vieglām un viegli atrodamām sastāvdaļām.",
      },
      {
        q: "Vai receptes ir vieglas iesācējiem (kuri nekad nav cepuši kūku)?",
        a: "Ideāli piemērotas iesācējiem! Viss ir izskaidrots soli pa solim, ar parastām sastāvdaļām un vienkāršām instrukcijām. Ja proti ieslēgt cepeškrāsni, tad spēsi tās pagatavot.",
      },
      {
        q: "Ar ko kūkas tiek saldinātas?",
        a: "Tu vari izvēlēties to, kam dod priekšroku: ar augļiem (banānu vai datelēm), ar medu vai saldinātājiem, piemēram, stēviju un eritritolu. Katrā receptē ir norādīts precīzs daudzums katrai opcijai.",
      },
      {
        q: "Vai es varu aizstāt cukuru ar augļiem (banānu, datelēm)? Kā tas darbojas?",
        a: "Jā, vari! Un tas ir vienkāršāk, nekā šķiet: recepte tev pasaka, kādus augļus izmantot, cik daudz pievienot un kā izveidot perfektu, sulīgu un saldu desertu.",
      },
      {
        q: "Kādus miltus jūs izmantojat?",
        a: "Mēs izmantojam miltu maisījumu, piemēram, rīsu, auzu vai mandeļu, ko vari atrast jebkurā lielveikalā, bieži vien pat lētāk nekā kviešu miltus.",
      },
      {
        q: "Cik minūtēs kūka ir gatava?",
        a: "Lielākā daļa aizņem 20 vai 30 minūtes. Kamēr pagatavosi sev kafiju, kūka jau smaržos virtuvē.",
      },
    ],
  },

  footer: {
    brand: "Vecmāmiņa Rasma",
    links: [
      { label: "Privātuma politika", href: "https://grandmateresa.com/politica-de-privacidad/" },
      { label: "Lietošanas noteikumi", href: "https://grandmateresa.com/condiciones-de-uso/" },
      { label: "Atgriešanas politika", href: "https://grandmateresa.com/politica-de-devoluciones/" },
    ],
    copyright: "© 2026 / Vecmāmiņa Rasma – Visas tiesības aizsargātas.",
  },

  stickyCta: {
    priceLabel: "Šodien",
    offerPrice: "8.90 €",
    strikePrice: "59.90 €",
    ctaLabel: "ES TO VĒLOS",
  },
};