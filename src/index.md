---
title: 'Good Morning'
layout: 'layouts/feed.html'
pagination: 
  data: collections.blog
  size: 3
permalink: '{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
eleventyNavigation:
  key: Home
  order: 1
---
A notebook of sorts. Let's put a pin in everything. 