---
title: 'Media'
metaDesc: 'reading things'
layout: 'layouts/bookfeed.njk'
imageURL: /images/bg/reading.png
pagination: 
  data: collections.books
  size: 6
permalink: '/books/{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
eleventyNavigation:
  key: media
  title: 📚 Media
---
<span class="bg-purple-700 md:text-2xl text-xl md:p-2 p-1">Superfluous oppinions on media</span>
