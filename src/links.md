---
title: 'Bookmark'
metaDesc: 'links to stuff'
layout: 'layouts/linkfeed.njk'
pagination: 
  data: collections.links
  size: 20
permalink: '/links/{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
eleventyNavigation:
  key: links
  title: Bookmarks
  order: 2
---