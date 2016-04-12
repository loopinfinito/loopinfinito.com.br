---
title: teste
layout: base.html
---
{% if collections.posts %}
  <ul>
  {% for post in collections.posts %}
    <li><a href="{{ post.path }}">{{ post.title }}</a></li>
  {% endfor %}
  </ul>
{% else %}
  Nenhum post.
{% endif %}
