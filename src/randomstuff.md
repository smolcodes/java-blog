---
title: 'Random'
metaDesc: 'coffee, music, chess. what else?'
layout: 'layouts/randomfeed.njk'
imageURL: /images/assets/orcas.png
pagination: 
  data: collections.random
  size: 12
permalink: '/about/{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
eleventyNavigation:
  title: 🔀 About
---
<span class="rounded-3xl bg-purple-700 md:text-2xl text-xl md:p-2 p-1">Superfluous oppinions on media</span>