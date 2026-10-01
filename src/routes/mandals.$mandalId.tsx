import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Eye, MapPin, Share2, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/site/lightbox";
import { DOC_SECTIONS, GALLERY_CATEGORIES, mandals, PENDING } from "@/data/heritage";

export const Route = createFileRoute("/mandals/$mandalId")({
  loader: ({ params }) => { const mandal = mandals.find((m) => m.id === params.mandalId); if (!mandal) throw notFound(); return mandal; },
  head: ({ loaderData }) => ({ meta: [
    { title: loaderData ? `${loaderData.name} — Ganpati Dharohar` : "Heritage entry unavailable — Ganpati Dharohar" },
    { name: "description", content: loaderData?.summary ?? "This heritage archive entry is unavailable." },
    { property: "og:title", content: loaderData?.name ?? "Heritage entry unavailable" },
    { property: "og:description", content: loaderData?.summary ?? "This heritage archive entry is unavailable." },
    { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: MandalDetails,
  notFoundComponent: () => <div className="archive-container py-24 text-center"><h1 className="font-display text-5xl text-primary">Heritage entry not found</h1><Button asChild className="mt-6"><Link to="/explore">Return to Explore</Link></Button></div>,
});

function MandalDetails() {
  const m = Route.useLoaderData();
  const [photo, setPhoto] = useState<number | null>(null);
  const idx = mandals.findIndex((x) => x.id === m.id);
  const next = mandals[(idx + 1) % mandals.length]!;
  const hero = m.photos[0]!;
  const share = async () => {
    const url = window.location.href;
    if (navigator.share) { try { await navigator.share({ title: m.name, url }); } catch { /* cancelled */ } }
    else { await navigator.clipboard.writeText(url); toast.success("Link copied"); }
  };

  return <>
    <section className="relative min-h-[62vh] overflow-hidden bg-primary">
      <img src={hero.src} alt={hero.caption} className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/10" />
      <div className="archive-container relative flex min-h-[62vh] items-end pb-12 text-primary-foreground"><div>
        <div className="flex gap-2"><Button asChild variant="secondary" size="sm"><Link to="/explore"><ArrowLeft />Explore</Link></Button><Button variant="secondary" size="sm" onClick={share}><Share2 />Share this record</Button></div>
        <p className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[.15em] text-gold-light"><MapPin className="size-4" />{m.location}</p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl md:text-6xl">{m.name}</h1>
        <div className="mt-5 flex flex-wrap gap-2"><span className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground"><Sparkles className="size-3" />{m.highlight}</span><span className="rounded-full border border-primary-foreground/40 px-3 py-1 text-xs">Theme: {m.theme}</span></div>
      </div></div>
    </section>

    <section className="py-16"><div className="archive-container grid gap-12 lg:grid-cols-[1fr_20rem]">
      <div className="space-y-5">
        {/* Documentation blocks from the field report */}
        <div className="grid gap-5 md:grid-cols-2">
          {DOC_SECTIONS.map((s, i) => {
            const text = m.doc[s.key];
            const pending = text === PENDING;
            return <article key={s.key} className={`archive-card p-6 ${i === 0 ? "md:col-span-2" : ""}`}>
              <h2 className="font-display text-2xl text-primary">{s.title}</h2>
              <p className={`mt-3 leading-7 ${pending ? "placeholder-copy" : "text-foreground/85"}`}>{text}</p>
            </article>;
          })}
        </div>
        <article className="archive-card p-6">
          <h2 className="flex items-center gap-2 font-display text-2xl text-primary"><Eye className="size-5" />Field Visit Observations</h2>
          <ul className="mt-4 space-y-2">{m.observations.map((o) => <li key={o} className="flex gap-3 leading-7 text-foreground/85"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold" />{o}</li>)}</ul>
        </article>
      </div>
      <aside className="space-y-5"><div className="sticky top-24 space-y-5">
        <div className="border border-border bg-muted p-6">
          <p className="eyebrow">Field visit</p>
          <dl className="mt-5 space-y-4 text-sm">
            <div><dt className="flex items-center gap-1.5 font-bold text-primary"><MapPin className="size-4" />Location</dt><dd className="mt-1 text-muted-foreground">{m.location}</dd></div>
            {m.visits.map((v) => <div key={v.label}><dt className="flex items-center gap-1.5 font-bold text-primary"><CalendarDays className="size-4" />{v.label}</dt><dd className="mt-1 text-muted-foreground">{v.value}</dd></div>)}
            <div><dt className="font-bold text-primary">Documented</dt><dd className="mt-1 text-muted-foreground">{m.photos.length} photographs · field report</dd></div>
          </dl>
        </div>
        <div className="border border-gold/50 bg-card p-6">
          <p className="flex items-center gap-2 font-display text-xl text-primary"><ShieldCheck className="size-5" />Digital Heritage Record</p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">This page is part of the Ganpati Dharohar community documentation project and preserves selected photographs, observations and heritage information collected during field research.</p>
        </div>
      </div></aside>
    </div></section>

    <section className="border-t border-border bg-muted/40 py-16"><div className="archive-container">
      <h2 className="font-display text-4xl text-primary">Field Photographs</h2>
      {GALLERY_CATEGORIES.map((cat) => {
        const list = m.photos.map((p, i) => ({ p, i })).filter(({ p }) => p.category === cat);
        if (!list.length) return null;
        return <div key={cat} className="mt-8"><h3 className="eyebrow">{cat}</h3><div className="mt-3 grid grid-cols-2 gap-4 md:grid-cols-3">{list.map(({ p, i }) => <button key={p.src} onClick={() => setPhoto(i)} className="group overflow-hidden rounded-md text-left"><img src={p.src} alt={p.caption} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105" /><span className="mt-2 block text-xs text-muted-foreground">{p.caption} · {p.date}</span></button>)}</div></div>;
      })}
      <div className="mt-12 flex justify-end"><Button asChild variant="outline" size="lg"><Link to="/mandals/$mandalId" params={{ mandalId: next.id }}>Next mandal: {next.name.split(" ").slice(0, 3).join(" ")}<ArrowRight /></Link></Button></div>
    </div></section>
    {photo !== null && <Lightbox items={m.photos.map((p) => ({ ...p, mandal: m.name }))} index={photo} onChange={setPhoto} onClose={() => setPhoto(null)} />}
  </>;
}
