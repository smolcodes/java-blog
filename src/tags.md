---
title: 'Tag Archive'
layout: 'layouts/feed.njk'
pagination:
  data: collections.blog
  size: 12
  filter: ['all', 'nav', 'blog', 'work', 'featuredWork', 'people', 'rss', 'media']
permalink: '/blog/tag{% if pagination.pageNumber > 0 %}/{{ tag | slug }}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---
