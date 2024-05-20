---
title: Tailwind Issues
description: How to deal with Tailwind Verbosity and Organization
 OK
---

## Understanding Tailwind

**You either love or hate Tailwind CSS** as a styling strategy. Those coming from traditional CSS file based strategies often find Tailwind much too verbose, with long, run-on lists of class names splaying off the right margin of the page.

Tailwind does have certain advantages that make it a good development tool, mainly its responsive modes.  In particular, creating mobile-first responsive designs is much easier with Tailwind.   You can forgo explicit media queries and breakpoints in favor of the minimal syntax of Tailwind breakpoint directives.  


## The Problem

However, the granular nature of utility classes often results in a huge collection of class names in order to apply even rudamentary styling to any individual element.  This is magnfified when adding conditional styles, such as dark mode, responsive breakpoints, transitions, etc.  

In addition, if your markup includes repeated elements of the same tag all of which need to apply the identical styles (for example list items, table rows, sections, articles, cards, etc), then your html markup quickly becomes bloated with verbose class name strings.

For example, here is a simple unordered list where each list item applies the same styling as its sibling. The class attribute of each line item is extensive and scrolls off the edge of the page. 

```html
	<ul class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center justify-between bg-slate-200 dark:bg-blue-900 p-4 border-2 border-indigo-700 border-opacity-20 shadow-md rounded-xl overflow-hidden">
		<li class="w-full h-8 px-4 select-none text-pretty line-clamp-3 antialiased text-sm md:text-md lg:text-xl xl:text-2xl font-semi-bold hover:bg-gray-400 hover:dark:bg-gray-200 lg:font-bold tracking-tighter md:tracking-normal lg:tracking-wider text-gray-900 dark:text-zinc-200 bg-blue-200 dark:bg-gray-900 cursor-pointer rounded-md hover:text-slate-300 hover:dark:text-purple-300 lg:rounded-xl border-2 border-slate-800 dark:border-slate-300 md:text-center md:col-span-2"> Main Title ! </li>
		<li class="w-full h-8 px-4 select-none text-pretty line-clamp-3 antialiased text-sm md:text-md lg:text-xl xl:text-2xl font-semi-bold hover:bg-gray-400 hover:dark:bg-gray-200 lg:font-bold tracking-tighter md:tracking-normal lg:tracking-wider text-gray-900 dark:text-zinc-200 bg-blue-200 dark:bg-gray-900 cursor-pointer rounded-md hover:text-slate-300 hover:dark:text-purple-300 lg:rounded-xl border-2 border-slate-800 dark:border-slate-300"> Hello There ! </li>
		<li class="w-full h-8 px-4 select-none text-pretty line-clamp-3 antialiased text-sm md:text-md lg:text-xl xl:text-2xl font-semi-bold hover:bg-gray-400 hover:dark:bg-gray-200 lg:font-bold tracking-tighter md:tracking-normal lg:tracking-wider text-gray-900 dark:text-zinc-200 bg-blue-200 dark:bg-gray-900 cursor-pointer rounded-md hover:text-slate-300 hover:dark:text-purple-300 lg:rounded-xl border-2 border-slate-800 dark:border-slate-300"> Hello There ! </li>
		<li class="w-full h-8 px-4 select-none text-pretty line-clamp-3 antialiased text-sm md:text-md lg:text-xl xl:text-2xl font-semi-bold hover:bg-gray-400 hover:dark:bg-gray-200 lg:font-bold tracking-tighter md:tracking-normal lg:tracking-wider text-gray-900 dark:text-zinc-200 bg-blue-200 dark:bg-gray-900 cursor-pointer rounded-md hover:text-slate-300 hover:dark:text-purple-300 lg:rounded-xl border-2 border-slate-800 dark:border-slate-300 md:text-center md:col-span-2"> Conclusion ! </li>
	</ul>	
```

Although this is a somewhat contrived example, the resulting class list is really not that unusual. 

In order to maintain this code, the developer has to scroll back-and-forth in his/her code editor to visually scan the entire list of classes. And the actual textContent of each `<li>` is nowhere to be seen.  Yes,  word-wrap can visually roll up these long lists, but the eye strain looking for a single value you wish to edit is not trivial.  When coding for hours every day, this adds up.

And once your page is populated with considerable markup, and redundant Tailwind classes, the file becomes impossible to scan for errors or ommissions, debugging, etc.  There is credibility to the criticism that Tailwind code is hard to maintain and in some circumstances unmanageable.

For example, try to change the dark text color in the code above !!  Yes, you can use find/replace, but doing that many times is tedious, and if you are not diligent each time you can accidently replace text that you did not intend (somewhere else in the same file) creating a new bug.

## Possible Solutions

The official Tailwind docs recommend  using your IDE's muli-line cursor to make bulk changes to the class list of many elements at once.  Yes, but this is suboptimal and can lead to typos.   Find/replace also works but is clumsy and error prone as discussed above. Is there a better way?

There are `code folding` IDE extensions which temporarily obscure long class lists. However you have to toggle this function on and off every time you want to perform minor maintenance on the list of classes.  And when un-folded, the list still splays off the right page margin, forcing repeated horizontal scrolling to maintain the code.

There are extensions which sort Tailwind class lists based on an opinionated filter. This may not be a strategy you like because class names suddenly move around and sometimes in an unexpected pattern.

In this author's experience the advantages of responsive design with Tailwind are offset by difficult code maintenance and upkeep of the expansive class lists associated with each DOM element you are attempting to style.  This problem is further magnified by the fact that many of your elements are repetitive (such as list and table rows) which means making a minor change in one element **requires that you conscientiously update every other sibling or you will break your styles**.

## Improved Solution !

### Extracting your Tailwind styles into a local constant

The solution I have migrated to is to extract these long, verbose class lists into a local `tw` constant in the Astro [Component Script](https://docs.astro.build/en/basics/astro-components/#the-component-script) and then interpolate the properties of that constant into the HTML markup just as you would with any other local constant.

Here is the same example of Tailwind styling using this alternative approach. 

```astro title="Astro component"  "export"
---
export const tw = {
	ul: 'p-4 rounded-xl shadow-md overflow-hidden ' +
		'grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center justify-between ' + 
		'bg-slate-200 dark:bg-blue-900 ' + 
		'border-2 border-indigo-700 border-opacity-20',
	li: 'w-full h-8 px-4 cursor-pointer rounded-md lg:rounded-xl ' + 
		'select-none text-pretty line-clamp-3 antialiased md:text-center ' + 
		'text-sm md:text-md lg:text-xl xl:text-2xl ' + 
		'font-semi-bold lg:font-bold ' + 
		'tracking-tighter md:tracking-normal lg:tracking-wider ' + 
		'text-gray-900 hover:text-slate-300 ' +
		'dark:text-zinc-200 hover:dark:text-purple-300 ' +
		'bg-blue-200 dark:bg-gray-900 ' +
		'hover:bg-gray-400 hover:dark:bg-gray-200 ' + 
		'border-2 border-slate-800 dark:border-slate-300'
}
---
	<ul class={tw.ul}>
		<li class={tw.li + ' md:col-span-2'}> Main Title ! </li>
		<li class={tw.li}> Hello There ! </li>
		<li class={tw.li}> Hello There ! </li>
		<li class={tw.li + ' md:col-span-2'}> Conclusion ! </li>
	</ul>	
```

Hopefully you noticed that...


1. You can easily **create multi line strings** in your `tw` properties which allows reorganization of long class lists according to your own preferences. Multi-line strings do not scroll off the page edge so are much easier to scan read. Eye fatigue from scrolling horizontally and scanning long strings is relieved.  Plus, you are not tied to the organizational opinions provided by any extension author and can fully customize your own organization scheme. You can re-organize by just moving a line up or down.  And you are encouraged to gather classes with similar functionality onto the same line so you would naturally look for them in the same place each time. 

2.  By extracting the class List into a local constant you can now apply the values to every item of a repeating group of elements without polluting your markup with long repetitive class lists that are very difficult to read or scan. At the same time it is a breeze to make a minor modification to the constant's properties which is then applied equally to all elements referencing this constant. This greatly simplifies code maintenance and reduces errors.
 

3. Although Tailwind mostly avoids the 'naming convention' problems characteristic of file based CSS, using a constant re-introduces some dependency on choosing a proper name.  By assigning an object to the 'tw' constant you can pick property names that identically match the element or #id of intended use.  Then the html markup has unambiguous names for the applied styles.   In the example above, all `<li>` elements refer to the `tw.li` property for their tailwind classes.   No ambiguity there !

4. The `tw` constant can exported from one file and imported into another file essentially sharing your styles without having to create [@apply directives](https://tailwindcss.com/docs/functions-and-directives#apply).  Use of @apply directives is discouraged so exporting the tw constant is a very viable workaround which preserves flexible, upgradable, and shareable styles between multiple components.

5. Although the actual class list is extracted into a local constant, they are still being applied to the DOM element for which the styles are intended to modify. This respects the principles of [Locality of Behavior](https://htmx.org/essays/locality-of-behaviour/) while at the same time providing some improvements in code maintainability, encapsulation, readability, and reduced errors of omission while at the same time still sharing common styles across multiple elements or even files.

6.  Changes made effect all elements that refer to that `tw.property`.  No more need for multi-cursor or find/replace to make multiple changes to repeated elements.

7.  Extra utility classes can be extemporaneously added by simply concatenating them to the value of the `tw.property`.  In the example above, a  `md:col-span-2` class is added to only two of the `<li>` elements by concatenation. (see the [Merge](#merge-conflicts) discussion below for some precautions).

7.  Copilot AI quickly learns this strategy and begins suggesting the correct `tw.property` you will likely attach to the class attribute of elements which speeds up styling while also avoiding typos.  

*There is considerable controversy about this technique.* However developing hyperComponents that heavily rely on long strings of Tailwind classes became a more manageable task by extracting the class list into a local Astro `tw` constant.   

One potential problem with this strategy is losing code completion and Intellisense for Tailwind which VSCode triggers when edits are made to an elements 'class' attribute.   However, this can be restored by opening VSCode Settings and searching for `TailwindCSS: Class Attributes`. Click the `Add Item` button and include the string value `tw`.    Now when you modify properties of the `tw` constant, you should be offred Tailwind code completions suggestions and Intellisense.

Before you walk away and try to refactor all the example code in this library, you may give this strategy a try and see if you might end up liking it.

## Are you missing a space char?

Concatenation of multi-line strings introduces a subtle mis-step that is easy to fall into. 

Tailwind class lists are space-separated values.   So, don't forget to include a space at the end of each line in your multiline construct.  If you leave it out, concatenation merges two adjacent class names together and breaking your style code.  

 You will see this in the browser DevTools when inspecting your class list. For example, you might find `text-green-300font-bold` or something analogous.   The missing space char will break your Tailwind list, so watch for this if you are using multi-line strings with string concatenation.

Of course you can use back-tick delimited strings instead, but then all white-space is also preserved in the resulting markup, including line returns. 


## Merge Conflicts

If you combine mulitple Tailwind classes that affect the same CSS property, the outcome is not always what you expect.  For example, if you want to change a background color from red to green, you might be tempted to just add `bg-green-500` to your class list.  

However, what you will  notice is the background of this element is still red.  What happened to the `bg-green-500` class?  Well, Tailwind does not automatically tree-shake any overriding classes.  What you think must happen does not happen by default, leading to unexpected results.  

This problem becomes manifest when you begin adding more and more styling to an element, such as hover:, dark:, focus: etc creating a long, run-on string with many classes and you gradually loose awareness that one Tailwind class is stepping on another.

It appears that Tailwind (as of this time) uses a sorting algorithm that includes alpha sorting of class names.  Since 'red' comes after 'green' in an alpha sort, then 'red' still wins.  The bottom line is that the results of combining classes affecting the same CSS property are **unpredictable**.

One of the goals of this library is provide hypermedia components with rudamentary base styles that are intended to be fully customized by sending Tailwind classes through props.   This opens up the vulnerability for unpredictable clashes between the default styling and the props.

## The Solution

To handle this problem, the hyperComponents library makes liberal use of the amazing third party libary [tailwind-merge](https://www.npmjs.com/package/tailwind-merge).  This utility reliably sorts classes and resolves conflicts with an appropriate **last-wins** approach.   So, if you want a class to dominate, you simply provide it as the last argument to the twMerge() method provided by  this library.  

For a full explanation of why and how this works, consult the [tailwind-merge docs](https://www.npmjs.com/package/tailwind-merge)

You will find many examples of using `twMerge()` throughout this code base.
