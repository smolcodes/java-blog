---
title: 'Hello There 👋'
imageURL: /images/bg/breakfast.png
layout: 'layouts/page.njk'
eleventyNavigation:
  key: home
  title: 🐀 Home
  order: 0
---

## A Hot Mess of a Place

You're viewing my digital [garden/sandbox](https://maggieappleton.com/garden-history) of sorts.

{% myImage "dist/images/assets/profile.webp", "self portrait with bulbsaur" %}

## Featured Tags

<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
  <a class="border-none" href="/tag/languages/">
  <div class="rounded-lg shadow-md" style="background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp');background-size: cover;">
  <div class="rounded-lg overlay hover:bg-purple-600 transition-shadow hover:shadow-2xl text-center text-white p-8 text-3xl"><p>Language</p></div>
 </div>
  </a>

   <a class="border-hidden" href="/tag/11ty/">
     <div class="rounded-lg shadow-md" style="background-image: url('https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'); background-size: cover;">
  <div class="rounded-lg hover:bg-purple-600 overlay transition-shadow hover:shadow-2xl text-center text-white p-8 text-3xl"><p>11ty</p></div>
 </div>
  </a>

   <a class="border-none" href="/tag/accessibility/">
       <div class="rounded-lg shadow-md" style="background-image: url('https://images.unsplash.com/photo-1645008404465-82d16e726baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'); background-size: cover;">
  <div class="rounded-lg hover:bg-purple-600 overlay transition-shadow hover:shadow-2xl text-center p-8 text-white text-3xl"><p>Accessibility</p></div>
  </div>
  </a>

   <a class="border-none" href="/tag/life/">
         <div class="rounded-lg shadow-md" style="background-image: url('https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'); background-size: cover;">
  <div class="rounded-lg hover:bg-purple-600 overlay transition-shadow hover:shadow-2xl text-center p-8 text-3xl text-white"><p>Life</p></div>
  </div>
  </a>
</div>

________________

   <h2 class="text-4xl my-5 text-yellow-500 font-serif">All Tags</h2>
     <p class="text-sm my-2">
    {% for tag in collections.tagList %}{% set tagUrl %}/tag/{{ tag | slug }}/{% endset %} <a class="inline-block m-1 rounded-2xl bg-purple-600 font-bold text-sm text-yellow-100 p-2 hover:bg-yellow-100 hover:text-slate-600 hover:border-yellow-400 hover:shadow-lg hover:shadow-orange-400/50 hover:border-2" href="{{ tagUrl | url }}">{{ tag }}</a>{% endfor %}
    </p>
    
## Please Validate Me

Listen friend, you've made it this far in the page and I am so proud of you. I spent a heckn' lot of time filling this page up with words so thank you for reading them. And if you want to read more words written by me (because this little page just doesn't have enough content), why not follow me elsewhere?

[twitter](https://twitter.com/smolcodes) [Buy Me a Coffee](https://ko-fi.com/softthemes) [Ask Me Anything](https://rep.ly/smolcodes) [Check out my portfolio](https://smolcodes.netlify.app/) 
________

[Previous](https://dg-webring.netlify.app/prev) [Next](https://dg-webring.netlify.app/next) [randome](https://dg-webring.netlify.app/random)
