---
title: 'Stream'
metaDesc: 'mind turn glum'
layout: 'layouts/streamfeed.njk'
pagination: 
  data: collections.stream
  size: 12
permalink: '/stream/{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
eleventyNavigation:
  key: stream
  title: Stream
---