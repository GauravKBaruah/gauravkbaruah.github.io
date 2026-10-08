---
layout: page
permalink: /blog/
title: Blog
description: Notes on research, academic life and building a lab.
nav: true
nav_order: 6
---

<div class="lab-blog">
{% for post in site.posts %}
  <article class="blog-entry">
    <p class="eyebrow"><time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%d %B %Y' }}</time></p>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p>{{ post.description }}</p>
    <a class="text-link" href="{{ post.url | relative_url }}">Read the post <span aria-hidden="true">→</span></a>
  </article>
{% endfor %}
</div>
