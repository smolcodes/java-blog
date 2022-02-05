---
title: "Why do Programmars Enjoy Scrabble?"
description: "I, A web developer, try to answer this question with JavaScript"
imageURL: https://images.unsplash.com/photo-1597742200037-aa4d64d843be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80
imageAlt: image of a scrabble board
date: 2022-02-03
tags:
  ['scrabble', 'javascript']
---

Someone on Quora asked the [question](https://www.quora.com/Is-Scrabble-more-about-strategy-or-knowledge): **Is scrabble more about tactics or knowledge?**

To which Chris Lipe replied:

::: callout
The answer is more “strategy” than “knowledge” but it is complicated, because it’s difficult or impossible to assess a strategic position without knowing what words are possible to be played.

As an example:

You have a spot to play the word GRAN, and you are sneakily holding a D so next time you can make another word perpendicular while making the word GRAND. But if you don’t know that GRANA is a word, you won’t realize you’ve opened a place for your opponent’s A. Maybe GRAN is a good strategic move or not, but without knowing what words exist, it’s hard to evaluate. At the top levels of Scrabble players, both players will know nearly all of the words in the dictionary, so it becomes a more purely strategic game. Playing GRAN will be done purposefully opening the opportunity for GRANA (or GRANS, GRAND, or GRANT).
:::

This got me thinking about programming and why I think programmars (me) enjoy scrabble. The game, like programming, has highs, lows and whimsical turns. The whimsical turns comes from knowing or not knowing the existance of obscure words. The programming equivalent is knowing or not knowing the existance of prebuilt functions or external knowledge (like math). Let's look at a javascript example.

::: callout-blue
Add up the numbers 1 through six (inclusive of 1 and 6).
:::

The natural way to solve this is to add up the numbers

```js
const a=1+2+3+4+5+6;
alert(`{a}`);
```

But it's sort of a hassle to type all those plus's. If you remember a bit of high school math, you can use \\(\frac{n(n+1)}{2}\\). 

```js
const a=(6*(6+1))/2;
alert(`{a}`);
```

This isn't perhaps the best example as you could derive the above equation like [Gauss did](https://www.nctm.org/Publications/TCM-blog/Blog/The-Story-of-Gauss/#:~:text=I%20love%20the%20story%20of,to%20100%20to%20be%205%2C050.) when he was young but you can't really derive your way into knowing *bitcoin* is a playable scrabble word. However maybe it is a good example because scrabble is also timed (if you're into that style of playing). Coming up with that equation will certainly take longer than simply knowing it in the same sense as knowing *retina* with a z yields no bingos but *retina* with a w yeilds *tinware* and *tawnier*. You could shuffle the tiles on your rack endlessly and eventually get there but just knowing will be better.

Knowing the existance of certain words is kind of like knowing [nunjucks](https://mozilla.github.io/nunjucks/) and [capybara](https://teamcapybara.github.io/capybara/) exist. The sentence *"The problem with my site is both capybara and nunjucks aren't working. I think they were installed wrong"* sounds just as absurd as *"I got a good play with qaids and spout"*. These examples differ from chess because *"Nf3 was a mistake. Nxf1 would have been better"* to a non chess player *is* gibberish but non scrabble players and programmars know what a spout is and know what nunjucks are.  
