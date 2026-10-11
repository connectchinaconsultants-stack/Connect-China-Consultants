/* Centralized, independently editable site content.
   Replace images in public/assets/images/ using the same filenames. */
window.CCC = window.CCC || {};

CCC.site = {
  name: "Connect China Consultants",
  shortName: "Connect China",
  email: "connect.chinaconsultants@gmail.com",
  whatsappDisplay: "+86 155 0796 0969",
  whatsappUrl: "https://wa.me/8615507960969",
  // social: {
  //   facebook: { label: "Connect China Consultants", url: "https://www.facebook.com/profile.php?id=61595384543361" },
  //   instagram: { label: "Connect China", url: "https://www.instagram.com/connect.chinaconsultants/" },
  //   tiktok: { label: "TikTok", url: "https://www.tiktok.com/@connect.chinaconsultants" },
  //   wechat: { label: "WeChat", details: "connect.chinaconsultants" }  // 微信 ID
  // },
  privacyPath: "privacy.html"
};

CCC.confirmPlaceholder = "Contact us to confirm";

CCC.universities = [
  {
    id: "jinggangshan",
    name: "Jinggangshan University (JGSU)",
    location: "Ji'an, Jiangxi Province",
    image: "public/assets/images/university-jinggangshan.jpg",
    logo: "public/assets/images/logo-jinggangshan.png",
    overview:
      "A comprehensive public university established in 1958, located in Ji'an, Jiangxi Province. JGSU comprises 21 schools, including faculties of Clinical Medicine and Nursing. Its English-medium MBBS program follows the standard 5+1-year structure, consisting of 5 years of coursework and 1 year of internship. The medical school offers clinical medicine programs with modern laboratories and affiliated hospital training. International students benefit from English instruction and a supportive campus environment in a historic region of China.",
    type: "Public University",
    degrees: ["MBBS", "Nursing"],
    language: "English",
    duration: "MBBS 5+1 years",
    tuition:
      "Year 1: RMB 10,000. Years 2–6: RMB 19,000.",
    accommodation:
      "RMB 4,000 listed with tuition.",
    scholarship: "Available",
    intakes: "March and September",
    recognition: "WHO-listed, ECFMG-accredited, PMDC-accredited",
    tags: ["MBBS", "Nursing", "English Medium", "State University"],
    nameNeedsConfirmation: false,
    // posters: [
    //   {
    //     src: "public/assets/images/jinggangshan-poster-01.jpg",
    //     alt: "Jinggangshan University promotional poster placeholder"
    //   },
    //   {
    //     src: "public/assets/images/jinggangshan-poster-02.jpg",
    //     alt: "Jinggangshan University study in Jiangxi poster placeholder"
    //   }
    // ]
  },
  {
    id: "hubei-polytechnic",
    name: "Hubei Polytechnic University School of Medicine",
    location: CCC.confirmPlaceholder,
    image: "public/assets/images/university-hubei-polytechnic.jpg",
    logo: "public/assets/images/logo-hubei-polytechnic.png",
    overview:
      "Partner institution listed for medical and nursing pathways. Location, fees, language of instruction, and intakes should be confirmed with Connect China Consultants before an application is prepared.",
    type: "Public University",
    degrees: ["MBBS", "Nursing"],
    language: CCC.confirmPlaceholder,
    duration: CCC.confirmPlaceholder,
    tuition: CCC.confirmPlaceholder,
    accommodation: CCC.confirmPlaceholder,
    scholarship: CCC.confirmPlaceholder,
    intakes: CCC.confirmPlaceholder,
    recognition: CCC.confirmPlaceholder,
    tags: ["MBBS", "Nursing"],
    nameNeedsConfirmation: false
  },
  {
    id: "nanchang-medical",
    name: "Nanchang Medical University",
    location: CCC.confirmPlaceholder,
    image: "public/assets/images/university-nanchang-medical.jpg",
    logo: "public/assets/images/logo-nanchang-medical.png",
    overview:
      "Listed partner for MBBS. Official English name, campus location, tuition, and program details require owner confirmation before publication as verified facts.",
    type: "",
    degrees: ["MBBS"],
    language: CCC.confirmPlaceholder,
    duration: CCC.confirmPlaceholder,
    tuition: CCC.confirmPlaceholder,
    accommodation: CCC.confirmPlaceholder,
    scholarship: CCC.confirmPlaceholder,
    intakes: CCC.confirmPlaceholder,
    recognition: CCC.confirmPlaceholder,
    tags: ["MBBS"],
    nameNeedsConfirmation: false
  },
  {
    id: "jiujiang-medical",
    name: "Jiujiang Medical University",
    location: CCC.confirmPlaceholder,
    image: "public/assets/images/university-jiujiang-medical.jpg",
    logo: "public/assets/images/logo-jiujiang-medical.png",
    overview:
      "Listed partner for MBBS. Confirm official institutional name, city, fees, and current international-student offerings.",
    type: "",
    degrees: ["MBBS"],
    language: CCC.confirmPlaceholder,
    duration: CCC.confirmPlaceholder,
    tuition: CCC.confirmPlaceholder,
    accommodation: CCC.confirmPlaceholder,
    scholarship: CCC.confirmPlaceholder,
    intakes: CCC.confirmPlaceholder,
    recognition: CCC.confirmPlaceholder,
    tags: ["MBBS"],
    nameNeedsConfirmation: false
  },
  {
    id: "hunan-medical",
    name: "Hunan Medical University",
    location: CCC.confirmPlaceholder,
    image: "public/assets/images/university-hunan-medical.jpg",
    logo: "public/assets/images/logo-hunan-medical.png",
    overview:
      "Listed partner for MBBS. Confirm official name (several Hunan medical institutions exist), location, and program details.",
    type: "",
    degrees: ["MBBS"],
    language: CCC.confirmPlaceholder,
    duration: CCC.confirmPlaceholder,
    tuition: CCC.confirmPlaceholder,
    accommodation: CCC.confirmPlaceholder,
    scholarship: CCC.confirmPlaceholder,
    intakes: CCC.confirmPlaceholder,
    recognition: CCC.confirmPlaceholder,
    tags: ["MBBS"],
    nameNeedsConfirmation: false
  },
  {
    id: "shandong-first-medical",
    name: "Shandong First Medical College",
    location: CCC.confirmPlaceholder,
    image: "public/assets/images/university-shandong-first-medical.jpg",
    logo: "public/assets/images/logo-shandong-first-medical.png",
    overview:
      "Listed partner for MBBS. Confirm whether this refers to Shandong First Medical University / related college, plus campus, fees, and language of instruction.",
    type: "",
    degrees: ["MBBS"],
    language: CCC.confirmPlaceholder,
    duration: CCC.confirmPlaceholder,
    tuition: CCC.confirmPlaceholder,
    accommodation: CCC.confirmPlaceholder,
    scholarship: CCC.confirmPlaceholder,
    intakes: CCC.confirmPlaceholder,
    recognition: CCC.confirmPlaceholder,
    tags: ["MBBS"],
    nameNeedsConfirmation: false
  },
  {
    id: "kunming-medical",
    name: "Kunming Medical University",
    location: CCC.confirmPlaceholder,
    image: "public/assets/images/university-kunming-medical.jpg",
    logo: "public/assets/images/logo-kunming-medical.png",
    overview:
      "Partner university listed by name. Program availability, tuition, language, and intakes have not been supplied in the current brief.",
    type: "",
    degrees: [],
    language: CCC.confirmPlaceholder,
    duration: CCC.confirmPlaceholder,
    tuition: CCC.confirmPlaceholder,
    accommodation: CCC.confirmPlaceholder,
    scholarship: CCC.confirmPlaceholder,
    intakes: CCC.confirmPlaceholder,
    recognition: CCC.confirmPlaceholder,
    tags: [],
    nameNeedsConfirmation: false
  },
  // {
  //   id: "yangtze",
  //   name: "Yangtze University",
  //   location: CCC.confirmPlaceholder,
  //   image: "public/assets/images/university-yangtze.jpg",
  //   logo: "public/assets/images/logo-yangtze.png",
  //   overview:
  //     "Partner university listed by name. Confirm which campuses and programs are offered through Connect China Consultants.",
  //   type: "",
  //   degrees: [],
  //   language: CCC.confirmPlaceholder,
  //   duration: CCC.confirmPlaceholder,
  //   tuition: CCC.confirmPlaceholder,
  //   accommodation: CCC.confirmPlaceholder,
  //   scholarship: CCC.confirmPlaceholder,
  //   intakes: CCC.confirmPlaceholder,
  //   recognition: CCC.confirmPlaceholder,
  //   tags: [],
  //   nameNeedsConfirmation: false
  // },
  {
    id: "gannan-medical",
    name: "Gannan Medical University",
    location: CCC.confirmPlaceholder,
    image: "public/assets/images/university-gannan-medical.jpg",
    logo: "public/assets/images/logo-gannan-medical.png",
    overview:
      "Partner university listed by name. Program list, fees, and recognition claims require confirmation.",
    type: "",
    degrees: [],
    language: CCC.confirmPlaceholder,
    duration: CCC.confirmPlaceholder,
    tuition: CCC.confirmPlaceholder,
    accommodation: CCC.confirmPlaceholder,
    scholarship: CCC.confirmPlaceholder,
    intakes: CCC.confirmPlaceholder,
    recognition: CCC.confirmPlaceholder,
    tags: [],
    nameNeedsConfirmation: false
  },
  {
    id: "chifeng-medical",
    name: "Chifeng Medical University",
    location: CCC.confirmPlaceholder,
    image: "public/assets/images/university-chifeng-medical.jpg",
    logo: "public/assets/images/logo-chifeng-medical.png",
    overview:
      "Partner university listed by name. Confirm official English name, programs, and current international admission details.",
    type: "",
    degrees: [],
    language: CCC.confirmPlaceholder,
    duration: CCC.confirmPlaceholder,
    tuition: CCC.confirmPlaceholder,
    accommodation: CCC.confirmPlaceholder,
    scholarship: CCC.confirmPlaceholder,
    intakes: CCC.confirmPlaceholder,
    recognition: CCC.confirmPlaceholder,
    tags: [],
    nameNeedsConfirmation: false
  },
  {
    id: "yichuan-medical",
    name: "Yichuan Medical University",
    location: CCC.confirmPlaceholder,
    image: "public/assets/images/university-yichuan-medical.jpg",
    logo: "public/assets/images/logo-yichuan-medical.png",
    overview:
      "This name was supplied in the original notes and may be a spelling or identification issue. Confirm the official university before using this listing in published materials.",
    type: "",
    degrees: [],
    language: CCC.confirmPlaceholder,
    duration: CCC.confirmPlaceholder,
    tuition: CCC.confirmPlaceholder,
    accommodation: CCC.confirmPlaceholder,
    scholarship: CCC.confirmPlaceholder,
    intakes: CCC.confirmPlaceholder,
    recognition: CCC.confirmPlaceholder,
    tags: [],
    nameNeedsConfirmation: true
  },
  {
    id: "yangtze-medical",
    name: "Yangtze Medical University",
    location: CCC.confirmPlaceholder,
    image: "public/assets/images/university-yangtze-medical.jpg",
    logo: "public/assets/images/logo-yangtze-medical.png",
    overview:
      "This name was supplied separately from Yangtze University and may refer to a different institution or a naming variant. Confirm the official university before publication.",
    type: "",
    degrees: [],
    language: CCC.confirmPlaceholder,
    duration: CCC.confirmPlaceholder,
    tuition: CCC.confirmPlaceholder,
    accommodation: CCC.confirmPlaceholder,
    scholarship: CCC.confirmPlaceholder,
    intakes: CCC.confirmPlaceholder,
    recognition: CCC.confirmPlaceholder,
    tags: [],
    nameNeedsConfirmation: true
  },
  {
    id: "binzhou-medical",
    name: "Binzhou Medical University",
    location: CCC.confirmPlaceholder,
    image: "public/assets/images/university-binzhou-medical.jpg",
    logo: "public/assets/images/logo-binzhou-medical.png",
    overview:
      "Partner university listed by name. Confirm campuses, programs, language of instruction, and fees.",
    type: "",
    degrees: [],
    language: CCC.confirmPlaceholder,
    duration: CCC.confirmPlaceholder,
    tuition: CCC.confirmPlaceholder,
    accommodation: CCC.confirmPlaceholder,
    scholarship: CCC.confirmPlaceholder,
    intakes: CCC.confirmPlaceholder,
    recognition: CCC.confirmPlaceholder,
    tags: [],
    nameNeedsConfirmation: false
  },
  {
    id: "jiangxi-medical",
    name: "Jiangxi Medical University",
    location: CCC.confirmPlaceholder,
    image: "public/assets/images/university-jiangxi-medical.jpg",
    logo: "public/assets/images/logo-jiangxi-medical.png",
    overview:
      "This supplied name may be ambiguous (Jiangxi has several medical institutions). Confirm the official university intended for this card.",
    type: "",
    degrees: [],
    language: CCC.confirmPlaceholder,
    duration: CCC.confirmPlaceholder,
    tuition: CCC.confirmPlaceholder,
    accommodation: CCC.confirmPlaceholder,
    scholarship: CCC.confirmPlaceholder,
    intakes: CCC.confirmPlaceholder,
    recognition: CCC.confirmPlaceholder,
    tags: [],
    nameNeedsConfirmation: true
  },
  {
    id: "harbin-medical",
    name: "Harbin Medical University",
    location: CCC.confirmPlaceholder,
    image: "public/assets/images/university-harbin-medical.jpg",
    logo: "public/assets/images/logo-harbin-medical.png",
    overview:
      "Listed provisionally for the institution spelled “Herbin Medical University” in the original notes. Confirm that Harbin Medical University is the intended partner.",
    type: "",
    degrees: [],
    language: CCC.confirmPlaceholder,
    duration: CCC.confirmPlaceholder,
    tuition: CCC.confirmPlaceholder,
    accommodation: CCC.confirmPlaceholder,
    scholarship: CCC.confirmPlaceholder,
    intakes: CCC.confirmPlaceholder,
    recognition: CCC.confirmPlaceholder,
    tags: [],
    nameNeedsConfirmation: true
  },
  {
    id: "jilin",
    name: "Jilin University",
    location: CCC.confirmPlaceholder,
    image: "public/assets/images/university-jilin.jpg",
    logo: "public/assets/images/logo-jilin.png",
    overview:
      "Partner university listed by name. Confirm which faculties and international programs are offered through this consultancy.",
    type: "",
    degrees: [],
    language: CCC.confirmPlaceholder,
    duration: CCC.confirmPlaceholder,
    tuition: CCC.confirmPlaceholder,
    accommodation: CCC.confirmPlaceholder,
    scholarship: CCC.confirmPlaceholder,
    intakes: CCC.confirmPlaceholder,
    recognition: CCC.confirmPlaceholder,
    tags: [],
    nameNeedsConfirmation: false
  }
];

CCC.programs = [
  { id: "mbbs", label: "MBBS / Clinical Medicine" },
  { id: "nursing", label: "B.Sc. Nursing" },
  { id: "chinese", label: "Chinese Language" }
];

CCC.intakes = ["March", "September", "Not sure yet"];
