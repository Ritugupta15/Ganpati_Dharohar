import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { MandalCard, PageIntro } from "@/components/site/sections";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { mandals, type HeritageCategory } from "@/data/heritage";

export const Route = createFileRoute("/explore")({ head: () => ({ meta: [
  { title: "Explore Mumbai's Ganpati Heritage — Ganpati Dharohar" }, { name: "description", content: "Search and explore documented Ganpati mandals, places and traditions across Mumbai." },
  { property: "og:title", content: "Explore Mumbai's Ganpati Heritage" }, { property: "og:description", content: "Discover the places, stories and traditions that shape Mumbai's Ganeshotsav." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: ExplorePage });

const filters: Array<"All" | HeritageCategory> = ["All", "South Mumbai", "Central Mumbai", "Western Suburbs", "Other"];
function ExplorePage() {
 const [query,setQuery]=useState(""); const [filter,setFilter]=useState<(typeof filters)[number]>("All");
 const results=useMemo(()=>mandals.filter((m)=>{const text=`${m.name} ${m.location} ${m.traditions.join(" ")}`.toLowerCase(); return text.includes(query.toLowerCase())&&(filter==="All"||m.category===filter)}),[query,filter]);
 return <><PageIntro eyebrow="Browse the archive" title="Explore Mumbai's Ganpati Heritage" description="Discover the places, stories and traditions that shape Mumbai's Ganeshotsav." /><section className="py-14"><div className="archive-container"><div className="flex flex-col gap-5 border-b border-border pb-8"><label className="relative max-w-xl"><span className="sr-only">Search heritage entries</span><Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"/><Input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search mandal, location or tradition..." className="h-12 bg-card pl-12" /></label><div className="flex flex-wrap gap-2" aria-label="Filter by location">{filters.map((item)=><Button key={item} size="sm" variant={filter===item?"default":"outline"} onClick={()=>setFilter(item)}>{item}</Button>)}</div></div><p className="mt-8 text-sm text-muted-foreground">{results.length} {results.length===1?"entry":"entries"}</p>{results.length?<div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{results.map((m)=><MandalCard key={m.id} mandal={m}/>)}</div>:<div className="mt-8 border border-dashed border-border bg-muted p-12 text-center"><h2 className="font-display text-3xl text-primary">No heritage entries found.</h2><p className="mt-2 text-sm text-muted-foreground">Try another search term or location filter.</p></div>}</div></section></>;
}
