---
title: 'Media Archive'
layout: 'layouts/bookfeed.njk'
pagination:
  data: collections
  size: 1
  alias: genre
  filter: ['all', 'nav', 'blog', 'work', 'featuredWork', 'people', 'rss', 'media']
permalink: '/genre/{{ genre | slug }}/'
---