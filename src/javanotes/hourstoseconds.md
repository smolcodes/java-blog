---
title: Converting Hours to Seconds
date: 2020-02-10
genre: Codegym
rating: easy
summary: a practice in classes
---

```java
public class Solution {
    public static int convertToSeconds(int hour){
        int seconds=hour*60*60;
      return seconds;
    }
    //write your code here

    public static void main(String[] args) {
      System.out.println(convertToSeconds(2));
      System.out.println(convertToSeconds(4));
       //write your code here
    }
}
```

This is a simple program that converts hours to seconds. The VERY basic mistake I made was trying to use the print function in an int function and then call it in the main class.