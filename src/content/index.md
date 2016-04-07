---
title: teste
---
{% if collections.posts %}
  <ul>
  {% for post in collections.posts %}
    <li>{{ post.title }}</li>
  {% endfor %}
  </ul>
{% else %}
  Nenhum post.
{% endif %}
