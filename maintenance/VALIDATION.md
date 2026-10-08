# Hydejack validation — 8 October 2026

- Actual production build: `JEKYLL_ENV=production bundle exec jekyll build --trace`, Jekyll 4.4.1, Hydejack 9.2.1, Ruby 3.2.3. Successful with no build conflicts. Deployment uses Ruby 3.3.
- Desktop browser: Home, Research, People, Publications, Join Us, Teaching, Blog, the retained blog post and research detail pages render without horizontal overflow, broken images or JavaScript errors.
- Mobile browser: Home, Research, People, Publications and Join Us fit a 390px viewport. Hydejack's drawer opens and its Join Us link navigates successfully.
- Publication search: a year search finds the five 2025 records; an unmatched query displays the no-results message.
- Dark mode: toggle switches the actual Hydejack body state; custom colours checked in the browser.
- Local generated HTML links and asset paths checked: no missing targets.
- Original homepage image displays uncropped at 896 × 672px in the 1440px desktop preview; the previous concept used a 280px-high image area.
- Required homepage copy changes confirmed. One blog post remains. Original research URLs and `/blog/2026/plotly/` retained.
- Repository update helper validates package hashes and target versions, backs up changed files and does not commit or push.

The downloadable preview image is a screenshot of the actual generated Jekyll site. This package has not been pushed to GitHub or published. Docker is unavailable in the editing environment; the real Jekyll build was run directly instead.
