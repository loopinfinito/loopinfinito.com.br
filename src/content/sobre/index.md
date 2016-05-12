---
title: Sobre
layout: base.html
---

{% from 'src/templates/partials/author.html' import authorcard %}

adasdas dasdas dasdasdasdasd dasdasd asdsadas dasdasd asdasdasdasd.

{% for name, author in authors %}
  {{ authorcard(author) }}
{% endfor %}
