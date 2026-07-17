/* ============================================================
   MATCH DATA — Copa RTIC 2026
   Edita este archivo para el próximo torneo. No toques
   app.js ni el HTML salvo que quieras una sección nueva.
   ============================================================ */

const MATCH_DATA = {

  meta: {
    eventName: "Copa RTIC 2026",
    levelTag: "IPSC Panamá",
    discipline: "Handgun",
    dateLine: "25 y 26 de julio, 2026",
    place: "Balboa Gun Club — Panamá",
    organizers: "Club de Tiro Práctico Panamá  ·  IPSC Panamá",
    sanction: "Match Sanction Package E71310214",
    region: "Panamá",
    city: "Ciudad de Panamá",
    club: "Club de Tiro Práctico Panamá",
    logos: {
      main: "assets/img/logo-rtic.png",
      secondary: "assets/img/logo-ipsc.png"
    }
  },

  location: {
    name: "Balboa Gun Club",
    phone: "+507 2288170",
    mapImage: "assets/img/location-map.jpg",
    qrImage: "assets/img/location-qr.png"
  },

  breakdown: {
    image: "assets/img/breakdown.jpg",
    countries: [
      { name: "Panamá", count: 128 },
      { name: "Colombia", count: 11 },
      { name: "Guatemala", count: 5 },
      { name: "El Salvador", count: 4 },
      { name: "México", count: 2 }
    ]
  },

  statistics: {
    divisions: [
      { name: "Open", count: 14 },
      { name: "Optics", count: 24 },
      { name: "PC Optics", count: 6 },
      { name: "Production", count: 37 },
      { name: "Production Optics", count: 40 },
      { name: "Standard", count: 19 }
    ],
    categories: [
      { name: "Grand Junior", count: 1 },
      { name: "Grand Senior", count: 3 },
      { name: "Junior", count: 3 },
      { name: "Lady", count: 8 },
      { name: "Overall", count: 84 },
      { name: "S. Senior", count: 14 },
      { name: "Senior", count: 27 }
    ],
    classes: [
      { name: "A", count: 14 },
      { name: "B", count: 19 },
      { name: "C", count: 28 },
      { name: "D", count: 13 },
      { name: "G", count: 1 },
      { name: "M", count: 1 },
      { name: "U", count: 64 }
    ]
  },

  /* ---------------------------------------------------------
     SCHEDULE — un bloque por día. Cada "item" es una fila de
     horario (hora, título, detalle).
     --------------------------------------------------------- */
  schedule: [
    {
      date: "23.07.26",
      label: "Gun Check & entrega de kits",
      items: [
        { time: "06:30", title: "Gun Check & entrega de kits", detail: "Austin Mama's Barnhouse (Clayton)" }
      ]
    },
    {
      date: "24.07.26",
      label: "Pre Match",
      items: [
        { time: "08:00", title: "Pre Match", detail: "Range officers and match directors" },
        { time: "16:00", title: "Pre Match ends", detail: "Range officers and match directors" }
      ]
    },
    {
      date: "25.07.26",
      label: "Main Match — Día 1",
      items: [
        { time: "07:00", title: "Main Match Starts", detail: "Squads 1 · 2 · 3 · 4 · 5 · 6" },
        { time: "11:30", title: "Main Match Ends", detail: "Squads 1 · 2 · 3 · 4 · 5 · 6" },
        { time: "11:40", title: "Break", detail: "" },
        { time: "12:00", title: "Main Match Starts", detail: "Squads 7 · 8 · 9 · 10 · 11 · 12" },
        { time: "16:00", title: "Main Match Ends", detail: "Squads 7 · 8 · 9 · 10 · 11 · 12" }
      ]
    },
    {
      date: "26.07.26",
      label: "Main Match — Día 2",
      items: [
        { time: "07:00", title: "Main Match Starts", detail: "Squads 7 · 8 · 9 · 10 · 11 · 12" },
        { time: "11:30", title: "Main Match Ends", detail: "Squads 7 · 8 · 9 · 10 · 11 · 12" },
        { time: "11:40", title: "Break", detail: "" },
        { time: "12:00", title: "Main Match Starts", detail: "Squads 1 · 2 · 3 · 4 · 5 · 6" },
        { time: "16:00", title: "Main Match Ends", detail: "Squads 1 · 2 · 3 · 4 · 5 · 6" },
        { time: "19:30", title: "Closure Ceremony", detail: "Austin Mama's Barnhouse (Clayton)" }
      ]
    }
  ],

  pccStandard: [
    "Carbine loaded.",
    "Safety engaged.",
    "Buttstock touching the belt at the selected side.",
    "Muzzle pointing downrange."
  ],

  /* ---------------------------------------------------------
     STAGES — duplica un bloque para agregar/editar un stage.
     --------------------------------------------------------- */
  stages: [
    {
      number: 1, bay: "Bahía 1",
      scoringTargets: "5 IPSC Target, 2 IPSC Poppers",
      minRounds: 12,
      firearmReady: "Loaded and holstered",
      competitorReady: "Standing as demonstrated",
      startPosition: "Heels touching the marks as demonstrated",
      timeStart: "Audible signal",
      procedure: "On the start signal, engage all targets.",
      note: "",
      pcc: null,
      image: "assets/img/stage-01.jpg"
    },
    {
      number: 2, bay: "Bahía 2",
      scoringTargets: "16 IPSC Targets",
      minRounds: 32,
      firearmReady: "Loaded and holstered",
      competitorReady: "Standing as demonstrated",
      startPosition: "Anywhere within the designated area",
      timeStart: "Audible signal",
      procedure: "On the start signal, engage all targets.",
      note: "",
      pcc: null,
      image: "assets/img/stage-02.jpg"
    },
    {
      number: 3, bay: "Bahía 3",
      scoringTargets: "11 IPSC Targets, 2 IPSC Metal Plates",
      minRounds: 24,
      firearmReady: "Loaded and holstered",
      competitorReady: "Standing as demonstrated",
      startPosition: "Anywhere within designated area",
      timeStart: "Audible signal",
      procedure: "On the start signal, engage all targets.",
      note: "",
      pcc: null,
      image: "assets/img/stage-03.jpg"
    },
    {
      number: 4, bay: "Bahía 5",
      scoringTargets: "6 IPSC Targets",
      minRounds: 12,
      firearmReady: "Loaded and holstered",
      competitorReady: "Standing as demonstrated",
      startPosition: "Heels touching the marks",
      timeStart: "Audible signal",
      procedure: "On the start signal, engage all targets.",
      note: "",
      pcc: null,
      image: "assets/img/stage-04.jpg"
    },
    {
      number: 5, bay: "TP",
      scoringTargets: "7 IPSC Targets, 2 IPSC Poppers, 2 IPSC Metal Plates",
      minRounds: 18,
      firearmReady: "Loaded and holstered",
      competitorReady: "Standing as demonstrated",
      startPosition: "Heels touching the marks",
      timeStart: "Audible signal",
      procedure: "On the start signal, engage all targets.",
      note: "P1 activates T1 and P2 activates T2, which remain visible at rest.",
      pcc: null,
      image: "assets/img/stage-05.jpg"
    },
    {
      number: 6, bay: "NRA",
      scoringTargets: "11 IPSC Targets, 2 IPSC Metal Plates",
      minRounds: 24,
      firearmReady: "Loaded and holstered",
      competitorReady: "Standing as demonstrated",
      startPosition: "Anywhere within the designated area",
      timeStart: "Audible signal",
      procedure: "On the start signal, engage all targets.",
      note: "",
      pcc: null,
      image: "assets/img/stage-06.jpg"
    },
    {
      number: 7, bay: "Bahía 1",
      scoringTargets: "5 IPSC Targets, 1 IPSC Popper, 1 IPSC Metal Plate",
      minRounds: 12,
      firearmReady: "Loaded and holstered",
      competitorReady: "Standing as demonstrated",
      startPosition: "Heels touching the marks",
      timeStart: "Audible signal",
      procedure: "On the start signal, engage all targets.",
      note: "P1 activates T1, which remains visible at rest.",
      pcc: null,
      image: "assets/img/stage-07.jpg"
    },
    {
      number: 8, bay: "Bahía 4",
      scoringTargets: "9 IPSC Targets, 1 IPSC Popper",
      minRounds: 19,
      firearmReady: "Loaded and holstered",
      competitorReady: "Standing as demonstrated",
      startPosition: "Heels touching the marks",
      timeStart: "Audible signal",
      procedure: "On the start signal, engage all targets.",
      note: "P1 activates T1, which remains visible at rest.",
      pcc: null,
      image: "assets/img/stage-08.jpg"
    },
    {
      number: 9, bay: "Mangle",
      scoringTargets: "16 IPSC Targets",
      minRounds: 32,
      firearmReady: "Loaded and holstered",
      competitorReady: "Standing as demonstrated",
      startPosition: "Anywhere within the designated area",
      timeStart: "Audible signal",
      procedure: "On the start signal, engage all targets.",
      note: "",
      pcc: null,
      image: "assets/img/stage-09.jpg"
    },
    {
      number: 10, bay: "TP",
      scoringTargets: "4 IPSC Targets, 4 IPSC Poppers",
      minRounds: 12,
      firearmReady: "Loaded and holstered",
      competitorReady: "Standing as demonstrated",
      startPosition: "Heels touching the marks",
      timeStart: "Audible signal",
      procedure: "On the start signal, engage all targets.",
      note: "",
      pcc: null,
      image: "assets/img/stage-10.jpg"
    },
    {
      number: 11, bay: "NRA",
      scoringTargets: "4 IPSC Targets, 4 IPSC Metal Plates",
      minRounds: 12,
      firearmReady: "Loaded and holstered",
      competitorReady: "Standing as demonstrated",
      startPosition: "Heels touching the marks",
      timeStart: "Audible signal",
      procedure: "On the start signal, engage all targets.",
      note: "",
      pcc: null,
      image: "assets/img/stage-11.jpg"
    },
    {
      number: 12, bay: "Hunter",
      scoringTargets: "4 IPSC Targets, 3 IPSC Poppers",
      minRounds: 11,
      firearmReady: "Magazine inserted and chamber empty, pistol laying on the table.",
      competitorReady: "Standing as demonstrated",
      startPosition: "Anywhere within the designated area",
      timeStart: "Audible signal",
      procedure: "On the start signal, engage all targets.",
      note: "",
      pcc: [
        "Carbine with magazine inserted and chamber empty, laying on the table as demonstrated.",
        "Muzzle pointing safely downrange.",
        "Hands naturally at sides."
      ],
      image: "assets/img/stage-12.jpg"
    }
  ],

  sponsors: {
    image: "assets/img/sponsors.jpg"
  }
};
