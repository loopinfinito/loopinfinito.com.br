---
title: Projetos
layout: base.html
priority: 0.7
changefreq: monthly
---

{% from 'src/templates/partials/project.html' import projectcard %}

dsadasdasdasdas.

{% for project in projects %}
  {{ projectcard(project) }}
{% endfor %}
