---
title: 
imageURL: 
layout: 'layouts/home.njk'
eleventyNavigation:
  key: home
  title: 🐀 Home
  order: 0
---
  <section class="indexgrid grid grid-cols-6 sm:gap-10">
 			<div class="md:col-span-2 col-span-6">

<h2 class="font-sans"><span class="text-teal-500 bg-teal-100 rounded-3xl px-4 mb-4">Good Day!</span></h2>
<p class="font-serif bg-blue-50 rounded-xl p-4 mt-4">Welcome to my digital <a href="https://maggieappleton.com/garden-history">garden</a>. Beware it changes often and I will never get around to organizing it. 🐋</p>
      
   </div>
      <div class="md:col-span-4 col-span-6">
 {% myImage "dist/images/assets/profile.webp", "self portrait with bulbsaur" %}      
 </div> 
  <div class="md:col-span-3 col-span-6 bg-purple-200 bg-opacity-40 backdrop-blur-lg sm:rounded-3xl overflow-hidden p-4" style="background-image: url(/images/bg/trees.avif);">
  
  <h2 class="text-4xl my-5 text-yellow-500 font-serif">All Tags</h2>
     <p class="text-sm my-2">
    {% for tag in collections.tagList %}{% set tagUrl %}blog/tag/{{ tag | slug }}/{% endset %} <a class="inline-block m-1 rounded-2xl bg-teal-500 font-bold text-sm text-yellow-50 p-2 hover:bg-yellow-100 hover:text-slate-600 hover:border-yellow-400 hover:shadow-lg hover:shadow-orange-400/50 hover:border-2" href="{{ tagUrl | url }}">{{ tag }}</a>{% endfor %}
    </p>         
      </div>

<div class="md:col-span-3 col-span-6 sm:rounded-3xl bg-yellow-100 overflow-hidden p-4">
  

## Please Validate Me

Listen friend, you've made it this far in the page and I am so proud of you. I spent a heckn' lot of time filling this page up with words so thank you for reading them. And if you want to read more words written by me (because this little page just doesn't have enough content), why not follow me elsewhere?

[twitter](https://twitter.com/smolcodes) [Buy Me a Coffee](https://ko-fi.com/softthemes) [Ask Me Anything](https://rep.ly/smolcodes) [Check out my portfolio](https://smolcodes.netlify.app/) 

</div>
        </section>


[Previous](https://dg-webring.netlify.app/prev) [Next](https://dg-webring.netlify.app/next) [randome](https://dg-webring.netlify.app/random)
