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
eleventyNavigation:
  key: javanotes
  title: 📝Java Notes
---
<span class="rounded-3xl bg-purple-700 md:text-2xl text-xl md:p-2 p-1">Notes on CodeGym and other courses.</span>