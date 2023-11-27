---
title: Goals
date: 2023-11-24
goal1: "Read more books. Finish No One Writes to the Colonel"
goal2: "Finish Spanish Pimsleur 2 and maybe hire a tutor? Kind nervous about using Italki"
goal3: "Actually run????"
---
<div class="w-full sm:flex flex-row flex-wrap">  
              <div class="w-full sm:w-3/12 mx-auto overflow-hidden md:flex-1 md:pr-4 pt-8 sm:w-full">
              <time class="mr-4 block-inline serif h-8 text-lg font-bold text-slate-400 pl-2 pr-2 pt-1 pb-1" datetime="{{ item.data.date }}"> 🕒 {{ date | asPostDate }}</time>
              </div>
            <div class="w-full sm:w-9/12 py-8">
            <h2 class="-mt-1">
<a class="no-underline border-none text-xl md:text-3xl text-teal-500" href="{{ item.url }}">{{ title }}</a></h2>
        <ol>
           <li>{{ goal1 }}</li>
           <li>{{ goal2 }}</li>
            <li>{{ goal3 }}</li>
        </ol>
           </div>
         </div>