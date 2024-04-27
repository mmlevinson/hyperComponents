---
title: Tailwind Issues
description: How to deal with Tailwind Verbosity and Organization
 OK
---

## Understanding Tailwind

You either love or hate Tailwind CSS as a styling strategy. Those coming from traditional CSS file based strategies often find Tailwind much too verbose, with long, run-on lists of class names splaying off the right margin of the page.

Tailwind does have certain advantages that make it a good development tool, mainly its responsive modes.  In particular, creating mobile-first responsive designs is much easier with Tailwind.   You can forgo explicit media queries and breakpoints in favor of the minimal syntax of Tailwind breakpoint directives.  


## The Problem

However, the granular nature of utility classes often yields a huge collection of class names in order to apply even rudamentary styling to any individual element.  This is magnfified when adding conditional styles, such as dark mode, responsive breakpoints, transitions, etc.  

In addition, if your markup includes repeated elements of the same tag all of which need to apply the same styles (for example list items, table rows, section, article, etc), then your html markup quickly becomes bloated with verbose class name strings.

For example, here is a simple unordered list where each list item applies the same styling as its sibling. The class attribute of each line item is extensive and scrolls off the edge of the page.  active

In order to maintain this code, the developer has to scroll back-and-forth to visually scan the entire list of classes. Once your page is populated with considerable markup, and redundant Tailwind classes, the document becomes impossible to scan for errors or ommissions, debugging, etc.  There is credibility to the criticism that Tailwind code is hard to maintain and in some circumstances unmanageable.

## Possible Solutions

The official Tailwind docs recommend  using your IDE's muli-line cursor to make bulk changes to the class list of many elements at once.  Yes, but this is suboptimal and can lead to typos.   Find/replace tailwind strings also works but is clumsy. Is there a better way?

There are IDE extensions which offer code folding to temporarily hide long class lists. However you have to toggle this function on and off every time you want to perform minor maintenance on the list of classes.  And when un-folded, the list still splays off the right page margin, forcing repeated horizontal scrolling to maintain the code.

Also, there are extensions which sort Tailwind class lists based on an opinionated filter. This may not be a strategy you like to implement because the extension suddenlhy moves class names around and sometimes in an unexpected pattern.

In the author's experience the advantages of easy responsive design with Tailwind are offset by difficulties maintenance and upkeep of the expansive class lists associated with each DOM element you are attempting to style.  This problem is further magnified by the fact that many of your elements are repetitive (such as list and table rows) which means making a minor change in one element in a list **requires that you conscientiously update every other sibling or you will break your styles**.

## Improved Solution !

### Extracting your Tailwind styles into a local constant

The solution I have migrated to is to extract these long, verbose class lists into a local constant in the Astro component script and then interpolate that constant into the HTML markup just as you would with any other local constant. This provides several advantages.

1. You can easily **create multi line strings** in your constant which allows reorganization of long class lists to according to your own preferences. Multi-line strings do not scroll off the page edge so are much easier to scan read.  Plus, you were not tied to organizational opinions provided by any extension author and can customize your own organization scheme for Tailwind classes. 

2.  By extracting the class List into a local constant **you can now apply the values to every item in a repeating list or table row without polluting your markup** with long repetitive class lists that are very difficult to read or scan. At the same time it is a breeze to make a minor modification to the constant's properties which is then applied equally to all elements referencing this constant. This greatly simplifies code maintenance and reduces errors.
 

3. Although Tailwind completely avoids the 'naming convention' problems characteristic of file based CSS, using a constant re-introduces some dependency on choosing a proper name.  By assigning an object to the 'tw' constant you can use property names that identically match the element or #id of intended use,  Then the html markup has unambiguous names for the applied styles (See the examples) reducing naming confusions.


4. The tailwind ('tw') constant can exported from one file and imported into another file essentially transferring your styles without having to create  @apply directives in your main CSS file.  Use of @apply directives is discouraged so exporting the tw constant  is a very viable workaround which preserves flexible, upgradable, and shareable styles between multiple files.

5. Although the actual class list is extracted into a local constant, they are still being applied to the DOM element for which the styles are intended to modify. This respects the principles of Locality of Behavior while at the same time providing some improvements in code maintainability, encapsulation, readability, and reduced errors of omission while at the same time still allowing common styles to be shared across multiple identical elements or even multiple files.

*There is considerable controversy about this technique.* However developing hyperComponents that heavily rely on long strings of Tailwind classes became a more manageable task by extracting the class list into a local Astro constant.   

One problem  with this strategy is losing Tailwind code completion and Intellisense which VSCode by default triggers from changes to an elements 'class' attribute.   However, Intellisense inside the properties of the 'tw' constant can be restored by **opening VSCode Settings and adding 'tw' to the Search Class Attributes list**.   Now when you modify the tw object, you should see Tailwind Code completions suggestions and Intellisense.


Before you walk away and refactor all the example code, you may give this strategy a try and see if you might end up liking this strategy.

## Are you missing a space char?

In the example below, the class list has been extracted to a 'tw' constant.   Concatenation is used to manage verbose tailwind by using
multi-line strings with concatenation.   While the resulting class list is more readable, there is a subtle mis-step that is easy to fall into. 

Class lists are space-separated values.   So, don't forget to include a space at the end of each line in your multiline construct.  If you leave it out, concatenation merges two class names together.   You will see this effect in the browser DevTools when inspecting your classes.   The missing space char will break your Tailwind list, so watch for this if you are using multi-line strings with string concatenation.  active

Of course you can use back-tick delimited strings instead, but then all white-space is also preserved, including line returns. 

