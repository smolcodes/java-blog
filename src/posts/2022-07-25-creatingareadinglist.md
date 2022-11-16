---
title: "The State of the Blog since March"
description: "Thoughts on the site thus far"
date: 2022-10-01
toc: "true"
tags:
  ['11ty', 'tailwindcss','blogging']
---

## A Change of Heart with Tailwind and an Accessibility Awakening

This has been long coming: I like Tailwind! It is so *fast*, it just works. This year has been a journey in delving into CSS and getting over a lot of my false preconceptions. I learned CSS [effects](https://www.stefanjudis.com/today-i-learned/text-transforms-affects-screen-readers-too/) [screen readers](https://benmyers.dev/blog/css-can-influence-screenreaders/). With a bit of pause, this makes sense. The framework of HTML being the layout, CSS being the look and feel and JS for interactions doesn't work in this modern age. We can use JS to change the appearance of a site and we can use css to [add content](https://www.levelaccess.com/csscontentproperty/) to a page. CSS being viewed in the light of accessiblity probably makes the accessiblity developer's life more interesting. My lighthouse score for this site is pretty high and I used to be proud of this achievement (started fro m 70 now around 90) but accessibility tools don't capture the gray zone stuff like icons and CSS. 

I used to get excited about making my site look different (I am not a fan of Web3 but man, Web3 sites look so sleak) so this week I added gradients, round corners and medium opacity backgrounds everywhere. I've also noticed an increase in the amount of time where I care about things that you can't see like refactoring my CSS. 

## The things you don't see

I cleaned up a lot of duplicate HTML, CSS and JS. Right around March I started working through [Javascript for Kids](https://www.kobo.com/us/en/ebook/javascript-for-kids-1). The end of the first chapter motivated me to tackle more of the JS part of my site. I finally updated 11ty and it was not as smooth as I'd thought it would be. Tailwind wasn't working properly so I had to update that separately; [Sharp](posts/updatingsharp/) was being funny so I duc taped a solution. I updated how 11ty rendered paths so lI wouldn't have the rare path conflicts. Typing this all out, it sounds rather uninteresting but it's quite calming of an activety.

## The things you do see

I added [footnotes](https://github.com/KittyGiraudel/eleventy-plugin-footnotes) and [table of contents](https://github.com/jdsteinbach/eleventy-plugin-toc). 

With the look and feel, I tried to give every page a more consistent appearance. I changed links, made the site overall more purple and slate. I also shrunk the font size. And most importantly I fixed how code appears in blog posts. Hopefully this page feels more unified.

I made a ton of responsive fixes. One that was bothering me was specifically how to blog resized on mobile. I don't know why I find breakpoints difficult but hopefully I'll get better at them.

## A major overhaul to the Media List

I waisted a good hour yesterday looking at book sites from [goodreads](https://www.goodreads.com/) to [storygraph](https://www.thestorygraph.com/). I then procceeded to look at the reading lists of some of my favorite bloggers:

* [Arcane Computer](https://www.arcana.computer/catalogs/books): I'm always impressed by developers who reads books that aren't all about productivity. I love the scrolling animation and his casual way of writing, as if he was speaking to you on the sidewalk. 
* [Bryan Lovin's Bookmarks](https://brianlovin.com/bookmarks): His list has the tech faves but every now and then he'll link to an article that'll really stick with me. The design is so clean and yet overdone. I'm a fan.
* [Mandy Brown Reading site](https://aworkinglibrary.com/writing/): I enjoy reading her takes on books, the prose sounds kind of like the summary of the jacket cover of books mixed with the looseness of online writing. The design of the book list emulates a classic blog and the content is diverse.
* [Simon Collison's Book tag](https://colly.com/articles/tag:books): I don't tend to read advise books because I always find them lacking for how thick they are but I enjoy reading Collison's short takeaways.

There's stuff I like and dislike about all these lists, and the inspirations I've taken from them are peppered throughout my own media list. After tweeking my code more, I've come to the conlusion that I don't think I'll ever use Storygraph or Goodreads.

### Reading to Socialize online

I don't use social media to create content. I don't write book reviews on Goodreads partially because I know people will look at it, whereas my tiny site here gets no traffic (thank God!). 

### Creating the media list: Being Particular and vague

In creating my media list (which has been a year in the making) I coded it with nary a thought to structure. The goal was to practice creating partials and lists in 11ty. My thinking was I'll refine it as I go. While this is fine, I'm not sure if it is good for giving myself experience in planning. TBH I probably lean too much towards the throwing sphagetti at the wall strategy. Anway, the list is now responsive and uses flexbox. I've been trying to use all different kinds of CSS with Tailwind. 

#### Rating

I don't use a numbered review system because I overthink it. What separates a 3 from a 3.5? What do those numbers actually mean to you or me? A number absent of context means nothing. But even with context it is a silly attempt to make the subjective seem more objective, to try to wring some consistency to an inconsistent system. To give an example: *The Fountainhead*. I did not like the book but nonetheless think it's good even though the prose and story are lacking. Why? Because Ayn Rand did get me to question my own beliefs in less than 300 pages-that's got to count for something. So does impact make this piece of work a 3? Maybe the paper thin characters should render it a 2? But the ability to explain an idea rapidly ought to give it a 4! Another factor to consider is the freshness of the author. *The Fountainhead* and *Atlas Shrugged* couldn't leave the same impression on me. I've already been introduced to Objectivism once so the second time by the same author just won't be as strong of a new idea because it is no longer new. 

#### Genre

I don't have a genre category mainly because I'm bad at sorting things. Both *Foundations of Rehabilitation Teaching With Persons Who Are Blind or Visually Impaired* and *The Quick and Easy Way to Effective Speaking* are non fiction however they're not the same category. I suppose one could be in education and the other life adive (if that is a category). Now the real reason is because I'm not great with 11ty and haven't found a way to do tagging outside of blog posts

#### Types of Media

I wondered whether I should keep this to just books but then wondered where would I put movies and music? I don't want to have so many lists floating around. Maybe I'll change my mind but for now, I'm happy with all these different kinds of media being in one place.

## A blog post or a Java post or a media post? That is the question

[Digital Gardens were all the rage a while back](https://joelhooks.com/digital-garden). There's streams, campfires and second brains. And the aim of all those *things* is to better organize content...I think. And this is what I try to do with my media list and my java notes. So when should I put something in those pages instead of the blog? The way I go about it is ease and frequency of reference. If I want to look up a book 8 years from now, it'll be hard from the blog because I'll have so many blog posts but from books it'll be much easier. I read more books than on my book section but I rarely publically write about them.

::: callout-blue
## Reading on the Web
* [BRIEF OF THE ONION AS AMICUS CURIAE IN SUPPORT OF PETITIONER](https://www.supremecourt.gov/DocketPDF/22/22-293/242292/20221003125252896_35295545_1-22.10.03%20-%20Novak-Parma%20-%20Onion%20Amicus%20Brief.pdf) The Supreme Court is back in session for round two of not giving af f*** about what its citizens think. Anyway, here's hoping they might overturn the decisions of the 6th circuit, if only to protect the *Onion's* paychecks.
* [The Palmer Method](https://thepalmermethod.com/wp-content/uploads/2020/11/the-palmer-method-of-business-writing-free-pdf.pdf?204192&204192) my attempt at having better hand writing.
* [How Managerial Aesthetics Explain Why Cities Can't Authentically Market Themselves](https://aaronrenn.substack.com/p/how-managerial-aesthetics-explain) fascinating read. 
* [The Problem with the Conservative Party](https://joxleywrites.substack.com/p/the-problem-with-the-conservative?sd=pf) this article is from a British perspective which as an American is pretty cool. The gist is that the conservatives aren't attuned to actual problems. For what it's worth, meither are liberals. I mean, who actual wants to think about global warming?
* [The Nature of Money](https://www.currentaffairs.org/2021/01/trumps-taxes-and-the-nature-of-money)
* [THE RISE AND FALL OF BITCOIN BILLIONAIRE ARTHUR HAYES](https://www.vanityfair.com/news/2021/02/the-rise-and-fall-of-bitcoin-billionaire-arthur-hayes) This article is quite dated. The man is actually doing well for himself right now. BitMex is still strong.

## Reading off the Web
* [ETHNOGRAPHIES OF POWER](https://library.oapen.org/bitstream/handle/20.500.12657/57561/9781776146833.pdf?sequence=1&isAllowed=y)
* [A Modest Proposal](https://www.readwritethink.org/sites/default/files/resources/30827_modestproposal.pdf) Heard about it in history class and now can say have read it.
* [What we do in the shadows: dual industrial policy during the Thatcher governments, 1979–1990](https://arrow.tudublin.ie/cgi/viewcontent.cgi?article=1062&context=buschmanart) This is a fascinating take on neoliberalism.
:::

::: callout-yellow
## Good finds around the web

### Tools
* [reading.supply](https://reading.supply/)
* [Postulate](https://postulate.us/)
* [Curius](https://curius.app/)
* [Roadmap](https://roadmap.sh/)

### Sites
* [Lydia Hallie](https://www.lydiahallie.io/)
* [Tania Melnyczuk](https://tania.co.za/)
* [Sam Smith](https://smth.uk/)
* [Madison Kanna](https://madisonkanna.com/)
:::