---
title: 'Blog'
layout: 'layouts/feed.njk'
imageURL: /images/bg/coffee.png
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
<div class="mt-8 bg-purple-700 p-4 inline-block rounded-3xl">
A Notebooks of Sorts.
 </div>