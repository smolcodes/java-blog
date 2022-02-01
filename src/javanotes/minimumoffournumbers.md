---
title: Minimum of Four Numbers
date: 2019-11-10
genre: Codegym
rating: easy
summary: Finding the mimimum of numbers hint no computers needed
---

I legit feel so smart bc I like sat down with a pen and paper and just...worked through the problem for the base case (compare 3 numbers and find the smallest).

This is really the same thing. You're referencing an object (or a function) and using it to find a minimum and then basically comparing the two objects to each other. Does this make sense? Will I know what I'm talking about a month from now???

So first: how do you find out if a is a bigger number than b? After that, how do you find out if it is bigger than C? How about D? Reduce the problem of comparing 4 numbers to comparing two numbers.

```java
    public static int min(int a, int b, int c, int d) {
       int m=min(a,b);
       int n=min(b,c);
       int o=min(c,d);
       if (m<=n && m<=o)
       return m;
       else if (n<=m && n<=o)
       return n;
       else 
       return 
       o;
    }

    public static int min(int a, int b) {
       if (b<=a)
       return b;
       else
       return a;//write your code here
    }

```