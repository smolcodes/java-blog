---
title: 'Java Notes'
metaDesc: 'java notes'
layout: 'layouts/javafeed.njk'
pagination: 
  data: collections.javanotes
  size: 6
permalink: '/javanotes/{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---

Notes on Codegym and Other Courses