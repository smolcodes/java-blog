---
title: 'Links Archive'
layout: 'layouts/linkfeed.njk'
pagination:
  data: collections.links
  size: 12
  filter: ['nav', 'blog', 'work', 'featuredWork', 'people', 'rss', 'media', 'posts']
permalink: '/links/tag{% if pagination.pageNumber > 0 %}/{{ tag | slug }}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---