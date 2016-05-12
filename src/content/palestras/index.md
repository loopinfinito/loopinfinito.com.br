---
title: Palestras
layout: base.html
priority: 0.7
changefreq: monthly
---

{% from 'src/templates/partials/talk.html' import talkview %}


Lorem dasd asdasd sadsa dsakfsafa fdsfasd fasdf sdfkjdsfsdafsadf sfsdsd.

{% for talk in collections.talks %}
  {{ talkview(talk, authors) }}
{% else %}
  Nenhuma palestra.
{% endfor %}
