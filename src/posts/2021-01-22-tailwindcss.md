---
title: Using Tailwind
description: My thoughts on Tailwind
imageURL: https://images.unsplash.com/photo-1544587265-c4a0035a6d22?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80
imageAlt: a whales tail
date: 2021-01-22
tags: ['tailwindcss','11ty']
---

## What You Need

* NPM (node package manager)
* CLI (command line interface)
* 11ty ([this](https://tatianamac.com/posts/beginner-eleventy-tutorial-partii/) is an excellent article to read)

## Installing, using and some hangups.

Watch this video and follow the instructions very carefully

https://www.youtube.com/embed/gE8hcdG2vsw

The biggest part that tripped me up was the clean instruction in the package.json file. [rm rf](https://superuser.com/questions/204406/whats-the-equivalent-to-rm-rf-with-windows-command). These commands don't exist for Windows. The equivalent code is `rmdir /s /q`. Now the problem is while this is will work fine on your windows laptop, it will not run on Netlify. I don't have a good solution to this. The clean instruction basically deletes the directory (output fold) so 11ty can recreate one every time you build your site. My current solution is to just manually delete the file once in a while.

_______

## Thoughts on Tailwind

So a while ago I had a very dumb opinion 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Thanks for saying this! I&#39;ve been trying to use tailwind and it felt so much like in line CSS (which as a beginner web designer I used to do all the time but there&#39;s a reason you&#39;re taught not to do it-its a lot and hard to keep up w/ plus change)</p>&mdash; loafing loaf (@smolcodes) <a href="https://twitter.com/smolcodes/status/1345823776995422208?ref_src=twsrc%5Etfw">January 3, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

But Twitter is filled with good people 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Also read this <a href="https://t.co/ShW6yhk31u">https://t.co/ShW6yhk31u</a></p>&mdash; Gavin (@trickydisco78) <a href="https://twitter.com/trickydisco78/status/1345997383839133697?ref_src=twsrc%5Etfw">January 4, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Although I've dabbled with coding since 2013 on Tumblr, I've never truly given the craft of web design much thought beyond the superficial "let's make things look nice".  I lamented about [beauty over functionality](https://smolthemes.tumblr.com/post/182953220559/what-is-accessibility) in 2019 but didn't do much. Sort of threw up my hands with a nice 🤷‍♀️ _what can ya do?_ .  This all changed during the beginning of the [pandemic](https://smolnotes.netlify.app/posts/2020-05-09-free-code_camp/). [Cassie](https://www.cassie.codes/writing/), [Tatiana Mac](https://tatianamac.com/) and [Dan Spratling](https://danspratling.dev/blog) all have beautiful *and* accessible blogs. So both is possible.

How does this relate to [Tailwind](https://tailwindcss.com/)? The argument I made against using it was that it was basically like inline CSS. This is not true. Let's look at an example: 

Inline:

```html
<div style="margin-bottom: 8px; padding-top: 8px">
           </div>
```

Tailwinds Class:

```html
<div class="mb-6 pt-8">
    
</div>
```

Tailwinds is clearly shorter. 

In the case of accessibility I've noticed many (Tailwinds, Bootstrap, and Bulmer) don't really emphasize the importance of semantic HTML.  I think because of this people often over use divs when they should be using `<article>`, `<section>`, `<nav>` to name a few.  Thus they expect classes to do the heavy lifting of ordering a web page.

How to organize the design of the page seems to be a heated discussion on the IOT.I think the whole utilities vs components choice is too binary. Why not both?

Using TailwindCSS made me think more intentionally about my HTM *and* CSS. In college physics we were taught to write our Matlab code to be understood (I was not good at this because I was neither good at physics or Matlab) . The same should be done for web code.

Anyway now that I've used Tailwind this is I think a good work method:

1. Create your HTML templates. Make them as semantic as possible. I think it's ok to name a component (but only at a large level). I found the more organized my HTML is the easier it is to design it
2. Follow an order for your TailwindCSS. Maybe _display width margin padding color font_. I don't know. But something to keep your Tailwind classes consistent. This will make editing so much easier.

Here's what I'm thinking:

```html
<section id="posts" class="flex flex-wrap justify-between -mx-6 pt-12">
        
        <article class="flex flex-col flex-grow flex-shrink w-full md:w-1/2 p-6">
						<div class="flex-1 rounded-t rounded-b-none overflow-hidden shadow-md pb-5 bg-yellow-50">
                            Content
            </div>
    </article>
</section>
```

We'll see how this goes.

**TLDR** I rescind my original opinion on Tailwind. I'm so far learning a lot from using it.

_______

## Further reading and resources used

1. [Goodbye Squarespace. Hello Eleventy, Tailwind CSS and Netlify!](https://sahilparikh.dev/posts/2020/moving-squarespace-eleventy/)
2. [In Defense of Utility-First CSS](https://frontstuff.io/in-defense-of-utility-first-css)
3. [Updating to Tailwind Typography to style markdown posts](https://tjaddison.com/blog/2020/08/updating-to-tailwind-typography-to-style-markdown-posts/)
4. [The complete guide to customizing a Tailwind CSS theme](https://pinegrow.com/tutorials/customizing-a-tailwind-css-theme/)

___________

## Miscellaneous

[Writing Liquid Template in Markdown Code Blocks with Jekyll](https://ozzieliu.com/2016/04/26/writing-liquid-template-in-markdown-with-jekyll/) 

[Control Flow](https://shopify.github.io/liquid/tags/control-flow/)

### Photo Credit

[Image by Sandra Selamaa](https://unsplash.com/photos/p-UCimgloYQ)