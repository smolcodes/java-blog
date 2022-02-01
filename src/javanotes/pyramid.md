---
title: Star Pyramid
date: 2019-09-06
genre: Codegym
rating: easy
summary: Creating different pyramid shapes in java
---

A classic assignment that I never understood was making an asterisks pyramid that looks like this:
![image](https://64.media.tumblr.com/4deceb0418577a134b54bb7f318026fb/f1ed076fe0b5b56a-d7/s540x810/8ebfc59b93f30a4f68211cf5e95ee53f49829293.png)

How do they do it? What's going on?

I'm going to explain it the way I would have liked it explained to me: very slowly and everything spelled out.

 This assignment tests your understanding of for loops.

A **loop** is something that gets repeated over and over again until you tell it to stop. Example: Keep catching Pokemon until you run out of Poke balls.** Terminate** means to end. So when you are out of Poke balls, you can no longer catch Pokemon. Your program will terminate.

The _for _in_ for loop _specifies_ _a condition that has to be met in order to start and end a program. Continuing with Pokemon Go:

 &nbsp;For the number of Pokemon balls that we have (starting with 1), we're going to keep catching Pokemon until we use all the Pokemon balls that we have (let's say that's idk 12).

Here Pokeball=1 starts the loop

Pokeball&lt;=12 let's us know when to end the loop

Pokeball++ tells us how we're evaluating the steps to complete the loop. We're incrementing here because we're counting from 1 Pokemon balls to less than or equal to 12.

Back to our star program:

We need to first define the number of rows: 5. There are two parts to the program: an inner loop and an outer loop:
![image](https://64.media.tumblr.com/d984fabfbf6e0efa305687341fc9eb47/f1ed076fe0b5b56a-6c/s540x810/4352ca34ec3f71118b701d0a29dc1629f2aad3bf.png)

The inner loop says to print out asterisks like this: 1 asterisk followed by two asterisks followed by 3 asterisks all the way to 5 asterisks all in a straight line. You'll end up with a line of 15 asterisks.

The outer loop tells us to create a new line after every set of asterisks. So 1 asterisk-new line. 2 asterisks-new line, three asterisk-new line...all the way to five. You end up with five lines with every line having one more asterisk more than the previous! And voila! 