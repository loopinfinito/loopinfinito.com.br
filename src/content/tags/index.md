---
title: Tags
layout: base.html
priority: 0.7
changefreq: monthly
---

{% if allTags %}
  <ul>
  {% for label, tag in allTags|dictsort %}
    <li><a href="/tags/{{ tag.urlSafe }}/">{{ tag.urlSafe }}</a></li>
  {% endfor %}
  </ul>
{% endif %}
