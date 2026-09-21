# Ganpati Dharohar implementation plan

## Goal
Build a complete, responsive digital cultural archive for the college CEP. The site will clearly separate verified project material from placeholders and remain simple to explain and update.

## Pages and navigation
- Add a shared desktop/mobile header and footer across all pages.
- Build `/` with the cultural introduction, preservation themes, featured placeholder mandals, project method, and honest empty impact metrics.
- Build `/explore` with live text search, location filters, responsive cards, and a useful empty state.
- Build reusable `/mandals/$mandalId` detail pages from shared data, including all requested heritage sections, gallery, and explicit field-work placeholders.
- Build `/gallery` with category filters and an accessible image preview.
- Build `/survey` with the listed question overview and a clearly disabled/configuration-pending Google Form action until a real URL is supplied.
- Build `/survey-results` as a polished no-data state backed by a replaceable results structure; charts appear only after real values are added.
- Build `/preservation` with the preservation themes and Document → Digitize → Share → Create Awareness → Preserve process.
- Build `/about` with objective, methodology, field-work placeholders, and team placeholders.

## Design and content system
- Establish a warm cream, deep maroon, muted saffron, charcoal, and restrained gold token system.
- Use an editorial archive direction with Indian-inspired line details, large imagery, clear typography, thin borders, soft shadows, restrained motion, and strong focus states.
- Use bundled/generated cultural artwork only as visibly labelled illustrative placeholders, never as claimed field photography.
- Keep mandals, gallery items, survey configuration, and results in typed shared data files so project data can be replaced without restructuring pages.
- Organize image assets under clear mandal, gallery, tradition, and decoration folders.

## Functional behavior
- Make all navigation, desktop/mobile menus, active states, search, location filters, gallery filters, detail links, and lightbox controls work.
- Keep the unsupplied survey URL honest and non-deceptive while making the configuration point obvious in project documentation.
- Include semantic page structure, alt text, keyboard operation, visible focus styles, lazy-loaded gallery imagery, and reduced-motion support.

## Documentation
- Add student-friendly setup/run instructions.
- Explain each page, the shared data model, how to add mandals and photographs, how to add the Google Form link and real survey results, and how a lightweight database could be added later if needed.
- Include testing and final-completion checklists.

## Validation
- Verify page metadata and every navigation target.
- Test search, explore filters, gallery filters, image preview, mobile menu, detail pages, and the pending survey action.
- Check key layouts at 1440, 1024, 768, and 390 pixels, plus browser console/runtime errors.
- Confirm no fabricated field visits, histories, names, dates, photos, survey counts, or percentages appear anywhere.

## Technical notes
- Use the existing React/TanStack Start and Tailwind setup rather than introducing a second framework.
- Keep this first version frontend-only; no database is necessary until real persistent project data is supplied.
- Use reusable components and small data modules, with no unnecessary dependencies.
