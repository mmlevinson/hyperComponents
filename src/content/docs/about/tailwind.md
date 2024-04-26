---
title: Tailwind Opinions
description: How to deal with Tailwind Verbosity and Organization
 OK
---

## Understanding Tailwind

You either love or hate Tailwind CSS as a styling strategy. Those coming from traditional CSS file based strategies often find Tailwind much too verbose, with long, run-on lists of class names splaying off the right margin of the page.

Tailwind does have certain advantages that make it a good development tool, mainly its responsive modes.  In particular, creating mobile-first responsive designs is much easier with Tailwind.   You can forgo explicit media queries and breakpoints in favor of the Tailwind breakpoint directives.  


## The Problem

However, the granular nature of utility classes often yields a huge collection of class names in order to apply basic styles to any individual element.  This is magnfified when adding conditional styles, such as dark mode, responsive breakpoints, transitions, etc.  

In addition, if your markup includes repeated elements of the identical tag all of which need to apply the same styles (for exampl list items, table rows), then your html tags quickly becomes polluted with long, verbose class name strings.

For example, here is a simple unordered list where each list item applies the same styling as its sibling. The class attribute of each line item is extensive and scrolls off the edge of the page.  active

In order to maintain this code, the developer has to scroll back-and-forth to visually scan the entire list of classes. Once your page is populated with a lot of markup, and Tailwind, the document becomes impossible to scan for errors or ommissions, debugging, etc.  There is credibility to the criticism that Tailwind code is hard to maintain.

## Possible Solutions

The official Tailwind docs recommend that using your IDE's muli-line cursor allows you to make changes to the class list of many elements at once.  Yes, but this is suboptimal and can lead to typos.   Find/replace tailwind strings does work, but is there not an easier way?

There are extensions which offer code folding to temporarily hide long class list. However you have to toggle this function on and off every time you want to perform minor maintenance on the list of classes.  And when un-folded, the list still splays off the right page margin, forcing repeated horizontal scrolling to maintain the code.

Also, there are extensions which sort of Tailwind class lists based on an opinionated filter. This may not be a strategy you like to implement because the extension suddenlhy moves class names around and sometimes in an unexpected pattern.

In the author's experience the advantages of easy responsive design with tailwind ar offset by difficulties maintaining an upkeep these expansive class list associated with each dom element you are assigning styles to.  This problem is further magnified bye the fact that many of your elements are repetitive (such as list and table rows) which means making a minor change in one element in a list **requires that you conscientiously update every other sibling or you will break your styles**.

## Improved Solution !

### Extracting your Tailwind styles into a local constant

The solution I have migrated to is to extract these long for both List of class names into a local constant in the Astro component script and then interpolate that constant into the HTML markup just as any other local constant. This provides several advantages.

 1.  You can easily **create multi line strings** in your constant which allows reganization of long class list to according to your own preferences. Multi-line strings do not scroll off the page edge so are much easier to scan read.  Plus, you were not tied to organizational opinions provided by any extension author and can customize your own organization scheme for Tailwind classes. 

 2.  By extracting the class List into a local constant **you can now apply the values to every item in a repeating list or table row without polluting your markup** with long repetitive class lists that are very difficult to read or scan. At the same time it is a breeze to make a minor modification to the constant's properties which is then applied equally to all elements referencing this constant. This greatly simplifies code maintenance and reduces errors.
 

 3. Although Tailwind completely avoids the 'naming convention' problems characteristic of file based CSS, using a constant re-introduces some dependency on choosing a proper name for the encapsulated class names in your constant.  By using a 'tw' object with property names that identically match the element or #id of intended use, the html markup has unambiguous names for the applied styles (See the examples) reducing naming confusions.


3. The tailwind ('tw') constant can exported from one file and imported into another file essentially transferring your styles without having to create  @apply directives in your main CSS file.  Use of @apply directives is discouraged so exporting the tw constant  is a very viable workaround which preserves flexible, upgradable, and shareable styles between multiple files.

4. Although the actual class names are extracted into a local constant, they are still being applied to the DoOM element for which the styles are intended to modify. This respects the principles of Locality of Behavior while at the same time providing some improvements in code maintainability, encapsulation, readability, and reduced errors of omission while at the same time still allowing common styles to be shared across multiple identical elements or even multiple files.

*There is considerable controversy about this technique.* However developing hyperComponents that heavily rely on long strings of Tailwind classes became a more manageable task by extracting the class list into a local Astro constant.   

You may give this strategy a try and see if you agree.

