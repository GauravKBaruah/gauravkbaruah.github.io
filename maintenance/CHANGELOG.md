# Website refresh — 7 October 2026

## Content and design

Added Join Us, clarified the funding status, and summarised the lab's expectations for respectful debate, professional conduct and reproducible research. Rebuilt the home, research overview, publications and blog layouts; refreshed navigation, colours, spacing, mobile layout and dark mode. The six research themes, eight member profiles and original IISc blog body remain. The faculty biography now says Assistant Professor rather than Incoming Assistant Professor.

Removed 69 files listed in removed-files.txt. These are template posts, unused template pages/data/media, unreferenced image assets, example announcements, README screenshots and template-only Docker-publishing/CV workflows. No byte-identical files were found; cleanup concerns unused content and a duplicate bibliography record, not duplicate binary files.

## Bibliography

20 distinct DOI records: 16 journal articles and 4 preprints. Removed the duplicate `baruah_transitions_2023-1` record; retained `baruah_transitions_2023`. Citation keys used by research pages remain stable, including keys containing earlier years.

Updated `patnaik_predicting_2024` to the journal version: Patnaik & Baruah (2025), Theoretical Ecology 18, article 10, DOI 10.1007/s12080-024-00600-9. Added its linked code repository.
Source: https://link.springer.com/article/10.1007/s12080-024-00600-9

Completed `singh_plant_nodate`: 2024, Journal of Animal Ecology 93(11), 1758–1770.
Source: https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/1365-2656.14189

The remaining preprint statuses were retained from the supplied bibliography. Google Scholar returned a rate-limit error, so completeness against Scholar could not be verified. No speculative papers or publication updates were added. Local Zotero paths and redundant export-only metadata were removed from BibTeX.

## Fellowship links

- ANRF N-PDF: https://anrfonline.in/ANRF/npdf?HomePage=New
- IISc fellowship information (Raman and IoE): https://eecs.iisc.ac.in/post-docs/

No deadlines, awards or guaranteed funding are promised. The page asks candidates to check current calls and discuss research fit.

## Verification

- Valid YAML/front matter, unique DOI and citation keys, and retained local research images.
- Sass compiled with Dart Sass; Prettier applied.
- Browser preview uses LiquidJS, compiled site Sass, lab.css and source templates, with emulated Jekyll bibliography rendering.
- Full Jekyll production build was not possible because Ruby/Docker are unavailable. GitHub Actions remains the final build/deployment check.
- Existing `url`, empty `baseurl` and deployment workflow preserved. Removed the obsolete JSON resume loading configuration so the removed demo CV is not loaded at build time.

## Hydejack migration — 8 October 2026

- Replaced al-folio layouts, Sass, JavaScript and plugins with the actual Hydejack 9.2.1 gem (free edition).
- Styled Hydejack's sidebar in deep green and retained its mobile drawer and theme controls.
- Enlarged the uncropped original homepage image to the full content width, with natural image height.
- Homepage heading now reads “Our research areas”; removed “Welcome to the lab”; affiliation label is “IISc”.
- Retained Join Us, lab culture and integrity text, the structured publications, people biographies, research pages and the single IISc blog post at its existing URL.
- Updated Docker and GitHub Actions for the new theme. Removed the old PurgeCSS step because it could strip Hydejack's dynamic styles.
- Publication search loads normally on each page; Hydejack's optional push-state navigation is disabled to keep normal page loading and search initialization straightforward.
