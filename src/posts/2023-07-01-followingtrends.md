---
title: "Terminally Online Trends Follower Heavily Edits Home Page"
description: "Personal Websites are just Tumblr 2.0. Anyway ramblings about following trends with this blog"
date: 2023-07-01
toc: "true"
tags:
  ['life']
---

## Creating an About page

[Chester](https://chester.how/) has a very nifty hobbies page. [Everyone](https://www.raymondcamden.com/now/) and their [mom](https://maggieappleton.com/now) has a [Now](https://nownownow.com/about) page. Some people have a [gears](https://paulstamatiou.com/stuff-i-use/). And I think, *I should definitely make a billion more pages!*. 

The thought of having so many pages convinced me to create the dreaded hamburger menu as a permanent staple that can be used not just on mobile.

Truly, I am a changed person.

Anyway I drastically changed the index page to include a ton of trends I've been admiring in an attempt to be *personal*. It's got a currently reading, coffee, now etc etc.

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

::: callout-yellow
Solved! I followed this [excellent tutorial](https://www.alpower.com/tutorials/formatting-dates-in-eleventy/) by [Al Power](https://www.alpower.com/). The solution was to switch from MomementJS to Luxon.
:::

## The Enschittafication of All Social Media

My site is increasingly turning into an internet of sorts. My bookmarks page is bascically a collection of fun sites that are worth visiting. And with each passing month, I keep trying to make my personal site *better* at distracting me from the shitty internet. 

I quit using Facebook years ago when my close friends stopped showing up on my feed and everyone seemed to have a soapbox to stand on. Recently I tried to get back on Instagram (it is slightly better than FB) but I think I will abandon this too. 

Twitter was great for so long. Maybe this is a sign of being a product of my time but I met interesting people. It helped me overcome my anxiety of going to conferences. It was a place where a complete newb to web design could talk to an expert. It was filled with good comedians. My close friends IRL and from other parts of the internet were there.

Now it's a place pedalling fascism. To the best of my knowledge, I don't *thinnk* I follow fascists yet I'm served their tweets. 

The refresh is wonky and I think all my friends have left or will leave.

Some to Threads.

Threads, the brainchild of Mark Zuckerberg, is a crap take on Twitter. There's no ordered posts and the Zuck gets to decide what you see. It also tracks your data like crazy (but that doesn't really bother people). The only positive is they seem to be antifascist (in this day and age, it is apparently, a noble and brave stance).

The last good decent social media places are Tumblr, Reddit and Discord. They too will die soon, it's just a matter of time. And when they do, I'm not sure what I'll do. I mean I know I'll continue on. But, I don't know what new platforms are springing up (what are the youngins up to?) and I'm not sure I want to put in the effort to try them (when even the new will die). Will my friendship with everyone I met online through Tumblr and Twitter die? 

::: callout-blue
## Around the Web

1. Sites
* [Heat Map](https://heatmap.news/)
* [New Left Review](https://newleftreview.org/)

2. Articles
* [Who Goes Nazi](https://harpers.org/archive/1941/08/who-goes-nazi/)

3. Personal Site
* [Marissa Kawehi](https://sites.google.com/view/lovingmath/home)
* [Brian Ruiz](https://www.b-r.io/)
* [Jarek Ceborski](https://www.jarekceborski.com/)
* [Sankalp Sinha](https://sankalpsinha.com/)
:::