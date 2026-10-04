import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Camera,
  Eye,
  MapPin,
  Share2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/site/lightbox";
import { DOC_SECTIONS, GALLERY_CATEGORIES, mandals } from "@/data/heritage";

export const Route = createFileRoute("/mandals/$mandalId")({
  loader: ({ params }) => {
    const mandal = mandals.find((m) => m.id === params.mandalId);
    if (!mandal) throw notFound();
    return mandal;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.name} — Ganpati Dharohar`
          : "Heritage entry unavailable — Ganpati Dharohar",
      },
      {
        name: "description",
        content: loaderData?.summary ?? "This heritage archive entry is unavailable.",
      },
      { property: "og:title", content: loaderData?.name ?? "Heritage entry unavailable" },
      {
        property: "og:description",
        content: loaderData?.summary ?? "This heritage archive entry is unavailable.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MandalDetails,
  notFoundComponent: () => (
    <div className="archive-container py-24 text-center">
      <h1 className="font-display text-5xl text-primary">Heritage entry not found</h1>
      <Button asChild className="mt-6">
        <Link to="/explore">Return to Explore</Link>
      </Button>
    </div>
  ),
});

function MandalDetails() {
  const m = Route.useLoaderData();
  const [photo, setPhoto] = useState<number | null>(null);
  const idx = mandals.findIndex((x) => x.id === m.id);
  const next = mandals[(idx + 1) % mandals.length]!;
  const hero = m.idolPhoto ?? m.photos[0]!;

  // Only include sections that have verified field-visit documentation
  const verifiedSections = DOC_SECTIONS.filter((s) => {
    const value = m.doc[s.key];
    return Boolean(value && value.trim().length > 0);
  });

  const aboutSection = verifiedSections.find((s) => s.key === "about");
  const idolSection = verifiedSections.find((s) => s.key === "idol");
  const gridSections = verifiedSections.filter((s) => s.key !== "about" && s.key !== "idol");

  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: m.name, url });
      } catch {
        /* user cancelled */
      }
    } else {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard");
    }
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] overflow-hidden bg-primary">
        <img
          src={hero.src}
          alt={hero.alt || hero.caption}
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/65 to-primary/20" />
        <div className="archive-container relative flex min-h-[60vh] items-end pb-12 pt-24 text-primary-foreground">
          <div>
            <div className="flex flex-wrap gap-2">
              <Button asChild variant="secondary" size="sm">
                <Link to="/explore">
                  <ArrowLeft /> Back to Explore
                </Link>
              </Button>
              <Button variant="secondary" size="sm" onClick={share}>
                <Share2 /> Share this record
              </Button>
            </div>
            <p className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-gold-light">
              <MapPin className="size-4 shrink-0" />
              {m.location}
            </p>
            <h1 className="mt-3 max-w-4xl font-display text-4xl leading-tight md:text-6xl">
              {m.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-primary-foreground/85">
              {m.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1 text-xs font-bold text-secondary-foreground">
                <Sparkles className="size-3.5 text-terracotta" />
                {m.highlight}
              </span>
              <span className="rounded-full border border-gold-light/50 bg-primary/40 px-3.5 py-1 text-xs text-primary-foreground">
                Theme: {m.theme}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Verified Field Documentation ── */}
      <section className="py-16">
        <div className="archive-container grid gap-10 lg:grid-cols-[1fr_21rem]">
          <div className="space-y-6">
            {/* About the Mandal */}
            {aboutSection && (
              <article className="archive-card p-6 md:p-8">
                <p className="eyebrow">Verified Field Record</p>
                <h2 className="mt-2 font-display text-3xl text-primary">{aboutSection.title}</h2>
                <p className="mt-3 leading-8 text-foreground/90">{m.doc[aboutSection.key]}</p>
              </article>
            )}

            {/* Ganpati Idol Section with Real Field Photograph */}
            {idolSection && (
              <article className="archive-card overflow-hidden p-6 md:p-8">
                <div className="grid items-center gap-6 md:grid-cols-[1fr_16rem]">
                  <div>
                    <p className="eyebrow">Idol Documentation</p>
                    <h2 className="mt-2 font-display text-3xl text-primary">{idolSection.title}</h2>
                    <p className="mt-3 leading-8 text-foreground/90">{m.doc[idolSection.key]}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPhoto(0)}
                    className="group relative overflow-hidden rounded-md border border-gold/50 bg-muted text-left"
                    aria-label={`View full photograph: ${m.idolPhoto.caption}`}
                  >
                    <img
                      src={m.idolPhoto.src}
                      alt={m.idolPhoto.alt || m.idolPhoto.caption}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="block border-t border-border/80 bg-card px-3 py-2 text-xs font-semibold text-primary">
                      {m.idolPhoto.caption}
                    </span>
                  </button>
                </div>
              </article>
            )}

            {/* Remaining Verified Documentation Sections (automatically adjusted grid) */}
            {gridSections.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2">
                {gridSections.map((s, index) => {
                  const isLastOdd =
                    gridSections.length % 2 === 1 && index === gridSections.length - 1;
                  return (
                    <article
                      key={s.key}
                      className={`archive-card p-6 md:p-7 ${isLastOdd ? "md:col-span-2" : ""}`}
                    >
                      <h2 className="font-display text-2xl text-primary md:text-3xl">{s.title}</h2>
                      <p className="mt-3 leading-7 text-foreground/90">{m.doc[s.key]}</p>
                    </article>
                  );
                })}
              </div>
            )}

            {/* Field Visit Observations */}
            {m.observations.length > 0 && (
              <article className="archive-card p-6 md:p-8">
                <h2 className="flex items-center gap-2 font-display text-2xl text-primary md:text-3xl">
                  <Eye className="size-5 text-terracotta" />
                  Field Visit Observations
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {m.observations.map((o) => (
                    <li key={o} className="flex items-start gap-3 leading-7 text-foreground/90">
                      <span
                        className="mt-2.5 size-2 shrink-0 rounded-full bg-gold"
                        aria-hidden="true"
                      />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )}
          </div>

          {/* ── Sidebar: Field Documentation Metadata ── */}
          <aside className="space-y-5">
            <div className="sticky top-24 space-y-5">
              <div className="archive-card p-6">
                <p className="eyebrow">Field Documentation</p>
                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="flex items-center gap-1.5 font-bold text-primary">
                      <MapPin className="size-4 text-terracotta" />
                      Location
                    </dt>
                    <dd className="mt-1 leading-6 text-muted-foreground">{m.location}</dd>
                  </div>
                  {m.visits.map((v) => (
                    <div key={v.label}>
                      <dt className="flex items-center gap-1.5 font-bold text-primary">
                        <CalendarDays className="size-4 text-terracotta" />
                        {v.label}
                      </dt>
                      <dd className="mt-1 leading-6 text-muted-foreground">{v.value}</dd>
                    </div>
                  ))}
                  <div>
                    <dt className="flex items-center gap-1.5 font-bold text-primary">
                      <Camera className="size-4 text-terracotta" />
                      Documented Records
                    </dt>
                    <dd className="mt-1 text-muted-foreground">
                      {m.photos.length} field photographs · CEP field report
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-md border border-gold/60 bg-secondary/45 p-6">
                <p className="flex items-center gap-2 font-display text-xl font-bold text-primary">
                  <ShieldCheck className="size-5 text-terracotta" />
                  Digital Heritage Record
                </p>
                <p className="mt-3 text-sm leading-6 text-foreground/85">
                  This archive entry contains only verified field-visit observations and original
                  project photographs documented for the Ganpati Dharohar CEP project.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Field Photographs ── */}
      <section className="border-t border-border bg-muted/45 py-16">
        <div className="archive-container">
          <p className="eyebrow">Original Project Photography</p>
          <h2 className="mt-2 font-display text-4xl text-primary">Field Photographs</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Click any field photograph to inspect it in full resolution.
          </p>

          {GALLERY_CATEGORIES.map((cat) => {
            const list = m.photos.map((p, i) => ({ p, i })).filter(({ p }) => p.category === cat);
            if (!list.length) return null;
            return (
              <div key={cat} className="mt-8">
                <h3 className="eyebrow">{cat}</h3>
                <div className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map(({ p, i }) => (
                    <button
                      key={p.src}
                      type="button"
                      onClick={() => setPhoto(i)}
                      className="archive-card group overflow-hidden text-left"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-muted">
                        <img
                          src={p.src}
                          alt={p.alt || p.caption}
                          loading="lazy"
                          className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="p-4">
                        <strong className="block font-display text-lg text-primary">
                          {p.caption}
                        </strong>
                        <span className="mt-1 block text-xs text-muted-foreground">
                          {p.category} · {p.date}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="mt-12 flex justify-end">
            <Button asChild variant="outline" size="lg" className="border-gold/60">
              <Link to="/mandals/$mandalId" params={{ mandalId: next.id }}>
                Next mandal: {next.name.split(" ").slice(0, 3).join(" ")}
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {photo !== null && (
        <Lightbox
          items={m.photos.map((p) => ({ ...p, mandal: m.name }))}
          index={photo}
          onChange={setPhoto}
          onClose={() => setPhoto(null)}
        />
      )}
    </>
  );
}
