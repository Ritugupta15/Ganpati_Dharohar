import { ExternalLink, Users, CheckCircle2, Sparkles, ClipboardCheck } from "lucide-react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
} from "recharts";
import { Button } from "@/components/ui/button";
import { surveyConfig } from "@/data/heritage";

type TooltipPayloadItem = {
  name?: string;
  value?: number;
  payload?: {
    label?: string;
    count?: number;
    percentageText?: string;
  };
};

function HeritageTooltip({
  active,
  payload,
  showPercentage = true,
}: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  showPercentage?: boolean;
}) {
  if (!active || !payload || !payload.length) return null;
  const item = payload[0]?.payload;
  if (!item) return null;
  return (
    <div className="rounded-md border border-gold/60 bg-card px-3.5 py-2.5 text-xs shadow-md">
      <p className="font-bold text-primary">{item.label}</p>
      <p className="mt-1 text-foreground">
        Responses: <strong>{item.count}</strong>
        {showPercentage && item.percentageText ? ` (${item.percentageText})` : ""}
      </p>
    </div>
  );
}

export function CommunitySurveyReport({
  isStandalonePage = false,
}: {
  isStandalonePage?: boolean;
}) {
  const HeadingTag = isStandalonePage ? "h2" : "h2";
  const maxInterestCount = 20;

  return (
    <section
      id="community-survey"
      className="border-t border-border bg-background py-20"
      aria-labelledby="survey-report-heading"
    >
      <div className="archive-container">
        {/* 1. Header & Introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">CEP Community Research · Verified Aggregation</p>
          <HeadingTag
            id="survey-report-heading"
            className="mt-3 font-display text-4xl leading-tight text-primary md:text-6xl"
          >
            {surveyConfig.title}
          </HeadingTag>
          <p className="mt-4 font-display text-xl text-terracotta md:text-2xl">
            {surveyConfig.subtitle}
          </p>
          <p className="mt-5 text-base leading-8 text-foreground/85">{surveyConfig.introduction}</p>
        </div>

        {/* 2. 30 Total Responses Summary Card */}
        <div className="mx-auto mt-10 max-w-sm">
          <div className="archive-card relative overflow-hidden border-gold/70 bg-gradient-to-br from-card via-card to-secondary/55 p-7 text-center">
            <div className="mx-auto flex size-11 items-center justify-center rounded-full border border-gold/60 bg-secondary text-primary">
              <Users className="size-5" aria-hidden="true" />
            </div>
            <strong className="mt-4 block font-display text-6xl leading-none text-primary md:text-7xl">
              {surveyConfig.totalResponses}
            </strong>
            <span className="mt-2 block text-xs font-extrabold uppercase tracking-[0.18em] text-terracotta">
              Total Responses
            </span>
            <p className="mt-2 text-xs text-muted-foreground">
              Verified community responses collected for the CEP archive
            </p>
          </div>
        </div>

        {/* 3. First Two-Column Chart Row: Age Group & Participation */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Chart 1: Age Group of Respondents (Donut Chart) */}
          <article className="archive-card flex flex-col justify-between p-6 md:p-8">
            <div>
              <div className="flex items-center justify-between gap-2 border-b border-border/80 pb-4">
                <div>
                  <span className="eyebrow">Demographics</span>
                  <h3 className="mt-1 font-display text-2xl text-primary md:text-3xl">
                    Age Group of Respondents
                  </h3>
                </div>
                <span className="rounded-full border border-gold/50 bg-secondary/70 px-3 py-1 text-xs font-bold text-primary">
                  n = {surveyConfig.totalResponses}
                </span>
              </div>

              <div className="mt-6 grid items-center gap-6 sm:grid-cols-[13.5rem_1fr]">
                <div className="relative mx-auto h-52 w-52">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={surveyConfig.ageGroups}
                        dataKey="count"
                        nameKey="label"
                        cx="50%"
                        cy="50%"
                        innerRadius={52}
                        outerRadius={82}
                        paddingAngle={3}
                        stroke="#FFFDF8"
                        strokeWidth={2}
                        isAnimationActive={false}
                      >
                        {surveyConfig.ageGroups.map((entry) => (
                          <Cell key={entry.label} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<HeritageTooltip showPercentage />} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
                    <strong className="font-display text-3xl leading-none text-primary">
                      {surveyConfig.totalResponses}
                    </strong>
                    <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      Total
                    </span>
                  </div>
                </div>

                <ul className="space-y-3" aria-label="Age group breakdown">
                  {surveyConfig.ageGroups.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center justify-between rounded-md border border-border/80 bg-muted/45 px-3.5 py-2.5 text-sm"
                    >
                      <span className="flex items-center gap-2.5 font-semibold text-foreground">
                        <span
                          className="size-3 shrink-0 rounded-full"
                          style={{ backgroundColor: item.color }}
                          aria-hidden="true"
                        />
                        {item.label}
                      </span>
                      <span className="font-bold text-primary">
                        {item.count}{" "}
                        <span className="text-xs font-normal text-muted-foreground">
                          ({item.percentageText})
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-5 border-t border-border/60 pt-3 text-xs text-muted-foreground">
              Total = 30 responses · Below 18 (50%) and 18–25 (36.67%) form the largest respondent
              groups.
            </p>
          </article>

          {/* Chart 2: Participation in Ganpati Celebrations (Bar Chart) */}
          <article className="archive-card flex flex-col justify-between p-6 md:p-8">
            <div>
              <div className="flex items-center justify-between gap-2 border-b border-border/80 pb-4">
                <div>
                  <span className="eyebrow">Celebration Involvement</span>
                  <h3 className="mt-1 font-display text-2xl text-primary md:text-3xl">
                    Participation in Ganpati Celebrations
                  </h3>
                </div>
                <span className="rounded-full border border-gold/50 bg-secondary/70 px-3 py-1 text-xs font-bold text-primary">
                  n = {surveyConfig.totalResponses}
                </span>
              </div>

              <div className="mt-6 h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={surveyConfig.participation}
                    margin={{ top: 24, right: 16, left: -12, bottom: 4 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E3D5BD" vertical={false} />
                    <XAxis
                      dataKey="label"
                      tick={{ fill: "#292522", fontSize: 12, fontWeight: 600 }}
                      axisLine={{ stroke: "#C9A24A" }}
                      tickLine={false}
                    />
                    <YAxis
                      allowDecimals={false}
                      domain={[0, 22]}
                      tick={{ fill: "#5A5049", fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      cursor={{ fill: "rgba(201, 162, 74, 0.12)" }}
                      content={<HeritageTooltip showPercentage />}
                    />
                    <Bar
                      dataKey="count"
                      radius={[6, 6, 0, 0]}
                      maxBarSize={54}
                      isAnimationActive={false}
                    >
                      {surveyConfig.participation.map((entry) => (
                        <Cell key={entry.label} fill={entry.color} />
                      ))}
                      <LabelList
                        dataKey="count"
                        position="top"
                        style={{ fill: "#7A263A", fontSize: 13, fontWeight: 800 }}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <ul
                className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4"
                aria-label="Participation summary"
              >
                {surveyConfig.participation.map((item) => (
                  <li
                    key={item.label}
                    className="rounded-md border border-border/80 bg-muted/45 px-3 py-2 text-center"
                  >
                    <span className="block text-xs font-semibold text-muted-foreground">
                      {item.label}
                    </span>
                    <strong className="mt-0.5 block font-display text-2xl text-primary">
                      {item.count}
                    </strong>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-5 border-t border-border/60 pt-3 text-xs text-muted-foreground">
              Total = 30 responses · 18 respondents participate in Ganpati celebrations every year.
            </p>
          </article>
        </div>

        {/* 4. Second Two-Column Chart Row: Public Ganpati Mandal Visits & Interests */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Chart 3: Visited a Public Ganpati Mandal in Mumbai (Donut Chart) */}
          <article className="archive-card flex flex-col justify-between p-6 md:p-8">
            <div>
              <div className="flex items-center justify-between gap-2 border-b border-border/80 pb-4">
                <div>
                  <span className="eyebrow">Public Pandal Visits</span>
                  <h3 className="mt-1 font-display text-2xl text-primary md:text-3xl">
                    Visited a Public Ganpati Mandal in Mumbai
                  </h3>
                </div>
                <span className="rounded-full border border-gold/50 bg-secondary/70 px-3 py-1 text-xs font-bold text-primary">
                  n = {surveyConfig.totalResponses}
                </span>
              </div>

              <div className="mt-8 grid items-center gap-6 sm:grid-cols-[13.5rem_1fr]">
                <div className="relative mx-auto h-52 w-52">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={surveyConfig.publicMandalVisits}
                        dataKey="count"
                        nameKey="label"
                        cx="50%"
                        cy="50%"
                        innerRadius={52}
                        outerRadius={82}
                        paddingAngle={4}
                        stroke="#FFFDF8"
                        strokeWidth={2}
                        isAnimationActive={false}
                      >
                        {surveyConfig.publicMandalVisits.map((entry) => (
                          <Cell key={entry.label} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<HeritageTooltip showPercentage />} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
                    <strong className="font-display text-3xl leading-none text-primary">
                      76.67%
                    </strong>
                    <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      Visited (23)
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {surveyConfig.publicMandalVisits.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-md border border-border/80 bg-muted/45 p-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2.5 text-sm font-bold text-foreground">
                          <span
                            className="size-3.5 shrink-0 rounded-full"
                            style={{ backgroundColor: item.color }}
                            aria-hidden="true"
                          />
                          {item.label}
                        </span>
                        <span className="font-display text-2xl font-bold text-primary">
                          {item.count} respondents
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                        <span>Share of 30 responses</span>
                        <strong className="text-terracotta">{item.percentageText}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-5 border-t border-border/60 pt-3 text-xs text-muted-foreground">
              Total = 30 responses · Yes: 23 (76.67%) · No: 7 (23.33%).
            </p>
          </article>

          {/* Chart 4: What Interests People Most About Ganpati Celebrations? (Horizontal Bar Chart) */}
          <article className="archive-card flex flex-col justify-between p-6 md:p-8">
            <div>
              <div className="flex items-center justify-between gap-2 border-b border-border/80 pb-4">
                <div>
                  <span className="eyebrow">Heritage Interests</span>
                  <h3 className="mt-1 font-display text-2xl text-primary md:text-3xl">
                    What Interests People Most About Ganpati Celebrations?
                  </h3>
                </div>
                <span className="rounded-full border border-gold/50 bg-secondary/70 px-3 py-1 text-xs font-bold text-primary">
                  Multi-select
                </span>
              </div>

              {/* Clean Horizontal Bar Chart with readable labels and exact counts */}
              <div
                className="mt-5 space-y-3"
                role="list"
                aria-label="Interests horizontal bar chart"
              >
                {surveyConfig.interests.map((item) => {
                  const widthPercent = Math.round((item.count / maxInterestCount) * 100);
                  return (
                    <div key={item.label} role="listitem" className="space-y-1">
                      <div className="flex items-baseline justify-between gap-2 text-xs sm:text-sm">
                        <span className="font-semibold text-foreground">{item.label}</span>
                        <strong className="font-bold text-primary">{item.count}</strong>
                      </div>
                      <div className="h-3.5 w-full overflow-hidden rounded-full border border-border/70 bg-muted/70">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${widthPercent}%`,
                            backgroundColor: item.color,
                          }}
                          aria-label={`${item.label}: ${item.count} selections`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="mt-5 rounded-md border border-gold/45 bg-secondary/45 px-3.5 py-2.5 text-xs font-medium text-foreground/85">
              <strong>Note:</strong> {surveyConfig.interestsNote}
            </p>
          </article>
        </div>

        {/* 5. Key Observations */}
        <div className="mt-12">
          <article className="archive-card p-7 md:p-10">
            <div className="max-w-2xl">
              <p className="eyebrow flex items-center gap-2">
                <ClipboardCheck className="size-4 text-terracotta" /> Verified Findings
              </p>
              <h3 className="mt-2 font-display text-3xl text-primary md:text-4xl">
                Key Observations
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Among the survey respondents, the following key observations were recorded from the
                30 responses:
              </p>
            </div>

            <ul className="mt-6 grid gap-3.5 md:grid-cols-2">
              {surveyConfig.keyObservations.map((observation) => (
                <li
                  key={observation}
                  className="flex items-start gap-3 rounded-md border border-border/85 bg-muted/45 px-4 py-3.5 text-sm leading-6 text-foreground"
                >
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{observation}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* 6. Why This Survey Matters & 7. Take the Community Survey Button */}
        <div className="mt-8">
          <article className="archive-card border-gold/60 bg-gradient-to-r from-card via-secondary/35 to-card p-7 md:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="eyebrow flex items-center gap-2">
                  <Sparkles className="size-4 text-terracotta" /> Project Relevance
                </p>
                <h3 className="mt-2 font-display text-3xl text-primary md:text-4xl">
                  Why This Survey Matters
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-8 text-foreground/90">
                  {surveyConfig.whyItMatters}
                </p>
              </div>

              <div className="flex flex-col items-start lg:items-end">
                <Button
                  asChild
                  size="lg"
                  className="h-12 bg-primary px-6 text-base font-bold text-primary-foreground shadow-sm hover:bg-primary/92"
                >
                  <a href={surveyConfig.formUrl} target="_blank" rel="noopener noreferrer">
                    Take the Community Survey →
                    <ExternalLink className="ml-1.5 size-4" />
                  </a>
                </Button>
                <span className="mt-2 text-xs text-muted-foreground">
                  Opens Google Form in a new tab
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
