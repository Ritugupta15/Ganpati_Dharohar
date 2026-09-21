import archiveImage from "@/assets/images/mandals/ganpati-archive-illustration.jpg";
import craftImage from "@/assets/images/traditions/clay-idol-craft-illustration.jpg";
import entranceImage from "@/assets/images/decorations/mandal-entrance-illustration.jpg";
import ecoImage from "@/assets/images/gallery/eco-friendly-ganpati-illustration.jpg";

export type HeritageCategory = "South Mumbai" | "Central Mumbai" | "Western Suburbs" | "Other";
export type GalleryCategory = "Idols" | "Decorations" | "Traditions" | "Community" | "Eco-Friendly";

export type Mandal = {
  id: string;
  name: string;
  location: string;
  category: HeritageCategory;
  summary: string;
  history: string;
  culturalSignificance: string;
  traditions: string[];
  idolInformation: string;
  decoration: string;
  communityActivities: string[];
  ecoFriendlyPractices: string[];
  preservation: string;
  image: string;
  imageAlt: string;
};

const pending = {
  history: "[Add verified mandal history here]",
  culturalSignificance: "[Add verified cultural significance here]",
  traditions: ["[Add documented traditions here]"],
  idolInformation: "[Add verified idol and artwork information here]",
  decoration: "[Add documented decoration details here]",
  communityActivities: ["[Add verified community activities here]"],
  ecoFriendlyPractices: ["[Add verified eco-friendly practices here]"],
  preservation: "[Add preservation notes after documentation]",
};

export const mandals: Mandal[] = [
  {
    id: "mandal-entry-01",
    name: "[Mandal Name 01]",
    location: "[South Mumbai location]",
    category: "South Mumbai",
    summary: "Placeholder entry ready for verified history, traditions and field documentation.",
    image: archiveImage,
    imageAlt: "Illustrative Ganpati archive scene; not a field photograph",
    ...pending,
  },
  {
    id: "mandal-entry-02",
    name: "[Mandal Name 02]",
    location: "[Central Mumbai location]",
    category: "Central Mumbai",
    summary: "Placeholder entry ready for verified craftsmanship and community information.",
    image: craftImage,
    imageAlt: "Illustrative clay idol craftsmanship scene; not a field photograph",
    ...pending,
  },
  {
    id: "mandal-entry-03",
    name: "[Mandal Name 03]",
    location: "[Western Suburbs location]",
    category: "Western Suburbs",
    summary: "Placeholder entry ready for verified celebration and preservation records.",
    image: entranceImage,
    imageAlt: "Illustrative traditional mandal entrance; not a field photograph",
    ...pending,
  },
  {
    id: "mandal-entry-04",
    name: "[Mandal Name 04]",
    location: "[Other Mumbai location]",
    category: "Other",
    summary: "Placeholder entry ready for verified eco-friendly and cultural documentation.",
    image: ecoImage,
    imageAlt: "Illustrative eco-friendly Ganpati celebration; not a field photograph",
    ...pending,
  },
];

export const galleryItems = [
  { id: 1, src: archiveImage, category: "Idols" as GalleryCategory, caption: "[Add field photograph caption]", mandal: "[Add mandal name]", alt: "Illustrative Ganpati archive scene; not a field photograph" },
  { id: 2, src: craftImage, category: "Traditions" as GalleryCategory, caption: "[Add craftsmanship photograph caption]", mandal: "[Add mandal name]", alt: "Illustrative clay idol craftsmanship scene; not a field photograph" },
  { id: 3, src: entranceImage, category: "Decorations" as GalleryCategory, caption: "[Add decoration photograph caption]", mandal: "[Add mandal name]", alt: "Illustrative traditional mandal entrance; not a field photograph" },
  { id: 4, src: ecoImage, category: "Eco-Friendly" as GalleryCategory, caption: "[Add eco-friendly practice caption]", mandal: "[Add mandal name]", alt: "Illustrative eco-friendly celebration; not a field photograph" },
];

export const surveyConfig = {
  formUrl: "",
  questions: [
    "What is your age group?",
    "Do you participate in Ganpati celebrations?",
    "Have you visited a public Ganpati mandal in Mumbai?",
    "How familiar are you with the history of Mumbai's Ganpati festival?",
    "Which Ganpati mandals have you heard of?",
    "Which part of Ganpati heritage should be preserved?",
    "Do you think Ganpati heritage should be digitally documented?",
    "What is the biggest challenge during Ganpati celebrations?",
    "Do you support eco-friendly Ganpati celebrations?",
    "Would you use a website about Mumbai's Ganpati heritage?",
    "Optional suggestion for preserving Ganpati heritage.",
  ],
};

export const surveyResults: null | {
  totalResponses: number;
  awareness: number;
  preservationSupport: number;
  ecoFriendlySupport: number;
  websiteInterest: number;
} = null;
