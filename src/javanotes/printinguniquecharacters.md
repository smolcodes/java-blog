---
title: Printing Unique Characters
date: 2020-03-12
genre: Codegym
rating: easy and fun
summary: a practice in printing unique characters like forward slashes
----

Here is the prompt:
> Display the following text (two lines):
> `This is a Windows path: "C:\Program Files\Java\jdk1.8.0_172\bin" This is a Java string: \"C:\\Program Files\\Java\\jdk1.8.0_172\\bin\"`
> 
> Hint:
> \” – Insert a double quote character in the text at this point. 
> 
> \ – Insert a backslash character in the text at this point. 
> 
> \n-new line

And below is my solution. I tried many ways and I suggest you try the same before looking at my solutions. I thought about using a for loop but instead chose not to because I think I rely on it too much. Next, I tried using special characters within the statement but that proved too difficult to keep track of. So finally I decided on going back to basics and sticking with the tried and true of using variables. 

What I like about Codegym is seeing other people’s solutions. I think it’s important to expose yourself to many different modes of thinking.

```java
public class Solution 
{ public static void main(String[] args) { String a="\"";
 String b="\\"; String c="\\\\"; 
 String d="This is a Windows path:"; 
 String e="This is a Java string:"; 
 System.out.println(d+" "+a+"C:"+b+"Program Files"+b+"Java"+b+"jdk1.8.0_172"+b+"bin"+a +"\n"+e+" "+b+a+"C:"+c+"Program Files"+c+"Java"+c+"jdk1.8.0_172"+c+"bin"+b+a); 
 //write your code here 
 }
```