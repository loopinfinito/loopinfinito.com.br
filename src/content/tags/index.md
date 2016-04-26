---
title: Tags
layout: base.html
---

<ul>
{% for label, tag in allTags|dictsort %}
  <li><a href="/tags/{{ tag.urlSafe }}/">{{ tag.urlSafe }}</a></li>
{% endfor %}
</ul>
