---
title: "Terminally Online Trends Follower Makes an About Page"
description: "Personal Websites are just Tumblr 2.0. Anyway ramblings about following trends with this blog"
date: 2023-02-05
toc: "true"
tags:
  ['life']
---

[Chester](https://chester.how/) has a very nifty hobbies page. [Everyone](https://www.raymondcamden.com/now/) and their [mom](https://maggieappleton.com/now) has a [Now](https://nownownow.com/about) page. Some people have a [gears](https://paulstamatiou.com/stuff-i-use/). And I think, *I should definitely make a billion more pages!*. 

The thought of having so many pages convinced me to create the dreaded hamburger menu as a permanent staple that can be used not just on mobile.

Truly, I am a changed person.

Anyway I don't actually know what to put in an about page. So instead I've created one page that mashes a lot of trends together. This is just how the cookie crumbles.

In this pursuit. I poured over docs trying to understand this error

```
Deprecation warning: value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info. Arguments: [0] _isAMomentObject: true, _ isUTC: false, useUTC: false, _l: undefined, _i: Created, _f: undefined, _strict: undefined, _locale: [object Object] Error
```
I was trying to order my bookmarks and about page contents based on markdown page creation in json (my site is nothing but markdown files taped badly together)

```json
{
 "date":"Created"
}
```
I couldn't understand why my files were organized offline but looked different online. Turns out it's because json doesn't parse numbers like this. This set of instructions is actually supposed to be for front matter. But hey why not try it offline?

I've read the [11ty](https://www.11ty.dev/docs/dates/) article and [Raymond Camden's post](https://www.raymondcamden.com/2020/02/06/adding-a-last-edited-field-to-eleventy) and I'm still confused.

Maybe I will fix this later...probably not.