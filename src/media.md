---
title: 'Media'
metaDesc: 'reading things'
layout: 'layouts/bookfeed.njk'
pagination: 
  data: collections.books
  size: 6
permalink: '/books/{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
eleventyNavigation:
  key: Media
  title: 📚 Media
---
<span class="bg-purple-700 md:text-2xl text-xl md:p-2 p-1">Superfluous oppinions on media</span>
