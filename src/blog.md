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
A Notebooks of Sorts.