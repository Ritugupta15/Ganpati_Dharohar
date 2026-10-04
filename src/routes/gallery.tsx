import { createFileRoute } from "@tanstack/react-router";
import { ImageIcon } from "lucide-react";
import { useState } from "react";
import { PageIntro } from "@/components/site/sections";
import { Lightbox } from "@/components/site/lightbox";
import { Button } from "@/components/ui/button";
import { GALLERY_CATEGORIES, galleryItems, type GalleryCategory } from "@/data/heritage";

const filters: Array<"All" | GalleryCategory> = ["All", ...GALLERY_CATEGORIES];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Digital Gallery — Ganpati Dharohar" },
      {
        name: "description",
        content:
          "Original field photographs of Ganpati idols, decorations, traditions and community participation from five Mumbai mandals.",
      },
      { property: "og:title", content: "Digital Gallery — Ganpati Dharohar" },
      {
        property: "og:description",
        content: "Verified field photographs from Govandi, Chembur and Sewri Ganpati pandals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const items = galleryItems.filter((i) => filter === "All" || i.category === filter);

  return (
    <>
      <PageIntro
        eyebrow="Visual records"
        title="Digital Gallery"
        description={`${galleryItems.length} original photographs captured during CEP field visits in September 2026 across Govandi, Chembur and Sewri. Select any photograph to view it in full resolution.`}
      />
      <section className="py-14">
        <div className="archive-container">
          <div className="flex flex-wrap gap-2" aria-label="Filter gallery by category">
            {filters.map((item) => (
              <Button
                key={item}
                size="sm"
                variant={filter === item ? "default" : "outline"}
                onClick={() => setFilter(item)}
              >
                {item}
              </Button>
            ))}
          </div>

          {items.length ? (
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  className="archive-card group flex flex-col overflow-hidden text-left"
                  onClick={() => setOpen(i)}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                    <img
                      src={item.src}
                      alt={item.alt || item.caption}
                      loading="lazy"
                      className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <span className="flex flex-1 flex-col justify-between p-4">
                    <span>
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-terracotta">
                        {item.category} · {item.date}
                      </span>
                      <strong className="mt-1.5 block font-display text-xl text-primary">
                        {item.caption}
                      </strong>
                    </span>
                    <small className="mt-2 block text-xs font-medium text-muted-foreground">
                      {item.mandal}
                    </small>
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-10 py-16 text-center">
              <ImageIcon className="mx-auto text-muted-foreground" />
              <p className="mt-3 text-muted-foreground">No gallery images in this category.</p>
            </div>
          )}
        </div>
      </section>
      {open !== null && (
        <Lightbox items={items} index={open} onChange={setOpen} onClose={() => setOpen(null)} />
      )}
    </>
  );
}
