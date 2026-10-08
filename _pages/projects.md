---
layout: page
title: Research
permalink: /projects/
description: Linking individual variation, species interactions and the resilience of living systems.
nav: true
nav_order: 1
---

We develop theory and test its predictions using empirical data, microcosm experiments and fieldwork. Six connected themes guide our questions.

<div class="research-grid">
{% assign sorted_projects = site.projects | sort: 'importance' %}
{% for project in sorted_projects %}
  <a class="research-card" href="{{ project.url | relative_url }}">
    <img src="{{ project.img | relative_url }}" alt="" loading="lazy" width="600" height="400">
    <div class="research-card-body">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <span class="tile-link">Read more <span aria-hidden="true">→</span></span>
    </div>
  </a>
{% endfor %}
</div>
