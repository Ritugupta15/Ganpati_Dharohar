import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

type Item = { src: string; caption: string; date?: string; mandal?: string };

/** Accessible image viewer with keyboard support (← → Esc). */
export function Lightbox({ items, index, onChange, onClose }: { items: Item[]; index: number; onChange: (i: number) => void; onClose: () => void }) {
  const item = items[index];
  const go = (d: number) => onChange((index + d + items.length) % items.length);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });
  if (!item) return null;
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-foreground/90 p-4" role="dialog" aria-modal="true" aria-label="Image preview" onClick={onClose}>
      <div className="relative flex max-h-full max-w-5xl flex-col" onClick={(e) => e.stopPropagation()}>
        <Button size="icon" variant="secondary" className="absolute right-3 top-3 z-10" onClick={onClose} aria-label="Close preview" autoFocus><X /></Button>
        {items.length > 1 && <><Button size="icon" variant="secondary" className="absolute left-3 top-1/2 z-10 -translate-y-1/2" onClick={() => go(-1)} aria-label="Previous photo"><ChevronLeft /></Button><Button size="icon" variant="secondary" className="absolute right-3 top-1/2 z-10 -translate-y-1/2" onClick={() => go(1)} aria-label="Next photo"><ChevronRight /></Button></>}
        <img src={item.src} alt={item.caption} className="max-h-[75vh] w-auto rounded-t-md object-contain" />
        <div className="rounded-b-md bg-card p-4"><strong className="font-display text-xl text-primary">{item.caption}</strong><p className="text-xs text-muted-foreground">{[item.mandal, item.date, `${index + 1} / ${items.length}`].filter(Boolean).join(" · ")}</p></div>
      </div>
    </div>
  );
}
