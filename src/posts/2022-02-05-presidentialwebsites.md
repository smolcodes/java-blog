---
title: "Presidential Websites"
description: "A look at Presidential Websites through the Ages"
date: 2023-02-05
toc: "true"
tags:
  ['presidents', 'tools', 'note apps']
---
I discovered [the most interesting](https://www.archives.gov/presidential-libraries/archived-websites) website a few weeks ago! An archive of Presidential websites. Here's some thoughts on each President's site:

## Bill Clinton

He's the OG when it comes to Presidential sites. His presidency also saw the most versions. His site looks like it could be a promotional for [Yes, Priminister](https://www.comedy.co.uk/tv/yes_prime_minister/). And surprisingly, in terms of accessibility it's [not bad](https://wave.webaim.org/report#/https://clintonwhitehouse4.archives.gov/).

Look at this little gem:

>  **President Clinton: The United States on Track to Pay Off the Debt by End of the Decade**
>
> Thursday, December 28, President Clinton will announce that The United States is on course to eliminate its public debt within the next decade. The Administration also announced that we are projected to pay down $237 billion in debt in 2001. Due in part to a strong economy and the President's commitment to fiscal discipline, the federal fiscal condition has improved for an unprecedented nine consecutive years.

✨*The optimism*✨.

The last time the US fully paid off its debt was in [1935](https://www.npr.org/sections/money/2011/04/15/135423586/when-the-u-s-paid-off-the-entire-national-debt-and-why-it-didnt-last#:~:text=When%20Jackson%20took%20office%2C%20the,money%20than%20it%20was%20spending.) under Andrew Jackson. Currently, the nation debt looms at [31.46 T](https://fiscaldata.treasury.gov/americas-finance-guide/national-debt/).

{% myImage "https://clintonwhitehouse4.archives.gov/media/soxbuddy2.jpg", "banner of the whitehouse with two cute dogs superimposed over it" %}

## Barack Obama

Similar to his Presidency, there's a lot to hate and there's a lot to love. His site, like Clinton's had a lot of firsts. And I think over all was an indicator of where the internet was heading. The World Wide Web was leaving the wild west and galloping towards corporatism. 

Obama's website had a whopping [105](https://wave.webaim.org/report#/https://obamawhitehouse.archives.gov/) contrast errors. That is when the text is so close to the color of the background that it is hard to discern. However, his site is also the [first to be responsive](https://obamawhitehouse.archives.gov/blog/2015/04/09/whitehousegov-evolving-you-mind). I remember this being such a bragging point. I myself made a point to indicate that *all my tumblr themes were responsive*. Now we're in an era of mobile first. Device agnosticism is just a given. Also it's ahead of its time in that it has a page dedicated to [accessibility](https://obamawhitehouse.archives.gov/accessibility). I remember screen readers were pretty bad way back in 2008 (to be fair I was also 16 and unwilling to learn them so...) so I will give his admin the benifit of the doubt. 

His site is image heavy and this is something all Presidential sites afterwards I think will maintain. I don't know. Call me old but I like how Clinton's site used images sparingly (I don't think this was a design choice btw, just a happy coincedence). 

## Donald Trump

This man has, by far, the best looking website. It is unique looking (this is a bit biased I know, I am a fan of sans fonts mixed with serif. I am also a fan of masonry images). Although the downside of all this photo heavy stuff is you have to constantly click around to learn anything

Look at this:

``` html
	<figure>
						<img
							loading="lazy"
							srcset="https://trumpwhitehouse.archives.gov/wp-content/themes/whitehouse/assets/img/archive/slotus@2x.jpg 2x, https://trumpwhitehouse.archives.gov/wp-content/themes/whitehouse/assets/img/archive/slotus.jpg 1x"
							src="https://trumpwhitehouse.archives.gov/wp-content/themes/whitehouse/assets/img/archive/slotus.jpg"
							alt="Karen Pence"
							height="356"
							width="296"
						>
						<figcaption>
							<strong class="administration__officer-name">Karen Pence</strong>
							<small>Second Lady of the United&nbsp;States</small>
						</figcaption>
					</figure>
```
This code is very readible. It uses appropriate tags and alt properly!

You might say I'm not holding other Presidents to the same standards (and you'd be right) but navigatng the Trump website with just a keyboard and Narrator was difficult. The images are nice for the eyes but are annoying when actually trying to get around the site. The popup menu is difficult to open and close. Some links were handled very well and some...pretty terribly tbh. The main problem with Trump's site is there are simply too many links. His web team chose appearance over functionality

## Joe Biden

His website looks so similar to Trump's. At first I thought this was a weird coincedence but then learned they both use [Wordpress](https://wptavern.com/biden-white-house-sticks-with-wordpress-for-website-relaunch).

Here's a run down of both their lighthouse score

| Category | Trump       |  Biden |
|------------|-----------|--------|
| Performance | 99 | 98 |
| Accessibility | 98 | 100 |
| Best Practices | 100 | 100 |
| SEO | 83 |100 |
| PWA | NA | NA |
| Performance | 99 | 98 |



[The Unnoticed Presidential Transition: Whither Whitehouse.gov?](https://firstmonday.org/ojs/index.php/fm/article/download/829/738?inline=1)

::: callout-blue
* [Primer Foton](http://primerfoton.cl/) Spanish blog about astronomy
* [LibreText Math](https://math.libretexts.org/Bookshelves)

### Personl Sites

* [Lazar Nikolov](https://nikolovlazar.com/)
* [Jim Raptis](https://www.jimraptis.com/)
* [Daniel Wirtz](https://danielwirtz.com/)
* [Laura Beatrice](https://laurabeatris.com/)

### Note taking Tools

* [Supernotes](https://supernotes.app/)
* [MemeAI](https://get.mem.ai/)
* [LogSeq](https://logseq.com/)
* [Noteplan](https://noteplan.co/)
* [Upnote](https://getupnote.com/)
* [Capacities](https://capacities.io/)
* [Postulate](https://postulate.us/)
* [Data Science Notebooks](https://datasciencenotebook.org/)
:::