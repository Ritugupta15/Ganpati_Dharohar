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
export const GALLERY_CATEGORIES = ["Idols", "Decorations", "Traditions", "Community", "Field Work"] as const;
export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export type Photo = { src: string; caption: string; category: GalleryCategory; date: string };
export type Section = { title: string; body: string };

export type Mandal = {
  id: string;
  name: string;
  location: string;
  category: HeritageCategory;
  theme: string;
  highlight: string; // one short standout fact
  summary: string;
  visits: { label: string; value: string }[];
  /** Exactly five story sections shown on the details page */
  sections: [Section, Section, Section, Section, Section];
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
    summary: "A local mandal that creates its Ganpati idol in a different form or material every year — this year, entirely from groundnuts.",
    visits: [
      { label: "First visit", value: "17 September 2026, approx. 8:19–8:21 PM" },
      { label: "Revisit", value: "24 September 2026, approx. 2:27 PM" },
      { label: "Establishment year shown on board", value: "1994" },
    ],
    sections: [
      { title: "About the Mandal", body: "The mandal has been celebrating the Ganpati festival since 2005. Every year it creates the Ganpati idol in a different form or material, keeping memories of its celebrations alive over the years." },
      { title: "The Idol", body: "The main attraction was a unique Ganpati idol decorated entirely using groundnuts (mungfali / peanuts). A total of 11,151 groundnuts were arranged carefully over the idol, giving it a distinctive appearance." },
      { title: "Traditions & Offerings", body: "Traditional items such as flowers, lamps, fruits, coconuts and other pooja materials were placed in front of the idol — combining traditional worship with creative decoration." },
      { title: "History & Past Idols", body: "An information board inside the pandal showed photographs of the mandal's idols from previous years, along with its name, plot address and establishment year (1994) — an informal record of its own history." },
      { title: "Reflection", body: "Ganpati heritage is not limited to the festival itself. The mandal's history, unique idol decoration, traditional practices, old photographs and community memories are all valuable parts of cultural heritage." },
    ],
    tags: ["groundnut idol", "creative material", "local history", "pooja"],
    photos: [
      { src: f2, caption: "Ganpati idol made of 11,151 groundnuts with pooja offerings", category: "Idols", date: "17 Sep 2026" },
      { src: f3, caption: "Information board showing the mandal's past idols", category: "Traditions", date: "17 Sep 2026" },
      { src: f1, caption: "Revisit at the groundnut Ganpati pandal", category: "Field Work", date: "24 Sep 2026" },
    ],
  },
  {
    id: "shivaji-nagarcha-ganraya",
    name: "Shivaji Nagarcha Ganraya Sarvajanik Ganeshotsav Mandal",
    location: "Shivaji Nagar, Govandi West, Mumbai – 400043",
    category: "Govandi",
    theme: "Suvarna Mahotsav (50th anniversary)",
    highlight: "Celebrating 50 years",
    summary: "A community pandal celebrating its Suvarna Mahotsav, with red-and-white décor, chandeliers and a well-attended evening Aarti.",
    visits: [
      { label: "First visit", value: "17 September 2026, evening (Aarti at 8:34 PM)" },
      { label: "Revisit", value: "23 September 2026, approx. 7:45–7:50 PM" },
    ],
    sections: [
      { title: "About the Pandal", body: "The pandal was decorated with red and white cloth, decorative designs, lights and chandeliers. The entrance and surroundings had colourful lighting, and the mandal was celebrating its 50th anniversary — the Suvarna Mahotsav." },
      { title: "The Idol & Decoration", body: "The main attraction was the large Ganpati idol placed inside the pandal. Traditional decorative elements combined with modern lighting gave it a festive yet traditional appearance." },
      { title: "The Aarti", body: "An Aarti was observed during the visit. Many devotees stood together in front of the idol while the traditional prayer was performed — a ritual observed directly, not just through photographs." },
      { title: "Community Participation", body: "The large number of devotees gathered for the Aarti showed the community side of the festival and the importance of the celebration to local people." },
      { title: "Reflection", body: "Ganpati heritage includes not only the idol and decorations but also rituals, community participation, local celebrations and the memories connected with the mandal." },
    ],
    tags: ["aarti", "50th anniversary", "community", "lighting"],
    photos: [
      { src: f7, caption: "Devotees gathered during the evening Aarti", category: "Community", date: "17 Sep 2026" },
      { src: f4, caption: "The large Ganpati idol inside the pandal", category: "Idols", date: "23 Sep 2026" },
      { src: f5, caption: "Suvarna Mahotsav (50 years) display", category: "Decorations", date: "23 Sep 2026" },
      { src: f6, caption: "Pandal entrance and festive lighting at night", category: "Decorations", date: "23 Sep 2026" },
    ],
  },
  {
    id: "sahyadri-krida-mandal",
    name: "Sahyadri Krida Mandal Ganpati Pandal",
    location: "Tilak Nagar, Chembur West, Mumbai – 400089",
    category: "Chembur",
    theme: "Grand palace with superhero figures",
    highlight: "50 years with the community",
    summary: "A grand building-style pandal with superhero figures and an airplane model, marking 50 years of association with the local community.",
    visits: [{ label: "Visit", value: "18 September 2026, approx. 2:44–2:49 PM" }],
    sections: [
      { title: "About the Pandal", body: "Organised by Sahyadri Krida Mandal in Tilak Nagar, the entrance was decorated with marigold garlands and lights. The main structure was designed like a grand building." },
      { title: "Creative Decoration", body: "The decoration included superhero figures such as Batman, Spider-Man, Dr Strange, Chhota Bheem and Hulk, along with an airplane model — attractive for visitors of all ages." },
      { title: "The Ganpati Idol", body: "The idol was decorated with traditional jewellery, flowers and ornaments. The green-themed backdrop had many hanging bells and white floral decorations, with fruits and offerings arranged around it." },
      { title: "Community Participation", body: "Many people came for darshan, to offer prayers and take photographs. A 50 Years celebration display showed the mandal's long association with the community." },
      { title: "Reflection", body: "The mandal combines religious traditions, artistic decoration and community participation — preserving culture while adopting creative, modern forms of decoration." },
    ],
    tags: ["superheroes", "palace", "marigold", "50 years"],
    photos: [
      { src: f12, caption: "Ganpati idol with green backdrop and hanging bells", category: "Idols", date: "18 Sep 2026" },
      { src: f9, caption: "Entrance decorated with marigold garlands", category: "Decorations", date: "18 Sep 2026" },
      { src: f10, caption: "Grand building-style pandal with superhero figures", category: "Decorations", date: "18 Sep 2026" },
      { src: f11, caption: "Full view of the pandal with airplane model", category: "Decorations", date: "18 Sep 2026" },
      { src: f8, caption: "Darshan at the Sahyadri Krida Mandal idol", category: "Field Work", date: "18 Sep 2026" },
    ],
  },
  {
    id: "shivdi-cha-raja",
    name: "Shivdi Cha Raja Ganpati Mandal",
    location: "Sewri, Mumbai – 400015",
    category: "Sewri",
    theme: "Underwater Dwarka",
    highlight: "75th Ganeshotsav",
    summary: "An immersive Underwater Dwarka theme created for the mandal's 75th Ganeshotsav, telling Lord Krishna's story with light and art.",
    visits: [{ label: "Visit", value: "18 September 2026, approx. 5:05 PM" }],
    sections: [
      { title: "The Pandal & Entrance", body: "The entrance displayed “Shivdicha Raja” prominently, with large artistic elements related to Lord Krishna and Dwarka. Blue and green colours and lighting gave the feeling of entering an underwater world." },
      { title: "The Ganpati Idol", body: "The large idol was decorated with traditional clothes, jewellery and flowers, surrounded by blue and purple lighting that matched the underwater theme." },
      { title: "The Underwater Dwarka Theme", body: "Dwarka, the legendary city of Lord Krishna, was presented as a submerged city beneath the sea — a special presentation for the mandal's 75th Ganeshotsav in 2026. Published information reported the use of LED screens, holograms and laser effects." },
      { title: "Visitors & Community", body: "Many devotees came for darshan and to experience the themed decoration, making the pandal both a place of worship and a shared cultural space." },
      { title: "Reflection", body: "Photographs and videos were recorded because the pandal is temporary. The visit showed how mandals preserve cultural stories while presenting them in new and creative ways." },
    ],
    tags: ["Dwarka", "Krishna", "75 years", "lighting", "technology"],
    photos: [
      { src: f16, caption: "Ganpati idol in blue and purple underwater lighting", category: "Idols", date: "18 Sep 2026" },
      { src: f14, caption: "“Shivdicha Raja” entrance with Krishna and Dwarka elements", category: "Decorations", date: "18 Sep 2026" },
      { src: f15, caption: "Visitors entering the themed pandal", category: "Community", date: "18 Sep 2026" },
      { src: f13, caption: "Idol and devotees inside the Underwater Dwarka pandal", category: "Community", date: "18 Sep 2026" },
    ],
  },
  {
    id: "sewri-station-ganeshotsav",
    name: "Sewri Station Public Ganeshotsav Mandal",
    location: "Station Road, Gandhi Nagar, Sewri, Mumbai – 400015",
    category: "Sewri",
    theme: "Green forest",
    highlight: "92nd year",
    summary: "A green-forest pandal near Sewri Railway Station with a waterfall backdrop, in the mandal's 92nd year of celebration.",
    visits: [{ label: "Visit", value: "18 September 2026, approx. 6:13 PM" }],
    sections: [
      { title: "About the Mandal", body: "A public Ganeshotsav mandal in Shivdi/Sewri near the railway station. A display inside mentioned its 92nd year — a mandal's history is part of its cultural heritage." },
      { title: "The Green Forest Theme", body: "The pandal used green lighting, hanging leaves, branches, artificial plants and a waterfall-style backdrop to create a forest setting." },
      { title: "The Ganpati Idol", body: "At the centre was a large idol in traditional jewellery, a crown and colourful clothing, seated on a decorative throne among rocks and greenery. A smaller idol stood nearby." },
      { title: "Community & Darshan", body: "Devotees and visitors gathered for darshan. Photographs and a video of the idol, decorations and visitors were recorded." },
      { title: "Reflection", body: "Pandals use nature, lighting and art to make each year different while keeping the idol as the focus. Heritage includes history, decoration, participation and shared memories." },
    ],
    tags: ["forest", "nature", "waterfall", "92 years"],
    photos: [
      { src: f17, caption: "Ganpati idol on a throne in the green forest setting", category: "Idols", date: "18 Sep 2026" },
      { src: f18, caption: "Main and smaller idols among greenery and lights", category: "Decorations", date: "18 Sep 2026" },
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
  visits: mandals.reduce((n, m) => n + m.visits.filter((v) => /visit/i.test(v.label)).length, 0),
  areas: new Set(mandals.map((m) => m.category)).size,
};

export const surveyResults: null | {
  totalResponses: number;
  awareness: number;
  preservationSupport: number;
  ecoFriendlySupport: number;
  websiteInterest: number;
} = null;
