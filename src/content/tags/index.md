---
title: Tags
layout: base.html
---

{% if allTags %}
  <ul>
  {% for label, tag in allTags|dictsort %}
    <li><a href="/tags/{{ tag.urlSafe }}/">{{ tag.urlSafe }}</a></li>
  {% endfor %}
  </ul>
{% endif %}
