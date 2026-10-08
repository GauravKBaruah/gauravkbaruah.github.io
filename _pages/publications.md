---
layout: page
permalink: /publications/
title: Publications
description: Research on ecological networks, evolutionary dynamics and resilience.
nav: true
nav_order: 3
---

<div class="publication-intro">
  <p>Journal articles and preprints, listed by year. Follow the paper links for publisher pages and access options.</p>
  <a class="lab-button secondary" href="https://scholar.google.com/citations?user=NUBQBAsAAAAJ&amp;hl=en">Google Scholar <span aria-hidden="true">↗</span></a>
</div>
<nav class="section-links" aria-label="Publication sections"><a href="#journal-articles">Journal articles</a><a href="#preprints">Preprints</a></nav>

{% include bib_search.liquid %}

<div class="publications">
  <section class="publication-section" aria-labelledby="journal-articles">
    <h2 id="journal-articles" class="publication-section-title">Journal articles</h2>
    {% bibliography --query @article %}
  </section>
  <section class="publication-section" aria-labelledby="preprints">
    <h2 id="preprints" class="publication-section-title">Preprints</h2>
    <p class="section-note">Preprints are manuscripts shared before journal publication and may change during review.</p>
    {% bibliography --query @misc %}
  </section>
</div>
