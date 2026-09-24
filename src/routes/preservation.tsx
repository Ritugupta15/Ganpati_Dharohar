import { createFileRoute } from "@tanstack/react-router";
import { Camera, ScrollText, Leaf, Users } from "lucide-react";
import { PageIntro, ProcessLine, SectionHeading } from "@/components/site/sections";
import { preservationSteps } from "@/data/site";

export const Route=createFileRoute("/preservation")({head:()=>({meta:[
 {title:"Preserving Ganpati Heritage — Ganpati Dharohar"},{name:"description",content:"Learn how documentation, digitization and community awareness can preserve Mumbai's Ganpati heritage."},{property:"og:title",content:"Preserving Ganpati Heritage"},{property:"og:description",content:"Document, digitize, share, create awareness and preserve."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}
]}),component:PreservationPage});
const themes=[
 {icon:Camera,title:"Digital Documentation",text:"Photographs, stories and verified information create a record that can be studied, shared and protected over time."},
 {icon:ScrollText,title:"Traditional Knowledge",text:"Recording practices and craftsmanship helps cultural knowledge remain visible to students and future communities."},
 {icon:Leaf,title:"Eco-Friendly Celebration",text:"Documenting responsible materials and practices can support informed, environmentally conscious celebrations."},
 {icon:Users,title:"Community Awareness",text:"Students, mandals and visitors can participate by sharing verified material and learning why careful preservation matters."},
];
function PreservationPage(){return <><PageIntro eyebrow="Why preservation matters" title="Preserving Ganpati Heritage" description="Heritage remains alive when communities carefully record it, understand it and pass it forward."/><section className="py-18"><div className="archive-container grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">{themes.map(({icon:Icon,title,text})=><article key={title} className="bg-card p-7 md:p-10"><Icon className="size-8 text-accent-foreground"/><h2 className="mt-8 font-display text-3xl text-primary">{title}</h2><p className="mt-4 max-w-xl leading-7 text-muted-foreground">{text}</p></article>)}</div></section><section className="border-y border-border bg-muted/45 py-20"><div className="archive-container"><SectionHeading eyebrow="Preservation cycle" title="A record becomes meaningful when it is shared" description="The project follows a simple community-centred process from documentation to long-term awareness."/><ProcessLine steps={preservationSteps}/></div></section></>}
