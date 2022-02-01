---
title: More Practice with This
date: 2020-07-22
genre: Codegym
rating: awesome
summary: getting a better understanding of this through more practice
---

Back to Java after abandoning it for a few weeks. I like that Codegym is repetitive. Anyway this exercise is the same as the last.

> Help the cat get a name using the setName method.
> 
> Requirements:
> 
> •The Cat class must contain only one variable called name.
> •The variable name must be a String and have a private access modifier.
> •The Cat class must have only two methods: setName and main.
> •The Cat class's setName method must set the value of the private String variable name equal to the passed String argument name.

My solution is below

```java
    public class Cat {
        private String name = "nameless cat";

        public void setName(String name) {
           this.name = name;
        }

        public static void main(String[] args) {
            Cat cat = new Cat();
            cat.setName("Simba");
            System.out.println(cat.name);
        }
    }
 ```   