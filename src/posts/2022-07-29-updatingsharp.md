---
title: "A manual way to fix Sharp conflicting version issuess"
description: "Incase the typical way of updating Sharp in 11ty does not work for you"
date: 2022-07-29
toc: "true"
tags:
  ['11ty', 'sharp']
---

## The Problem

You're minding your business updaing 11ty with <code>npm i -D @11ty/eleventy@latest</code> when out of the blue you get this horrifying mess:

```
[11ty] \\?\C:\Users\mycomputer\Documents\java-blog\node_modules\sharp\build\Release\sharp-win32-x
64.node
[11ty]
[11ty] Possible solutions:
[11ty] - Install with verbose logging and look for errors: "npm install --ignore-scripts=false --foreground-scripts --verbose sharp"
[11ty] - Install for the current win32-x64 runtime: "npm install --platform=win32 --arch=x64 sharp"
[11ty] - Consult the installation documentation: https://sharp.pixelplumbing.com/install
[11ty] - Ensure the version of sharp aligns with the @11ty package: "npm ls sharp"
[11ty]     at Object.<anonymous> (C:\Users\rachelscomputer\Documents\java-blog\node_modules\sharp\lib\sharp.js:34:9)
[11ty]     at Module._compile (internal/modules/cjs/loader.js:1063:30)
[11ty]     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
[11ty]     at Module.load (internal/modules/cjs/loader.js:928:32)
[11ty]     at Function.Module._load (internal/modules/cjs/loader.js:769:14)
[11ty]     at Module.require (internal/modules/cjs/loader.js:952:19)
[11ty]     at require (internal/modules/cjs/helpers.js:88:18)
[11ty]     at Object.<anonymous> (C:\Users\mycomputer\Documents\java-blog\node_modules\sharp\lib\constructor.js:8:1)
[11ty]     at Module._compile (internal/modules/cjs/loader.js:1063:30)
[11ty]     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
ERROR: "build:eleventy" exited with 1.
```

You try all the suggestions save the last one, to no avail, the problem persists.

## The solution

Now you try <code>npm ls sharp</code>. Voila! 11ty updated Sharp in the node modules but not in @11ty/eleventy-img Who knows why? Maybe because you updated 11ty wrong. Anyway Sharp is now on 0.30.7 but for some reason eleventy-img is on 0.29.3. Here's a crappy way to fix this problem:

1. Copy Sharp from node modules.
2. Delete Sharp from @11ty/eleventy-img and replace it with what you just copied.
3. From  @11ty/eleventy-img open the package.json file. Find Sharp and replace the version number with the one that is now in both places. For me, it's 0.30.7.

And you're done! It works but it's definitely not the best way to go about it.