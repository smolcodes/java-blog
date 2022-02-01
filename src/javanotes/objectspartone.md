---
title: Understanding Objects Part One
date: 2019-10-02
genre: Codegym
rating: easy
summary: Using Starbucks to explain objects
---

I’m going to relate this to Starbucks because-hey, I work there.

The best way to think of classes are as vague unspecific objects and objects as a specific instance of that object. For example, Starbucks has baristas and shift supervisors. Here are the descriptions of the two classes (Barista and Shift Supervisor)

Baristas:

*   Clean Things
*   Make Customers Happy
*   Make Drinks

Shift Supervisors:

*   Delegate Tasks
*   Count things (like food)

There are multiple baristas-these baristas are objects:

*   John
*   Age: 22
*   Years worked .5*   Jimbo

And there are multiple shifts:

*   Steve
*   Age: 44
*   Years Worked: 7*   Felixia


```
    public class Starbuckspartners { //this is the main class
        public static void main(String[] args) {
         //creating a new object: a barista
            Barista barista1 = new Barista(); 
            //naming the barista
            barista1.name = "John";
            Barista barista2 = new Barista();
            barista2.name = "Steve";
        }

        public static class Barista { //this is the barista class
            public String name;
        }
    }
```
