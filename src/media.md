---
title: 'Media'
metaDesc: 'reading things'
layout: 'layouts/bookfeed.njk'
imageURL: /images/bg/reading.png
pagination: 
  data: collections.books
  size: 12
permalink: '/books/{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
eleventyNavigation:
  key: media
  title: 📚 Media
---
Superfluous oppinions on media
