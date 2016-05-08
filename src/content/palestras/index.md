---
title: Palestras
layout: base.html
priority: 0.7
changefreq: monthly
---

{% from 'src/templates/partials/talk.html' import talk as _talk %}


{% if collections.talks %}
  <ul>
  {% for talk in collections.talks %}
    <li>{{ _talk(talk.title) }}</li>
  {% endfor %}
  </ul>
{% else %}
  Nenhuma palestra.
{% endif %}
