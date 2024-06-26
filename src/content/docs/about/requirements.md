---
title: Requirements
description: What you need to get started with hyperComponents
---

## Astro

hyperComponents in this project were created using the [Astro](https://astro.build/docs) build tool. Although the structure of each hyperComponent could be duplicated using any modern web tooling, [Astro](https://astro.build/docs) offers unique advantages such as 

1.  Simple, easy syntax for creating reusable components,
2.  [File-based page routing](https://docs.astro.build/en/basics/astro-pages/#file-based-routing) without additional tooling,
3.  [Markdown](https://www.markdownguide.org/basic-syntax/) and [MDX](https://mdxjs.com/)  as full class citizens, converting them directly to HTML.
4.  **Simultaneous back-end API development** (i.e. [custom endpoints](https://docs.astro.build/en/guides/endpoints/#server-endpoints-api-routes)) within the same project without the need to spin up a separate Node/Express or Django back end.  

These advantages make Astro an excellent choice for building hypermedia applications and controls.

To utilize hyperComponents by simple copy/paste, you will need build your project with [Astro](https://astro.build/docs) to conform with their component architecture.  Otherwise, the code snippets in this library simply provide examples which you will need to adapt to your favorite Web component build system.

To install Astro, please visit the [Astro.build](https://astro.build/docs) site.  There is extensive documentation on both installation and implementation of Astro as a modern Vite based build tool and development environment. 

## Tailwind

[TailwindCSS](https://tailwindcss.com/) is fully supported in Astro, but requires installation of their Tailwind adapter.   Astro makes this simple using a single terminal command which simultaneously installs the correct adapter into your *astro.config.mjs* file while also creating a basic TailwindCSS configuration file in your `src` folder.  

```bash
npx astro add tailwind
```



## Tailwind Merge

hyperComponents were intended to be customizable by passing Tailwind class names via props.  This means that hyperComponent styles are not frozen and developers can fully customize their appearance in the code block where the component is being used.   This increases the versatility of the hyperComponent without extensive re-writing.

It is a trivial matter to pass Tailwind CSS utility classes into a component using prop.  However, just adding new class names to an established (or default) list of classes yields **unpredictable** results.   It appears that the current version of Tailwind sorts class lists alphabetically, so if you add a class name to an element manually, it may not apply if its alpha sort happens before another class name.

This problem is resolved using the third-pary library [tailwind-merge](https://www.npmjs.com/package/tailwind-merge).    This library ensures the 'last class name wins' rule applies.    To allow fully customizable hyperComponents, you are encouraged to install tailwind-merge.

```bash
npm install tailwind-merge
```

There is a full discussion of the peculiarities of Tailwind in the next docs page.


## HyperScript

Installation of [HyperScript](https://hyperscript.org/) is simply by including the appropriate script tag via CDN.  For Astro projects, place the following script tag in the head tag of your main layout page.

```html
<script src="https://unpkg.com/hyperscript.org@0.9.5/dist/hyperscript.module.min.js"></script>
```

## HTMX

There are 3 possible strategies for installing HTMX...

1.  via CDN using the following script tag.

```html
<script src="https://unpkg.com/htmx.org@1.9.12" integrity="sha384-ujb1lZYygJmzgSwoxRggbCHcjc0rB2XoQrxeTUQyRjrOnlCoYta87iKBWq3EsdM2" crossorigin="anonymous"></script>
```

2.  via npm using

```bash
npm install htmx
```

3.  via direct download and bundling of the minified script

```html
https://unpkg.com/htmx.org@1.9.12/dist/htmx.min.js
```

 It is recommended that you use option #3 for production use.  Clicking that link delivers the raw minified code which you should copy-paste into a file named `htxm.min.js`.  In Astro projects, you place the resulting htmx.min.js file into your `public` folder.  Then simply 'import' the minified version into the head tag of your main layout file.

 You must also add the `is:inline` attribute to the script tag which tells Astro not process the contents of this file during build and to simply serve it to the browser unmodified.

```html
<script src="/htmx.min.js" is:inline></script>
```

