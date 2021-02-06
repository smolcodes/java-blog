---
title: '📈 Math Notes'
layout: 'layouts/mathfeed.njk'
pagination: 
  data: collections.math
  size: 7
permalink: '/math/{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
eleventyNavigation:
  key: math
  title: 📈 Math
---
