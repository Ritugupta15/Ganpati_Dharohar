import { createFileRoute, Link } from "@tanstack/react-router";
import { ImageIcon, Sparkles } from "lucide-react";
import { useState } from "react";
import { PageIntro } from "@/components/site/sections";
import { Lightbox } from "@/components/site/lightbox";
import { Button } from "@/components/ui/button";
import { GALLERY_CATEGORIES, galleryItems, type GalleryCategory } from "@/data/heritage";

const filters: Array<"All" | GalleryCategory> = ["All", ...GALLERY_CATEGORIES];

export const Route = createFileRoute("/gallery")({ head: () => ({ meta: [
  { title: "Digital Gallery — Ganpati Dharohar" }, { name: "description", content: "Field photographs of Ganpati idols, decorations, traditions and community from five Mumbai mandals." },
  { property: "og:title", content: "Digital Gallery — Ganpati Dharohar" }, { property: "og:description", content: "Real field photographs from Govandi, Chembur and Sewri Ganpati pandals." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: GalleryPage });

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const items = galleryItems.filter((i) => filter === "All" || i.category === filter);
  return <><PageIntro eyebrow="Visual records" title="Digital Gallery" description={`${galleryItems.length} photographs captured during field visits in September 2026. Click any photo to view it large and use arrow keys to browse.`} />
    <section className="py-14"><div className="archive-container">
      <div className="flex flex-wrap items-center justify-between gap-4"><div className="flex flex-wrap gap-2">{filters.map((item) => <Button key={item} size="sm" variant={filter === item ? "default" : "outline"} onClick={() => setFilter(item)}>{item}</Button>)}</div><Button asChild variant="secondary" size="sm"><Link to="/contribute"><Sparkles />Contribute a photo</Link></Button></div>
      {items.length ? <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">{items.map((item, i) => <button key={item.id} className="archive-card group mb-5 block w-full break-inside-avoid overflow-hidden text-left" onClick={() => setOpen(i)}><img src={item.src} alt={item.caption} loading="lazy" className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /><span className="block p-4"><span className="text-[10px] font-bold uppercase tracking-[.14em] text-accent-foreground">{item.category} · {item.date}</span><strong className="mt-2 block font-display text-xl text-primary">{item.caption}</strong><small className="mt-1 block text-muted-foreground">{item.mandal}</small></span></button>)}</div>
        : <div className="mt-10 py-16 text-center"><ImageIcon className="mx-auto text-muted-foreground" /><p className="mt-3">No gallery images in this category yet.</p></div>}
    </div></section>
    {open !== null && <Lightbox items={items} index={open} onChange={setOpen} onClose={() => setOpen(null)} />}
  </>;
}
