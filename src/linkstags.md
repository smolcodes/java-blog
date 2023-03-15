---
title: 'Links Archive'
layout: 'layouts/linkfeed.njk'
pagination:
  data: collections
  size: 1
  alias: tag
  filter: ['all', 'nav', 'blog', 'work', 'featuredWork', 'people', 'rss', 'media']
permalink: '/links/tag/{{ tag | slug }}/'
---