---
title: ETI5 THIS
date: 2020-06-10
genre: Codegym
rating: awesome
summary: getting a better understanding of this in java
---

I read a very useful [Reddit Thread](https://www.reddit.com/r/learnprogramming/comments/5u1fec/java_eli5_use_of_thisvariable_in_java/) about _this_ in Java. Basically it's declaring a  specific type of item. Like "that's MY apple".
This is my solution to age correcting in CodeGym

```java
       public static class Person {
            public int age = 20;
            public void adjustAge(int age) {
                age =age + 20;
                this.age=age;
                System.out.println("The age in adjustAge() is " + age);
            }
        }
```    