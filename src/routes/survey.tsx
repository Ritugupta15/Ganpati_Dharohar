import { createFileRoute } from "@tanstack/react-router";
import { ClipboardList, ExternalLink } from "lucide-react";
import { PageIntro } from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import { surveyConfig } from "@/data/heritage";

export const Route = createFileRoute("/survey")({ head: () => ({ meta: [
  { title: "Community Survey — Ganpati Dharohar" }, { name: "description", content: "Take part in the Ganpati Dharohar community awareness survey about Mumbai's Ganpati heritage." },
  { property: "og:title", content: "Community Survey — Ganpati Dharohar" }, { property: "og:description", content: "Share your views on preserving Mumbai's Ganpati heritage." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: SurveyPage });

function SurveyPage() {
  const url = surveyConfig.formUrl;
  return <><PageIntro eyebrow="Part of our CEP method" title="Community Awareness Survey" description="The survey helps us understand how people experience Ganpati celebrations and what they feel should be preserved." />
    <section className="py-16"><div className="archive-container grid gap-8 lg:grid-cols-2">
      <div className="archive-card p-7 md:p-10">
        <ClipboardList className="size-8 text-accent-foreground" />
        <h2 className="mt-6 font-display text-3xl text-primary">Purpose of the survey</h2>
        <p className="mt-4 leading-7 text-muted-foreground">To learn about public awareness of Mumbai's Ganpati heritage, participation in mandal celebrations, opinions on what should be preserved, support for eco-friendly celebrations and interest in a digital heritage archive.</p>
        <p className="mt-4 leading-7 text-muted-foreground">It takes only a few minutes. Responses are used only for this college Community Engagement Project.</p>
      </div>
      <div className="flex flex-col justify-center border border-dashed border-border bg-muted p-7 text-center md:p-10">
        <h2 className="font-display text-3xl text-primary">Take the survey</h2>
        {url
          ? <Button asChild size="lg" className="mx-auto mt-6"><a href={url} target="_blank" rel="noopener noreferrer">Open Google Form <ExternalLink /></a></Button>
          : <><Button size="lg" className="mx-auto mt-6" disabled>Open Google Form</Button><p className="placeholder-copy mt-4">[GOOGLE FORM LINK WILL BE ADDED HERE]</p></>}
      </div>
    </div></section></>;
}
