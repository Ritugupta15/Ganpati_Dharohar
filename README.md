# Ganpati Dharohar

**Ganpati Dharohar – Digital Preservation of Mumbai’s Ganpati Heritage** is a responsive college Community Engagement Project. It is designed as a small digital cultural archive rather than a festival promotion website.

All current mandal names, field-work values, team details and survey values are clearly marked placeholders. The generated artwork is illustrative and is not presented as project photography.

## Run the project

Requirements: Node.js 20 or newer and Bun (recommended).

```bash
bun install
bun run dev
```

Open `http://localhost:3000` when running locally. Useful checks are `bun run lint` and `bun run build`.

## Project structure

```text
src/
├── assets/images/
│   ├── mandals/       # Mandal and main archive photographs
│   ├── gallery/       # Gallery and eco-friendly photographs
│   ├── traditions/    # Craft and tradition photographs
│   └── decorations/   # Decoration photographs
├── components/
│   ├── site/          # Shared header, footer, cards and headings
│   └── ui/            # Reusable controls
├── data/
│   ├── heritage.ts    # Mandals, gallery, survey link and results
│   └── site.ts        # Navigation and process steps
├── routes/
│   ├── index.tsx                # Home
│   ├── explore.tsx              # Search and location filters
│   ├── mandals.$mandalId.tsx    # Reusable mandal detail page
│   ├── gallery.tsx              # Filterable image archive and preview
│   ├── survey.tsx               # Community survey
│   ├── survey-results.tsx       # Data-ready findings page
│   ├── preservation.tsx         # Preservation education
│   └── about.tsx                # Objective, method, field work and team
└── styles.css          # Design tokens and shared visual utilities
```

## How each page works

- **Home:** explains the project, preservation themes, selected archive entries, methodology and honest empty impact values.
- **Explore:** searches mandal name, location and tradition as the user types. Location buttons filter without reloading.
- **Mandal Details:** reads one reusable record from `src/data/heritage.ts`. Unknown IDs show a helpful not-found page.
- **Gallery:** filters images by category and opens a keyboard-accessible preview.
- **Survey:** lists the planned research questions. Its button remains disabled until a real Google Form URL is added.
- **Survey Results:** shows an explicit no-data state until verified results are supplied.
- **Preservation:** describes the documentation and awareness cycle.
- **About:** explains the project, method and provides honest field-work and team placeholders.

## Add a mandal

1. Open `src/data/heritage.ts`.
2. Copy one object inside the `mandals` array.
3. Give it a unique lowercase `id`, such as `my-mandal-name`.
4. Replace every bracketed value only with verified project information.
5. Import its main photograph and assign that import to `image`.
6. Add descriptive `imageAlt` text that describes what is visible.

The Explore card and `/mandals/my-mandal-name` detail page are created from that same record.

## Add photographs

1. Rename files descriptively, for example `mandal-name-entrance.jpg`.
2. Put each file in the matching folder under `src/assets/images/`.
3. Compress large photographs before adding them; WebP or optimized JPEG is suitable.
4. Import the image at the top of `src/data/heritage.ts`.
5. Use it in a mandal record or add a gallery item with a verified caption, category, mandal and optional date.
6. Remove the “illustrative placeholder” wording only when every displayed image in that area is a real project photograph.

## Add the Google Form

In `src/data/heritage.ts`, replace the empty `surveyConfig.formUrl` value with the real published Google Form URL. The **Take the Survey** button will then open it in a new tab.

## Add survey results

Replace `surveyResults = null` in `src/data/heritage.ts` with verified values:

```ts
{
  totalResponses: 0,
  awareness: 0,
  preservationSupport: 0,
  ecoFriendlySupport: 0,
  websiteInterest: 0,
}
```

Replace the zeros only with calculated results from the real response export. Keep the value `null` until results are verified.

## Optional backend/database later

No backend is required for this first version because all content is curated project material and the survey is hosted in Google Forms. If persistent administration is later required, a small database can store the same mandal and gallery fields already defined in `heritage.ts`. Add authentication before allowing edits, validate submitted data on the server, and keep uploaded image files separate from database records. This can be done without redesigning the pages.

## Testing checklist

- [ ] Every header and footer link opens the correct page.
- [ ] Every Explore card opens its matching detail page.
- [ ] Search matches mandal name, location and traditions.
- [ ] Every location filter returns the expected entries.
- [ ] The search empty state appears for an unmatched term.
- [ ] Every Gallery filter works and image previews open and close.
- [ ] The Survey button is disabled while the link is empty, then opens the supplied form.
- [ ] No survey charts or percentages appear while results are `null`.
- [ ] Layout is checked at 1440, 1024, 768 and 390 pixels.
- [ ] Navigation can be used with a keyboard and focus remains visible.
- [ ] Images have useful alt text and gallery images load lazily.
- [ ] Chrome/Edge and one additional modern browser have been checked.

## Completion checklist

- [x] All required pages and descriptive URLs exist.
- [x] Shared navigation and footer are consistent.
- [x] Explore search and filters work without reloads.
- [x] Mandal details use a reusable data structure.
- [x] Gallery filtering and preview work.
- [x] Survey and results use honest pending states.
- [x] Responsive cultural archive design is applied.
- [x] No project facts, field work or survey values are fabricated.
- [ ] Add verified mandal research and field photographs.
- [ ] Add the real Google Form URL.
- [ ] Add verified survey results and team details.
