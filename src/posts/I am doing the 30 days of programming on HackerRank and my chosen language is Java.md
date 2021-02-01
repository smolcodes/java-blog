---
title: How empty should a tutorial be?
description: The first 3 challenges leave out quite a lot of information and maybe that is good
date: 2020-07-31
tags:
  ['java']
---

I am doing the 30 days of programming on HackerRank and my chosen language is Java. The Day 1. challenge got me thinking: how empty should a tutorial be?

In college I had a hard time being able to tell if I was regurgitating vs learning. Let's look at an example:

>  An even number is a number that is divisible by 2.
>
> An odd number is a number divisible by 2k+/-1.
>
> A prime number is a number that is not divisible by any number except its self and 1.
>
> Is 471 even, odd or prime?

You might look towards previous examples to punch in the values from this question. *Hmm we had to see if 4 was even and it is*. This is regurgitating. You will be stuck if there's no prime number example. You could instead solve this by using the information provided. You could show it isn't even and then show it is odd. Next you can show it is only divisible by itself and 1. 

In this example, i didn't feel the need to explain what integers are even though this could trip up someone who might believe irrational numbers like pi are prime (they are not).

Here's my initial solution to this problem: 

```
 /* Declare second integer, double, and String variables. */
           int j; 
           double e;
           String t;
        /* Read and save an integer, double, and String to your variables.*/
        // Note: If you have trouble reading the entire String, please go back and review the Tutorial closely.
           Scanner scanJ = new Scanner(System.in);
           System.out.println("Enter a number");
           String storedJ = scanJ.nextLine();
           Scanner scanE = new Scanner(System.in);
           System.out.println("Enter a double");
           String storedE = scanE.nextLine();
           Scanner scanT = new Scanner(System.in);
           System.out.println("Enter a String");
           t = scanT.nextLine();
           j = Integer.parseInt(storedJ)+i;
           e = Double.parseDouble(storedE)+d;

        /* Print the sum of both integer variables on a new line. */
           System.out.println(j);
        /* Print the sum of the double variables on a new line. */
		      System.out.println(e);
        /* Concatenate and print the String variables on a new line; 
        	the 's' variable above should be printed first. */
          System.out.println(s+t);
```

This code is very verbose; over half of it is unnecessary. I used scanner more than I needed to and I didn't know there was such things as nextInt and nextDouble so I accepted everything as strings and thought I'd need to convert them to their respective numbers.

Here's the final code.

```
      /* Declare second integer, double, and String variables. */
           int j; 
           double e;
           String t;
        /* Read and save an integer, double, and String to your variables.*/
        // Note: If you have trouble reading the entire String, please go back and review the Tutorial closely.
           j = scan.nextInt();
           e = scan.nextDouble();
           scan.nextLine(); 
           t = scan.nextLine();

        /* Print the sum of both integer variables on a new line. */
           System.out.println(i+j);
        /* Print the sum of the double variables on a new line. */
		   System.out.println(d+e);
        /* Concatenate and print the String variables on a new line; 
        	the 's' variable above should be printed first. */
           System.out.println(s+t);
```

Much cleaner. I wouldn't have arrived at this solution without looking at other people's answers though. Had the tutorial let me know about nextInt and nextDouble, I don't know if I would have sought out others' answers or Googled converting strings to doubles. So withholding information prompted me to produce more creative (albeit bad) solutions. 

