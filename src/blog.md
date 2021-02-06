---
title: 'Blog'
layout: 'layouts/feed.njk'
pagination: 
  data: collections.blog
  size: 6
  filter: 
    -math
permalink: '/blog/{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
eleventyNavigation:
  key: blog
  title: 📓 blog
---
A notebook of sorts. Let's put a pin in everything. 