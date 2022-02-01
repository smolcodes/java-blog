---
title: Setting up Hyvor with 11ty
description: Hyvor is a simple to use elegant commenting account
imageURL: https://cdn.hyvor.com/uploads/talk/cover.png
imageAlt: hyvor banner
date: 2021-01-19
tags:
  ['tutorial']
---

[Hyvor](https://talk.hyvor.com/) is a free commenting system for the web. It's easy to set up and has a stunning UI.

## What you need

* 11ty (this is after all an 11ty tutorial)
* A [Hyvor](https://talk.hyvor.com/) account
* Your website

After going on Hyvor you will see a dashboard.

![Hyvor Dashboard](https://betalist.imgix.net/attachment/105196/image/cb5f2d60b90ad5bf9e1ab4f02be93f46.png?ixlib=rb-4.0.0&h=300&fit=clip&auto=format&dpr=2&s=84ca51bc5611c4d0147320aaf5cc2ccf)

In general you will be given options to enter a web site name and website domain. If you don't own a domain, that's ok! My website name is _Personal Blog_ and my web site domain is _smolnotes.netlify.app_.

Now go to your post template (it is generally in _includes/layouts and is listed as post.html, post.njk or some other format) and add this code where you want the comments to go:

<div class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500">
  <span class="text-xl inline-block mr-5 align-middle">
  🔔
  </span>
  <span class="inline-block align-middle mr-8">
    <b class="capitalize">CAREFULLY READ VERY IMPORTANT</b> 
  </span>
</div>

Make sure you replace `REPLACE WITH YOUR WEBSITE ID` with your website id. This can be found in the general tab of the Hyvor dashboard. Make sure that the website code 
corresponds with the website url.

```html

<div id="hyvor-talk-view"></div>
<script type="text/javascript">
    var HYVOR_TALK_WEBSITE = REPLACE WITH YOUR WEBSITE ID; // DO NOT CHANGE THIS
    var HYVOR_TALK_CONFIG = {
        url:  '{% raw %}{{ post.url | url }} {% endraw %}',
        id: '{% raw %}{{page.id}}{% endraw %}'
    };
</script>
<script async type="text/javascript" src="//talk.hyvor.com/web-api/embed"></script>

```

And there you have it! Let me know if you have any questions or suggestions :).
_______

I can now cross adding [commenting system](posts/2020-12-30-year-recap/) to my blog off my todo list.
All images are taken from Hyvor.