---
title: "Now"
date: 2023-11-24
thoughts: "I am tending to my website and trying to do less time filler things. I just made my previous design an 11ty theme, so that's nice. Also starting to read other people's blogs again."
---
<div class="w-full sm:flex flex-row flex-wrap">  
             <div class="w-full sm:w-3/12 mx-auto overflow-hidden md:flex-1 md:pr-4 pt-8 sm:w-full">
              <time class="mr-4 block-inline serif h-8 text-lg font-bold text-slate-400 pl-2 pr-2 pt-1 pb-1" datetime="{{ item.data.date }}"> 🕒 {{ date | asPostDate }}</time>
              </div>
            <div class="w-full sm:w-9/12 py-8">
            <h2 class="-mt-1">
<a class="no-underline border-none text-xl md:text-3xl text-teal-500" href="{{ item.url }}">{{ title }}</a></h2>
    <p>{{ thoughts}}</p>
           </div>
         </div>
         