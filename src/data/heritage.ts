/**
 * Shared archive data for Ganpati Dharohar.
 * All mandal text and photographs below come from the project's own
 * field visit reports (September 2026). Add new mandals by copying one entry.
 */
import f1 from "@/assets/images/field/f-001-000.jpg";
import f2 from "@/assets/images/field/f-002-001.jpg";
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
/** Only categories that have real photographs are listed. */
export const GALLERY_CATEGORIES = ["Ganpati Idols", "Pandal & Decoration", "Field Visits", "Cultural Activities"] as const;
export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export type Photo = { src: string; caption: string; category: GalleryCategory; date: string };

/** Placeholder for anything the field reports did not cover. Never invent content. */
export const PENDING = "[Information will be added from the field documentation.]";

/** Documentation headings shown on every mandal page (from the field report). */
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
  visits: { label: string; value: string }[];
  doc: Record<DocKey, string>;
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
    theme: "Groundnut (mungfali) idol",
    highlight: "Idol made with 11,151 groundnuts",
    summary: "A local mandal that creates its Ganpati idol in a different form or material every year — this year, decorated entirely with groundnuts.",
    visits: [
      { label: "First visit", value: "17 September 2026, approx. 8:19–8:21 PM" },
      { label: "Revisit", value: "24 September 2026, approx. 2:27 PM" },
    ],
    doc: {
      about: "The mandal has been celebrating the Ganpati festival since 2005. Every year it creates the Ganpati idol in a different form or material.",
      idol: "The main attraction was a unique Ganpati idol decorated entirely using groundnuts (mungfali / peanuts). A total of 11,151 groundnuts were carefully arranged over the idol, giving it a distinctive appearance.",
      decoration: PENDING,
      heritage: "An information board inside the pandal showed photographs of the mandal's idols from previous years, along with the mandal's name, plot address and establishment year (1994). It reflects how the mandal has informally documented its own history over time.",
      traditions: "Traditional items such as flowers, lamps, fruits, coconuts and other pooja materials were placed in front of the idol.",
      community: PENDING,
      preservation: PENDING,
    },
    observations: [
      "The mandal creates its idol in a different form or material every year.",
      "The combination of traditional worship and creative decoration made the pandal interesting from a cultural perspective.",
      "The board of past idols shows the value of a more structured digital archive of local Ganpati heritage.",
    ],
    tags: ["groundnut idol", "creative material", "local history", "pooja"],
    photos: [
      { src: f2, caption: "Ganpati Idol — made with 11,151 groundnuts", category: "Ganpati Idols", date: "17 Sep 2026" },
      { src: f3, caption: "Information board with past idols", category: "Pandal & Decoration", date: "17 Sep 2026" },
      { src: f1, caption: "Field Visit (revisit)", category: "Field Visits", date: "24 Sep 2026" },
    ],
  },
  {
    id: "shivaji-nagarcha-ganraya",
    name: "Shivaji Nagarcha Ganraya Sarvajanik Ganeshotsav Mandal",
    location: "Shivaji Nagar, Govandi West, Mumbai – 400043",
    category: "Govandi",
    theme: "Suvarna Mahotsav (50th anniversary)",
    highlight: "Celebrating 50 years",
    summary: "A community pandal celebrating its Suvarna Mahotsav, with red-and-white décor, chandeliers and an evening Aarti attended by many devotees.",
    visits: [
      { label: "First visit", value: "17 September 2026, evening (Aarti observed at 8:34 PM)" },
      { label: "Revisit", value: "23 September 2026, approx. 7:45–7:50 PM" },
    ],
    doc: {
      about: "The pandal is named “Shivaji Nagarcha Ganraya Sarvajanik Ganeshotsav Mandal”. The mandal was celebrating its 50th anniversary — the Suvarna Mahotsav.",
      idol: "The main attraction was the large Ganpati idol placed inside the pandal.",
      decoration: "The pandal was decorated with red and white cloth, decorative designs, lights and chandeliers. The entrance and surrounding area were decorated with colourful lighting, giving a traditional and festive appearance.",
      heritage: "The Aarti connects the celebration with religious practice and community participation, making it an important part of Ganpati heritage alongside the idol and decoration.",
      traditions: "A traditional Aarti was observed during the visit, with devotees standing together in front of the idol while the prayer was performed.",
      community: "Many devotees had gathered inside the pandal and participated in the Aarti, showing the community aspect of the festival.",
      preservation: PENDING,
    },
    observations: [
      "Traditional decorative elements were used together with modern lighting.",
      "The large number of devotees showed the importance of the festival to the local community.",
      "Revisit photographs (23 September) are kept separate from first-visit photographs so dates remain accurate.",
    ],
    tags: ["aarti", "50th anniversary", "community", "lighting"],
    photos: [
      { src: f7, caption: "Aarti", category: "Cultural Activities", date: "17 Sep 2026" },
      { src: f6, caption: "Pandal entrance and lighting", category: "Pandal & Decoration", date: "23 Sep 2026" },
      { src: f4, caption: "Field Visit — Ganpati Idol", category: "Field Visits", date: "23 Sep 2026" },
      { src: f5, caption: "Field Visit — Suvarna Mahotsav display", category: "Field Visits", date: "23 Sep 2026" },
    ],
  },
  {
    id: "sahyadri-krida-mandal",
    name: "Sahyadri Krida Mandal Ganpati Pandal",
    location: "Tilak Nagar, Chembur West, Mumbai – 400089",
    category: "Chembur",
    theme: "Grand building with superhero figures",
    highlight: "50 Years celebration",
    summary: "A grand building-style pandal with superhero figures and an airplane model, with a 50 Years celebration display.",
    visits: [{ label: "Visit", value: "18 September 2026, approx. 2:44–2:49 PM" }],
    doc: {
      about: "The pandal was organised by Sahyadri Krida Mandal in the Tilak Nagar area. A 50 Years celebration display showed the mandal's long association with the local community.",
      idol: "The main Ganpati idol was decorated with traditional jewellery, flowers and ornaments. The backdrop had a green theme with many hanging bells and white floral decorations.",
      decoration: "The entrance was decorated with colourful marigold garlands and decorative lights. The main pandal was a large structure designed like a grand building, with superhero figures such as Batman, Spider-Man, Dr Strange, Chhota Bheem and Hulk, and an airplane model.",
      heritage: "The mandal combines religious traditions, artistic decoration and community participation — preserving traditions while adopting creative and modern forms of decoration.",
      traditions: "Fruits and different offerings were arranged around the idol. Visitors came to take darshan and offer prayers.",
      community: "Many people came to the pandal to take darshan, offer prayers and take photographs.",
      preservation: PENDING,
    },
    observations: [
      "Traditional religious decoration combined with modern creative elements attracted visitors of different age groups.",
      "Photographs of the entrance, main pandal, idol, decorations and surroundings were captured with location details.",
    ],
    tags: ["superheroes", "grand building", "marigold", "50 years"],
    photos: [
      { src: f12, caption: "Ganpati Idol", category: "Ganpati Idols", date: "18 Sep 2026" },
      { src: f9, caption: "Mandal Entrance", category: "Pandal & Decoration", date: "18 Sep 2026" },
      { src: f10, caption: "Main pandal with superhero figures", category: "Pandal & Decoration", date: "18 Sep 2026" },
      { src: f11, caption: "Full view of the pandal with airplane model", category: "Pandal & Decoration", date: "18 Sep 2026" },
      { src: f8, caption: "Field Visit — darshan", category: "Field Visits", date: "18 Sep 2026" },
    ],
  },
  {
    id: "shivdi-cha-raja",
    name: "Shivdi Cha Raja Ganpati Mandal",
    location: "Sewri, Mumbai – 400015",
    category: "Sewri",
    theme: "Underwater Dwarka",
    highlight: "75th Ganeshotsav",
    summary: "An Underwater Dwarka theme created for the mandal's 75th Ganeshotsav in 2026, presenting Lord Krishna's legendary city beneath the sea.",
    visits: [{ label: "Visit", value: "18 September 2026, approx. 5:05 PM" }],
    doc: {
      about: "Shivdi Cha Raja Ganpati Mandal in Sewri was celebrating its 75th Ganeshotsav in 2026, with the Underwater Dwarka theme created as a special presentation for the occasion.",
      idol: "The large Ganpati idol was decorated with traditional clothes, jewellery, flowers and other decorative elements, surrounded by blue and purple lighting that matched the underwater theme.",
      decoration: "The entrance displayed the name “Shivdicha Raja” prominently, with large artistic elements related to Lord Krishna and Dwarka. Blue and green colours, lighting effects and themed structures created an underwater atmosphere. Published information about the pandal reported the use of LED screens, hologram technology and laser-light effects.",
      heritage: "Dwarka, the legendary city associated with Lord Krishna, was presented as a submerged city — showing how traditional religious and cultural stories can be presented using modern technology and art.",
      traditions: "Devotees visited the pandal for darshan.",
      community: "Many devotees and visitors came for darshan and to experience the themed decoration. The pandal functioned as both a place of worship and a shared cultural and community space.",
      preservation: "Photographs and videos were recorded during the visit because the pandal is a temporary structure and will not remain in the same form after the festival.",
    },
    observations: [
      "Traditional cultural elements were combined with a modern, large-scale artistic presentation.",
      "Videos document the underwater environment, lighting, interior decoration and visitor experience.",
    ],
    tags: ["Dwarka", "Krishna", "75 years", "lighting", "technology"],
    photos: [
      { src: f13, caption: "Ganpati Idol", category: "Ganpati Idols", date: "18 Sep 2026" },
      { src: f16, caption: "Ganpati Idol in underwater lighting", category: "Ganpati Idols", date: "18 Sep 2026" },
      { src: f14, caption: "Mandal Entrance", category: "Pandal & Decoration", date: "18 Sep 2026" },
      { src: f15, caption: "Pandal entrance with Krishna and Dwarka elements", category: "Pandal & Decoration", date: "18 Sep 2026" },
    ],
  },
  {
    id: "sewri-station-ganeshotsav",
    name: "Sewri Station Public Ganeshotsav Mandal",
    location: "Station Road, Gandhi Nagar, Sewri, Mumbai – 400015",
    category: "Sewri",
    theme: "Green forest",
    highlight: "92nd year",
    summary: "A green-forest pandal near Sewri Railway Station with a waterfall-style backdrop, in the mandal's 92nd year.",
    visits: [{ label: "Visit", value: "18 September 2026, approx. 6:13 PM" }],
    doc: {
      about: "A Ganpati pandal near Sewri Railway Station belonging to a public Ganeshotsav mandal in Shivdi/Sewri. A display inside mentioned the mandal's 92nd year.",
      idol: "At the centre was a large Ganpati idol in traditional jewellery, a crown and colourful clothing, seated on a decorative throne among rocks and greenery. A smaller Ganpati idol stood nearby.",
      decoration: "The pandal had a green forest theme with green lighting, hanging leaves, branches, artificial plants and a waterfall-style backdrop.",
      heritage: "The mandal's 92nd year is a useful detail because a mandal's history is part of its cultural heritage.",
      traditions: "Devotees and visitors gathered for darshan.",
      community: "Devotees and visitors gathered at the pandal for darshan, showing the community side of the festival.",
      preservation: PENDING,
    },
    observations: [
      "The pandal used nature, lighting and art to make the festival different while keeping the idol as the focus.",
      "Photographs and a video of the idol, decorations and visitors were recorded.",
    ],
    tags: ["forest", "nature", "waterfall", "92 years"],
    photos: [
      { src: f17, caption: "Ganpati Idol", category: "Ganpati Idols", date: "18 Sep 2026" },
      { src: f18, caption: "Pandal Decoration — green forest theme", category: "Pandal & Decoration", date: "18 Sep 2026" },
    ],
  },
];

/** Gallery is generated from the mandal photos — no duplicate data. */
export const galleryItems = mandals.flatMap((m) =>
  m.photos.map((p, i) => ({ ...p, id: `${m.id}-${i}`, mandal: m.name, mandalId: m.id })),
);

export const archiveStats = {
  mandals: mandals.length,
  photographs: galleryItems.length,
  areas: new Set(mandals.map((m) => m.category)).size,
  /** Documentation sections that contain real report content (placeholders excluded). */
  sections: mandals.reduce((n, m) => n + Object.values(m.doc).filter((t) => t !== PENDING).length, 0),
};

/** Paste the real Google Form link here when it is ready. */
export const surveyConfig = { formUrl: "" };
