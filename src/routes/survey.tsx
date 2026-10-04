import { createFileRoute } from "@tanstack/react-router";
import { CommunitySurveyReport } from "@/components/site/survey-report";

export const Route = createFileRoute("/survey")({
  head: () => ({
    meta: [
      { title: "Community Survey — Ganpati Dharohar" },
      {
        name: "description",
        content:
          "Understanding public awareness and interest in Mumbai’s Ganpati heritage and its digital preservation through our 30-response CEP community survey.",
      },
      { property: "og:title", content: "Community Survey — Ganpati Dharohar" },
      {
        property: "og:description",
        content:
          "Verified community awareness survey report and findings from the Ganpati Dharohar CEP project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SurveyPage,
});

function SurveyPage() {
  return <CommunitySurveyReport isStandalonePage />;
}
