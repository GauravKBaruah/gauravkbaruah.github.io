# Eco-Evo Dynamical Resilience Lab

Jekyll website for the lab at the Centre for Ecological Sciences, IISc.
Live address: https://gauravkbaruah.github.io/

## Theme and content

This site uses **Hydejack 9.2.1 (free edition)** through the `jekyll-theme-hydejack` gem. Hydejack provides the base layout, sidebar drawer, page and post templates, theme assets and dark-mode control. The lab's styles are in `assets/css/lab-hydejack.css`. No PRO purchase is required.

- Home: `_pages/about.md`; original image: `assets/img/hpage.png`.
- Research: `_pages/projects.md` and `_projects/`.
- People: `_pages/profiles.md` and the member biography Markdown files.
- Join Us: `_pages/join-us.md`.
- Publications: `_bibliography/papers.bib`, rendered with Jekyll Scholar.
- Blog: `_posts/`; the existing IISc post URL is retained.
- Navigation, contact details and colours: `_config.yml`.

The custom homepage uses Hydejack's `base` layout. `profiles` and `research` extend its `page` layout. `bib` formats the bibliography. Other templates and scripts come from the gem, avoiding an extra vendored copy of the theme.

## Preview locally

With Docker:

```bash
docker compose up --build
```

Open http://localhost:8080. Alternatively, with Ruby 3.3 and Bundler installed:

```bash
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000.

## Publish

Commit source changes to `main` or `master` and push to the existing repository. The **Deploy site** GitHub Actions workflow builds Jekyll and writes the generated site to `gh-pages`. In Settings → Pages, use **Deploy from a branch → gh-pages → / (root)**. Do not edit the generated branch.

## Attribution

Hydejack is by Florian Klampfer and distributed under GPL-3.0. Its attribution remains in the footer. The theme gem includes its licence and third-party notices. The prior al-folio licence is retained for inherited custom code. See `maintenance/CHANGELOG.md` for the migration summary.
