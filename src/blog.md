---
title: 'Blog'
layout: 'layouts/feed.njk'
pagination: 
  data: collections.blog
  size: 6
permalink: '/blog/{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
eleventyNavigation:
  key: blog
  title: 📓 blog
  order: 1
---

<span class="my-10 bg-purple-700 text-2xl p-4">A notebook of sorts. Let's put a pin in everything.</span>