---
title: 'Healy Icons'
layout: 'layouts/page.njk'
permalink: '/healyicons/index.html'
---
Free sets of cat icons for you to use. Put this css file between the `<head>` tag:

 ```
  <link href="https://raw.githubusercontent.com/smolcodes/java-blog/master/src/css/healyicon.css">
 ```
 
To use these icons, place the prefix `healy` (that's the name of this icon set) inside a `tag` as a class followed by the size and the name of the icon. I'd recommend using `span` as that is the most semantically correct and accessibble. These are cute cats after all.

The icons come in three sizes: `healy-smol` (40px by 40px), `healy-reg` (64px by 64px) and `healy-big` (96px by 96px).

Here's an example with the `healy-hey` icon. 
```
<!--The code.-->
 <span class="healy healy-smol healy-hey"></span> <!--Small-->
 <span class="healy healy-reg healy-hey"></span> <!--Medium-->
 <span class="healy healy-big healy-hey"></span> <!--Large-->
 ```
<blockquote>
This is the result

 <span class="healy healy-smol healy-hey"></span> 
 <span class="healy healy-reg healy-hey"></span> 
 <span class="healy healy-big healy-hey"></span> 
 </blockquote>

 <div class="uk-card uk-card-default uk-card-hover uk-card-body">
 <h2>A list of all the icons</h2>
 <div class="healycard">
 <div class="icons">
  <span class="healy healy-reg healy-aaa"></span> <b>healy-aaa</b>
 </div>
 <div class="icons">
  <span class="healy healy-reg healy-confused"></span> <b>healy-confused</b>
 </div>
 <div class="icons">
  <span class="healy healy-reg healy-content"></span> <b>healy-content</b>
 </div>
 <div class="icons">
  <span class="healy healy-reg healy-fauxthot"></span> <b>healy-fauxthot</b>
 </div>
 <div class="icons">
  <span class="healy healy-reg healy-reassure"></span> <b>healy-reassure</b>
 </div>
 <div class="icons">
  <span class="healy healy-reg healy-sad"></span> <b>healy-sad</b>
 </div>
 <div class="icons">
  <span class="healy healy-reg healy-scene"></span> <b>healy-scene</b>
 </div>
 <div class="icons">
  <span class="healy healy-reg healy-squint"></span> <b>healy-squint</b>
 </div>
 <div class="icons">
  <span class="healy healy-reg healy-thirsty"></span> <b>healy-thirsty</b>
 </div>
 <div class="icons">
  <span class="healy healy-reg healy-work"></span> <b>healy-work</b>
  </div>
 </div>
 </div>

 _______________

## General Style

*italic* **bold**

* this is
* an
    * unordered list
1. One
2. Two
    1. Two point 1

> This is a general quote

::: callout-yellow
This is a yellow call out. I think I should use this to point out something important
:::

::: callout-blue
This is a blue call out. I use this as a warning for books but that's not really great. I need to figure this one out
:::

::: callout-pink
This one is pink and it is the only obvious one, it is an important warning.
:::

::: callout-green
This is a green call out. I use this as a warning for books but that's not really great. I need to figure this one out
:::

::: callout-purple
This is a purple call out. I use this as a warning for books but that's not really great. I need to figure this one out
:::



________________

 ## Shortcodes for this site

1. Footnotes 
Place where you want the item to have the footnote to go

```html
{% raw %}{% footnoteref "anchorTag","Foot Note" %}Some Word{% endfootnoteref %}{% endraw %}
```
Place at end of post

```html
{% raw %}{% footnotes %}{% endraw %}
```
2. Images

```html
{% raw %}{% Image "catsarecute.jpg", "Description of said cute cat" %}{% endraw %}
```

3. Add math

Place &#92;&#92;( in front of the math and &#92;&#92;) at the end of the math for inline math.

For stand alone use &#36;&#36; in the beginning and end.

4. Add table of content

Place <code>toc: "true"</code> in front matter