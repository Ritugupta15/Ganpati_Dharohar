/**
 * Shared archive data for Ganpati Dharohar.
 * All mandal text and photographs come strictly from the verified project
 * field visit reports (September 2026) and community survey aggregation.
 */
import f1 from "@/assets/images/field/f-001-000.jpg";
import f2 from "@/assets/images/field/f-002-001.jpg";
import f2Closeup from "@/assets/images/field/f-002-closeup.jpg";
import f3 from "@/assets/images/field/f-003-003.jpg";
import f4 from "@/assets/images/field/f-004-004.jpg";
import f5 from "@/assets/images/field/f-005-005.jpg";
import f6 from "@/assets/images/field/f-005-006.jpg";
import f7 from "@/assets/images/field/f-006-007.jpg";
import f8 from "@/assets/images/field/f-007-008.jpg";
import f9 from "@/assets/images/field/f-008-009.jpg";
import f10 from "@/assets/images/field/f-008-010.jpg";
import f11 from "@/assets/images/field/f-008-011.jpg";
import f12 from "@/assets/images/field/f-009-012.jpg";
import f13 from "@/assets/images/field/f-010-013.jpg";
import f14 from "@/assets/images/field/f-011-014.jpg";
import f15 from "@/assets/images/field/f-011-015.jpg";
import f16 from "@/assets/images/field/f-012-016.jpg";
import f17 from "@/assets/images/field/f-014-017.jpg";
import f18 from "@/assets/images/field/f-014-018.jpg";

export type HeritageCategory = "Govandi" | "Chembur" | "Sewri";

/** Only categories that have real field photographs are listed. */
export const GALLERY_CATEGORIES = [
  "Ganpati Idols",
  "Pandal & Decoration",
  "Field Visits",
  "Cultural Activities",
] as const;
export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export type Photo = {
  src: string;
  caption: string;
  alt: string;
  category: GalleryCategory;
  date: string;
};

/** Documentation headings available for mandal pages (shown only when verified data exists). */
export const DOC_SECTIONS = [
  { key: "about", title: "About the Mandal" },
  { key: "idol", title: "Ganpati Idol" },
  { key: "decoration", title: "Decoration / Pandal" },
  { key: "heritage", title: "Heritage / Cultural Significance" },
  { key: "traditions", title: "Traditions and Practices" },
  { key: "community", title: "Community Activities" },
  { key: "preservation", title: "Preservation / Eco-friendly Practices" },
] as const;
export type DocKey = (typeof DOC_SECTIONS)[number]["key"];

export type Mandal = {
  id: string;
  name: string;
  location: string;
  category: HeritageCategory;
  theme: string;
  highlight: string;
  summary: string;
  idolPhoto: Photo;
  visits: { label: string; value: string }[];
  doc: Partial<Record<DocKey, string>>;
  observations: string[];
  tags: string[];
  photos: Photo[];
};

export const mandals: Mandal[] = [
  {
    id: "bus-stopcha-raja",
    name: "Bus Stopcha Raja Bal Sevak Mandal",
    location: "Plot No. 33, Baiganwadi, Govandi, Mumbai – 400043",
    category: "Govandi",
    theme: "Groundnut (Mungfali / Peanuts) Idol",
    highlight: "Idol decorated with 11,151 groundnuts",
    summary:
      "A local mandal celebrating since 2005 that creates its Ganpati idol in a different form or material every year — documented with a unique Ganpati idol decorated using 11,151 groundnuts (mungfali / peanuts).",
    idolPhoto: {
      src: f2Closeup,
      caption: "Ganpati Idol decorated using 11,151 groundnuts (mungfali / peanuts)",
      alt: "Field photograph of the Ganpati idol at Bus Stopcha Raja Bal Sevak Mandal decorated entirely with 11,151 groundnuts",
      category: "Ganpati Idols",
      date: "17 Sep 2026",
    },
    visits: [
      { label: "First visit", value: "17 September 2026, approx. 8:19–8:21 PM" },
      { label: "Revisit", value: "24 September 2026, approx. 2:27 PM" },
    ],
    doc: {
      about:
        "The mandal is known as Bus Stopcha Raja Bal Sevak Mandal, located at Plot No. 33, Baiganwadi, Govandi, Mumbai – 400043, and has been celebrating the Ganpati festival since 2005. Every year the mandal creates the Ganpati idol in a different form or material, maintaining memories of its Ganpati celebrations over the years.",
      idol: "The main attraction of this pandal was the unique Ganpati idol decorated entirely using groundnuts (mungfali / peanuts). A large number of groundnuts were arranged carefully over the idol — a verified documented count of 11,151 groundnuts — giving it a distinctive appearance. Along with the idol, traditional items such as flowers, lamps, fruits, coconuts and other pooja materials were placed in front of it.",
      heritage:
        "Displayed inside the pandal was an information board showing photographs of the mandal's Ganpati idols from previous years, along with the mandal's name, plot address and establishment year (1994). This display reflects how the mandal has documented its own history informally over time, reinforcing the value of a structured digital archive of local Ganpati heritage.",
      traditions:
        "Traditional worship items such as flowers, lamps, fruits, coconuts and other pooja materials were placed in front of the Ganpati idol, combining traditional worship with creative idol craftsmanship.",
    },
    observations: [
      "Every year the mandal creates the Ganpati idol in a different form or material.",
      "The main Ganpati idol was decorated entirely using 11,151 groundnuts (mungfali / peanuts) arranged carefully over the idol.",
      "An information board inside the pandal displayed photographs of past idols from previous years along with the establishment year (1994).",
      "Revisit photograph (24 September 2026) is recorded separately from the first visit (17 September 2026) so dates remain accurate.",
    ],
    tags: ["groundnut idol", "11,151 groundnuts", "mungfali", "peanuts", "local history", "pooja"],
    photos: [
      {
        src: f2Closeup,
        caption: "Ganpati Idol — decorated using 11,151 groundnuts (mungfali / peanuts)",
        alt: "Close-up field photograph of the Ganpati idol made with 11,151 groundnuts at Bus Stopcha Raja Bal Sevak Mandal",
        category: "Ganpati Idols",
        date: "17 Sep 2026",
      },
      {
        src: f2,
        caption: "Ganpati Idol and traditional pooja offerings (11,151 groundnuts)",
        alt: "Full field photograph of the groundnut Ganpati idol and pooja items at Bus Stopcha Raja Bal Sevak Mandal, Govandi",
        category: "Ganpati Idols",
        date: "17 Sep 2026",
      },
      {
        src: f3,
        caption: "Information board showing past Ganpati idols and establishment year (1994)",
        alt: "Information board inside Bus Stopcha Raja Bal Sevak Mandal showing photographs of previous years' Ganpati idols",
        category: "Pandal & Decoration",
        date: "17 Sep 2026",
      },
      {
        src: f1,
        caption: "Field Visit documentation (revisit on 24 September 2026)",
        alt: "Field visit documentation photograph at Bus Stopcha Raja Bal Sevak Mandal during revisit on 24 September 2026",
        category: "Field Visits",
        date: "24 Sep 2026",
      },
    ],
  },
  {
    id: "shivaji-nagarcha-ganraya",
    name: "Shivaji Nagarcha Ganraya Sarvajanik Ganeshotsav Mandal",
    location: "Shivaji Nagar, Govandi West, Mumbai – 400043",
    category: "Govandi",
    theme: "Suvarna Mahotsav (50th Anniversary)",
    highlight: "Celebrating 50 years (Suvarna Mahotsav)",
    summary:
      "A community pandal in Shivaji Nagar celebrating its 50th anniversary (Suvarna Mahotsav), documented with red-and-white traditional drapery, chandeliers and an evening Aarti attended by local devotees.",
    idolPhoto: {
      src: f4,
      caption: "Ganpati Idol at Shivaji Nagarcha Ganraya Sarvajanik Ganeshotsav Mandal",
      alt: "Field photograph of the large Ganpati idol at Shivaji Nagarcha Ganraya Mandal in Govandi West",
      category: "Ganpati Idols",
      date: "23 Sep 2026",
    },
    visits: [
      { label: "First visit", value: "17 September 2026, evening (Aarti observed at 8:34 PM)" },
      { label: "Revisit", value: "23 September 2026, approx. 7:45–7:50 PM" },
    ],
    doc: {
      about:
        "The pandal is named “Shivaji Nagarcha Ganraya Sarvajanik Ganeshotsav Mandal,” located in Shivaji Nagar, Govandi West, Mumbai – 400043. During the field visit, the mandal was celebrating its 50th anniversary / Suvarna Mahotsav.",
      idol: "The main attraction inside the pandal was the large Ganpati idol placed at the centre of the decorated mandap.",
      decoration:
        "The pandal was decorated with red and white cloth, decorative designs, lights and chandeliers. The entrance and surrounding area were also decorated with colourful lighting, giving the pandal a traditional and festive appearance.",
      heritage:
        "Along with the decoration and idol, rituals such as Aarti are an important part of Ganpati heritage because they connect the celebration with religious practices, local memories and community participation.",
      traditions:
        "During the first visit on 17 September 2026, a traditional Aarti was observed taking place, with devotees standing together in front of the Ganpati idol while the traditional prayer was performed.",
      community:
        "Many devotees gathered inside the pandal and participated in the evening Aarti, showing the strong community participation and importance of the festival to the local residents.",
    },
    observations: [
      "Traditional decorative elements such as red-and-white drapery and chandeliers were combined with modern lighting.",
      "The large number of devotees participating in the evening Aarti showed the importance of the festival to the local community.",
      "Revisit photographs (23 September 2026) are kept distinct from the first visit photograph (17 September 2026) so documentation dates remain accurate.",
    ],
    tags: ["aarti", "50th anniversary", "suvarna mahotsav", "community", "shivaji nagar"],
    photos: [
      {
        src: f4,
        caption: "Ganpati Idol — Shivaji Nagarcha Ganraya Mandal",
        alt: "Field photograph of the Ganpati idol at Shivaji Nagarcha Ganraya Mandal",
        category: "Ganpati Idols",
        date: "23 Sep 2026",
      },
      {
        src: f7,
        caption: "Evening Aarti and community participation",
        alt: "Devotees gathered inside the pandal during the evening Aarti at Shivaji Nagarcha Ganraya Mandal",
        category: "Cultural Activities",
        date: "17 Sep 2026",
      },
      {
        src: f6,
        caption: "Pandal entrance and festive lighting",
        alt: "Exterior entrance and decorative lighting of Shivaji Nagarcha Ganraya Sarvajanik Ganeshotsav Mandal",
        category: "Pandal & Decoration",
        date: "23 Sep 2026",
      },
      {
        src: f5,
        caption: "Field Visit — 50th anniversary (Suvarna Mahotsav) display",
        alt: "Field visit photograph showing the 50th anniversary Suvarna Mahotsav emblem at Shivaji Nagarcha Ganraya Mandal",
        category: "Field Visits",
        date: "23 Sep 2026",
      },
    ],
  },
  {
    id: "sahyadri-krida-mandal",
    name: "Sahyadri Krida Mandal Ganpati Pandal",
    location: "Tilak Nagar, Chembur West, Mumbai – 400089",
    category: "Chembur",
    theme: "Grand Building Structure with Superhero Figures",
    highlight: "50 Years celebration display",
    summary:
      "Organized by Sahyadri Krida Mandal in Tilak Nagar, featuring a grand building-style pandal structure, marigold entrance garlands, creative exterior figures and a traditional green-and-floral Ganpati idol backdrop.",
    idolPhoto: {
      src: f12,
      caption: "Ganpati Idol with green backdrop, hanging bells and white floral arch",
      alt: "Field photograph of the Ganpati idol at Sahyadri Krida Mandal, Tilak Nagar, Chembur",
      category: "Ganpati Idols",
      date: "18 Sep 2026",
    },
    visits: [{ label: "Visit", value: "18 September 2026, approx. 2:44–2:49 PM" }],
    doc: {
      about:
        "The pandal was organized by Sahyadri Krida Mandal in the Tilak Nagar, Chembur West area. A 50 Years celebration display was present at the pandal, showing the long association of the mandal with the local community.",
      idol: "The main Ganpati idol was decorated with traditional jewellery, flowers and traditional ornaments. The backdrop featured a green theme with many hanging bells and white floral decorations, with fruits and offerings arranged around the idol.",
      decoration:
        "The entrance was decorated with colourful marigold flower garlands and decorative lights. The main pandal had a large structure designed like a grand building, featuring superhero figures such as Batman, Spider-Man, Dr Strange, Chhota Bheem and Hulk, along with an airplane model.",
      heritage:
        "The mandal combines religious traditions, artistic decoration and community participation — preserving cultural traditions while also adopting creative and modern forms of decoration that attract visitors of different age groups.",
      traditions:
        "Fruits and different traditional offerings were arranged around the Ganpati idol, and visitors gathered at the pandal to take darshan and offer prayers.",
      community:
        "During the field visit, many people came to the pandal to take darshan, offer prayers and take photographs of the entrance, main pandal, Ganpati idol and decorations.",
    },
    observations: [
      "The combination of traditional religious idol decoration with modern creative exterior elements made the pandal attractive to visitors of different age groups.",
      "Photographs of the entrance, main pandal, Ganpati idol, decorations and surrounding area were captured during the field visit.",
    ],
    tags: ["tilak nagar", "chembur", "grand building", "marigold", "50 years"],
    photos: [
      {
        src: f12,
        caption: "Ganpati Idol with hanging bells and floral backdrop",
        alt: "Main Ganpati idol at Sahyadri Krida Mandal decorated with traditional ornaments, hanging bells and white flowers",
        category: "Ganpati Idols",
        date: "18 Sep 2026",
      },
      {
        src: f9,
        caption: "Mandal entrance decorated with marigold flower garlands",
        alt: "Entrance gate of Sahyadri Krida Mandal in Tilak Nagar decorated with marigold garlands",
        category: "Pandal & Decoration",
        date: "18 Sep 2026",
      },
      {
        src: f10,
        caption: "Main pandal structure with superhero figures and 50 Years display",
        alt: "Front facade of Sahyadri Krida Mandal pandal designed as a grand building with superhero figures",
        category: "Pandal & Decoration",
        date: "18 Sep 2026",
      },
      {
        src: f11,
        caption: "Full exterior view of the grand building pandal with airplane model",
        alt: "Wide view of the Sahyadri Krida Mandal pandal structure in Tilak Nagar, Chembur",
        category: "Pandal & Decoration",
        date: "18 Sep 2026",
      },
      {
        src: f8,
        caption: "Field Visit — darshan at the Ganpati idol",
        alt: "Field visit photograph showing darshan at Sahyadri Krida Mandal Ganpati Pandal",
        category: "Field Visits",
        date: "18 Sep 2026",
      },
    ],
  },
  {
    id: "shivdi-cha-raja",
    name: "Shivdi Cha Raja Ganpati Mandal",
    location: "Sewri, Mumbai – 400015",
    category: "Sewri",
    theme: "Underwater Dwarka (75th Ganeshotsav, 2026)",
    highlight: "75th Ganeshotsav · Underwater Dwarka",
    summary:
      "An Underwater Dwarka theme created for the mandal's 75th Ganeshotsav in 2026, presenting the legendary city associated with Lord Krishna beneath the sea alongside a grand traditional Ganpati idol.",
    idolPhoto: {
      src: f13,
      caption: "Ganpati Idol at Shivdi Cha Raja Ganpati Mandal, Sewri",
      alt: "Large Ganpati idol decorated with traditional garments and jewellery in underwater lighting at Shivdi Cha Raja, Sewri",
      category: "Ganpati Idols",
      date: "18 Sep 2026",
    },
    visits: [{ label: "Visit", value: "18 September 2026, approx. 5:05 PM" }],
    doc: {
      about:
        "Shivdi Cha Raja Ganpati Mandal in Sewri, Mumbai – 400015 was celebrating its 75th Ganeshotsav in 2026. The Underwater Dwarka theme was created as a special presentation for this occasion.",
      idol: "The main attraction inside the pandal was the large Ganpati idol, beautifully decorated with traditional clothes, jewellery, flowers and other decorative elements, surrounded by blue and purple lighting that matched the underwater theme.",
      decoration:
        "The pandal was designed with a large and detailed Underwater Dwarka theme. The entrance and outer structure were decorated with artistic representations related to Lord Krishna and Dwarka, with the name “Shivdicha Raja” displayed prominently. Blue and green colours, lighting effects, LED screens, hologram technology and laser-light effects created the impression of an ancient submerged city.",
      heritage:
        "The main theme presented Dwarka, the legendary city associated with Lord Krishna, as an underwater city beneath the sea — showing how traditional religious and cultural stories can be preserved and presented using modern artistic techniques.",
      traditions:
        "Devotees visited the pandal for traditional darshan while experiencing the mythological presentation of Lord Krishna's Dwarka.",
      community:
        "Many devotees and visitors came to the pandal for darshan and moved through the themed area to view the artistic elements, making the pandal function both as a place for worship and as a shared cultural and community space.",
    },
    observations: [
      "Traditional cultural and mythological elements were combined with modern artistic presentation and lighting.",
      "Photographs and videos were recorded during the visit to document the temporary pandal structure, entrance decoration, Krishna-related elements and main Ganpati idol.",
    ],
    tags: ["sewri", "shivdi cha raja", "dwarka", "krishna", "75th ganeshotsav"],
    photos: [
      {
        src: f13,
        caption: "Ganpati Idol at Shivdi Cha Raja, Sewri",
        alt: "Large Ganpati idol at Shivdi Cha Raja Ganpati Mandal in Sewri",
        category: "Ganpati Idols",
        date: "18 Sep 2026",
      },
      {
        src: f16,
        caption: "Close view of the Ganpati Idol in underwater theme lighting",
        alt: "Close-up field photograph of the Ganpati idol at Shivdi Cha Raja in Sewri",
        category: "Ganpati Idols",
        date: "18 Sep 2026",
      },
      {
        src: f14,
        caption: "Mandal entrance featuring Lord Krishna and Dwarka architecture",
        alt: "Entrance of Shivdi Cha Raja Ganpati Mandal in Sewri with Lord Krishna sculpture",
        category: "Pandal & Decoration",
        date: "18 Sep 2026",
      },
      {
        src: f15,
        caption: "Pandal entrance with Krishna and Radha sculpture",
        alt: "Entrance archway of Shivdi Cha Raja Ganpati Mandal showing Krishna and Radha on a swing",
        category: "Pandal & Decoration",
        date: "18 Sep 2026",
      },
    ],
  },
  {
    id: "sewri-station-ganeshotsav",
    name: "Sewri Station Public Ganeshotsav Mandal",
    location: "Station Road, Gandhi Nagar, Sewri, Mumbai – 400015",
    category: "Sewri",
    theme: "Green Forest",
    highlight: "92nd Year · Green Forest Theme",
    summary:
      "A public Ganeshotsav pandal near Sewri Railway Station in its 92nd year, featuring a green forest theme with hanging foliage, rocks, a waterfall-style backdrop and traditional Ganpati idols.",
    idolPhoto: {
      src: f17,
      caption: "Ganpati Idol seated in the green forest theme pandal near Sewri Station",
      alt: "Large Ganpati idol seated on a throne amid green foliage and waterfall backdrop near Sewri Railway Station",
      category: "Ganpati Idols",
      date: "18 Sep 2026",
    },
    visits: [{ label: "Visit", value: "18 September 2026, approx. 6:13 PM" }],
    doc: {
      about:
        "A Ganpati pandal located near Sewri Railway Station (Station Road, Gandhi Nagar, Sewri, Mumbai – 400015) belonging to a public Ganeshotsav mandal in Shivdi/Sewri. A display inside the pandal mentioned its 92nd year.",
      idol: "At the centre of the pandal was a large Ganpati idol in traditional jewellery, a crown and colourful clothing, seated on a decorative throne among rocks and greenery. A smaller Ganpati idol stood nearby.",
      decoration:
        "The pandal featured a green forest theme with green lighting, hanging leaves, branches, artificial plants and a waterfall-style backdrop.",
      heritage:
        "The display inside noting the mandal's 92nd year is a valuable detail because a mandal's long history, artistic decoration and shared community memories form an important part of its cultural heritage.",
      traditions:
        "Devotees and visitors gathered at the pandal for darshan while keeping the traditional Ganpati idol as the focus of the celebration.",
      community:
        "Devotees and visitors gathered for darshan at the pandal, reflecting the community participation around the Sewri station area.",
    },
    observations: [
      "The pandal used nature, green lighting and art to create a distinctive environment while keeping the Ganpati idol as the central focus.",
      "Photographs and video were recorded of the main idol, smaller idol, forest-themed backdrop and mandal history display.",
    ],
    tags: ["sewri", "green forest", "waterfall", "92nd year"],
    photos: [
      {
        src: f17,
        caption: "Ganpati Idol in the green forest theme pandal",
        alt: "Field photograph of the Ganpati idol with green forest lighting and waterfall backdrop near Sewri Station",
        category: "Ganpati Idols",
        date: "18 Sep 2026",
      },
      {
        src: f18,
        caption: "Main and smaller Ganpati idols among rocks and forest greenery",
        alt: "Close view of the main and smaller Ganpati idols in the green forest pandal near Sewri Railway Station",
        category: "Pandal & Decoration",
        date: "18 Sep 2026",
      },
    ],
  },
];

/** Gallery is generated directly from the verified mandal field photographs. */
export const galleryItems = mandals.flatMap((m) =>
  m.photos.map((p, i) => ({
    ...p,
    id: `${m.id}-${i}`,
    mandal: m.name,
    mandalId: m.id,
  })),
);

export const archiveStats = {
  mandals: mandals.length,
  photographs: galleryItems.length,
  areas: new Set(mandals.map((m) => m.category)).size,
  sections: mandals.reduce((n, m) => n + Object.values(m.doc).filter(Boolean).length, 0),
  surveyResponses: 30,
};

/**
 * Verified aggregated Community Survey data (Total = 30 responses).
 * Respondent names and individual records are strictly excluded for privacy.
 */
export const surveyConfig = {
  formUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSc4euKIx2si8gG0WJQcUS9fG1JjEF9tBrbrtlHo0Qpt16VGdg/viewform?usp=header",
  totalResponses: 30,
  title: "Community Survey",
  subtitle:
    "Understanding public awareness and interest in Mumbai’s Ganpati heritage and its digital preservation.",
  introduction:
    "As part of the Ganpati Dharohar CEP project, a community awareness survey was conducted to understand people's participation in Ganpati celebrations, awareness of public Ganpati mandals, interests in Ganpati heritage, and views on preserving and digitally documenting this cultural heritage.",
  ageGroups: [
    { label: "Below 18", count: 15, percentage: 50, percentageText: "50%", color: "#7A263A" },
    { label: "18–25", count: 11, percentage: 36.67, percentageText: "36.67%", color: "#C9A24A" },
    { label: "26–40", count: 3, percentage: 10, percentageText: "10%", color: "#D98A2B" },
    { label: "Above 40", count: 1, percentage: 3.33, percentageText: "3.33%", color: "#B85C38" },
  ],
  participation: [
    { label: "Every year", count: 18, percentageText: "60%", color: "#7A263A" },
    { label: "Sometimes", count: 8, percentageText: "26.67%", color: "#D98A2B" },
    { label: "Rarely", count: 3, percentageText: "10%", color: "#C9A24A" },
    { label: "No", count: 1, percentageText: "3.33%", color: "#B85C38" },
  ],
  publicMandalVisits: [
    { label: "Yes", count: 23, percentage: 76.67, percentageText: "76.67%", color: "#7A263A" },
    { label: "No", count: 7, percentage: 23.33, percentageText: "23.33%", color: "#C9A24A" },
  ],
  interests: [
    { label: "Traditional decorations", count: 19, color: "#7A263A" },
    { label: "Eco-friendly celebrations", count: 19, color: "#7A263A" },
    { label: "Aarti and rituals", count: 15, color: "#B85C38" },
    { label: "History of the mandal", count: 14, color: "#D98A2B" },
    { label: "Cultural programs", count: 14, color: "#D98A2B" },
    { label: "Ganpati idol", count: 13, color: "#C9A24A" },
    { label: "Community activities", count: 12, color: "#C9A24A" },
    { label: "Other", count: 4, color: "#B85C38" },
  ],
  interestsNote:
    "Multiple options could be selected, so the total responses across categories may exceed 30.",
  keyObservations: [
    "Among the 30 respondents, 15 belonged to the Below 18 age group.",
    "18 respondents said they participate in Ganpati celebrations every year.",
    "23 respondents said they have visited a public Ganpati mandal in Mumbai.",
    "Traditional decorations and eco-friendly celebrations were each selected 19 times.",
    "Aarti and rituals received 15 selections.",
    "History of the mandal and cultural programs each received 14 selections.",
    "Ganpati idols received 13 selections.",
    "Community activities received 12 selections.",
  ],
  whyItMatters:
    "The survey helps us understand how people connect with Ganpati celebrations and which aspects of Ganpati heritage interest them. The responses also help identify how digital documentation can be used as part of the Ganpati Dharohar project to make heritage information accessible to students, young people and the wider community.",
};
