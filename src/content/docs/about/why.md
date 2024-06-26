---
title: Why hyperComponents
description: What does hyperComponents have to offer?

---

hyperComponents leverages three state-of-the-art utility libraries that facilitate building dynamic user interfaces without leaning upon large and complex JavaScript frameworks.

1. [HTMX](https://htmx.org/): A fast, small, and feature-rich library for issuing AJAX requests from any DOM element with flexible updating of the DOM using hypermedia exchanges.
2. [HyperScript](https://hyperscript.org/): An client side scripting language with English-prose syntax for adding rich event management and interactivity to web pages.
3. [TailwindCSS](https://tailwindcss.com/): A comprehensive styling library of based on discrete utility classes.

All these libraries advance the [Locality of Behavior](https://htmx.org/essays/locality-of-behaviour/) principle by centralizing the code base at the intended target of those actions, improving code understanding and maintenance.

In the examples provided, Ajax (XHR) requests are issued, and DOM updates performed by either [HTMX](https://htmx.org/docs/) or the equivalent fetch command exposed by[HyperScript](https://hyperscript.org/).   

Interactivity on the client side is provided exclusively by [HyperScript](https://hyperscript.org/).  

Both of these libraries support extensive event listening and management, including standard system events, library specific events and user-defined custom events.  

Elegant and responsive styling is provided by the popular utility class approach of [Tailwind.css](https://tailwindcss.com/).  

And finally, the Vite-base [Astro](https://astro.build/docs) build tool wraps everything neatly together by providing simple component architecture, file-based routing, and custom API endpoints which makes it an ideal tool for sending hypermedia responses to AJAX requests.

By making all hyperComponents source code public, with copy and paste directly into your project, the techniques implemented by these powerful libraries can be both instructional and functional.

