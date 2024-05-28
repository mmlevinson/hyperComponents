---
title: Background  
description: What is hyperComponents?

---

### Component Libraries

Most developers are implementing modern GUIs by downloading pre-rolled Web Components from a library.  There are many public and commercial libraries to choose from including [Flowbite](https://flowbite.com/), [PrimeTech/PrimeView](https://www.primefaces.org/primeview/showcase/),  [twElements](https://tw-elements.com/), [shadcn ui](https://shadcn.com/docs/introduction), [UIKit](https://getuikit.com/), [Bulma](https://bulma.io/),  etc. 

Also, [React](https://reactjs.org/), [Vue](https://vuejs.org/), [Angular](https://angular.io/), [Svelte](https://svelte.dev/), [Stencil](https://stenciljs.com/), etc. are popular JavaScript frameworks for building your own reuseable componenents.

However, most pre-rolled solutions are not utilizing the advantages of [HyperMedia](https://htmx.org/essays/hypermedia-apis-vs-data-apis/).  Instead,  components shipped by these libraries are scaffolded by serializing JSON (or other raw data) which is shipped to the browser to establish application state along with a JavaScript bundle instructing the browser on how to build,  insert, and update the rendered DOM elements built from the raw data. An important crux of this strategy is the requirement to maintain synchronization of the application state between the server and the browser, particularly during any updates.

An exciting alternative is the implementation of hypermedia transfer as the engine of state management ([HATEOS](https://htmx.org/essays/hateoas/)). 

### What is HyperMedia

Sending **html markup** from an API endpoint instead of raw data is more natural and vastly more efficient since reduced browser resources are required on the client side.  Afterall, a browsers entire purpose (for which it is highly optimized) is to render html markup directly to the screen.   APIs which return finished html markup circumvents the need for complex JS instructions which the browser then needs to implement in order to render/update DOM elements.  

[Hypermedia](https://htmx.org/essays/hypermedia-apis-vs-data-apis/) (instead of data) as an API endpoint has the advantages of:

1.  Shipping little or no JavaScript to the browser
2.  Faster load and rendering times, with enhanced UX
3.  Reduced build steps and resulting bundle sizes
4.  Reducing RAM and CPU loads on the browser, and 
5.  Full support for modern browser side APIs for enhanced UX such as View Transitions, Intersection API, etc.


 Serving html as a response to an XHR request is not a new concept.  In fact, it dates to the origins of the REST API concept outlined by Roy Fielding in his PhD dissertation but rarely followed in modern web development.   So the resurgence of hypermedia as a response to a server request is truely **'Back to the Future'**.    The subject is too broad to cover here, so please review the [essays on hypermedia](https://htmx.org/essays/) on the [htmx web site](https://htmx.org/) and download/purchase the [Hypermedia Systems](https://hypermedia.systems/) book for a comprehensive review.


### What are hyperComponents

hyperComponents is an new open source project initiated to address the need for pre-rolled, user interface components based on exchanges of hypermedia instead of data.  In this library, hypermedia exchanges are facilitated principally by [HTMX](https://htmx.org/docs/).  Client side user interactivity and event management is provided by [Hyperscript](https://hyperscript.org/).   To preserve [Locality of Behavior](https://htmx.org/essays/locality-of-behaviour/) for styling, [TailwindCSS](https://tailwindcss.com/) utility classes are used.

hyperComponents are built with [Astro](https://astro.build/docs) because this tool is uniquely  straightforward for creating Web components and custom API endpoints in the same code base which is ideal for hypermedia exchanges.  

### Conclusions

hyperComponents is an experimental project to leverage the power and utility of hypermedia to create usable and stylistically attractive standard Web interface components that can be easily incorporated in any code project.   

A principle goal is to be instructive and educational with the included code examples in order to further the concepts of hypermedia in general.