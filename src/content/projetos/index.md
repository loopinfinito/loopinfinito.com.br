---
title: Projetos
layout: base.html
---

{% from 'src/templates/partials/project.html' import projectcard %}

dsadasdasdasdas.

{% for project in projects %}
  {{ projectcard(project) }}
{% endfor %}
