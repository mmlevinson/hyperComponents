# hyperComponents Library

1.  Free and Open Source
2.  Modern Web component library
2.  Styled with Tailwind
3.  DOM updating via htmx
4.  Client side interactivity via HyperScript
5.  Wrapped together with Astro build toolbar

## Background

##### -Why do only anchor tags and form elements submit requests to backend servers?

#####  -Why are modern APIs sending JSON instead of html?

#####  -Why cannot any response be directly swapped into the DOM (anywhere !!, and with smooth transitions...)

Modern web apps are typically built with JavaScript frameworks which provide dynamic updating based on changes of state.  However, state is always held on the server side as the 'one source of truth' and then sent to the browser for gnerating the appropriate updates to the DOM.

Is not the browser optimized for manipulating  DOM elements?    In fact, converting JSON or other raw data into DOM elements  is a CPU expensive for the browser.  It is much simpler for the server to just provide the final html markup and let the browser do what it is optimized to do ... insert or update elements.


Afterall, 2/3 of the worlds users view the Web exclusively on a mobile device (which is inherantly CPU and RAM limited).   Removing the load from the browser can have significant performance benefits

These are the foundations of hypermedia exchanges (instead of data exchanges.)

By writing both the front and backend code the gaps are closed and markup can be layed out on the server and just sent to the browser with instructions for where to put it.
.

## Mission

With the introduction of htmx, AJAX requests can now  be sent from any DOM element and the html response directly inserted anywhere in the DOM. 

Using a suite of html attributes, htmx extends the capabilities of any element to response to events and  update the DOM.

HyperScript is a new client-side scripting language based on the popular HyperTalk pioneered for Apple's HyperCard application.   HS adds  powerful client side functionality that typically was the territory of JavaScript (with querySelectors and addEventListery calls).

## What is hyperComponents?

This library is an instructional set of Web Components (menus, accordions, search inputs, etc.) written to take advantage of htmx and HyperScript.   Styling is mostly via Tailwind utility class so they are easy to modify for your project.

Astro is the preferred build tool because it offers custom API endpoints without the need to write additonal coded for  a separate  Node/Express or Django server.   Astro provides a simple architecture for both components and custom endpoints.   This puts the developer into the driver seat, with control of both the front and back ends so that hypermedia can be asked for (by AJAX) and delivered (by Astro endpoints).

## Mission

hyperComponents is a free open source collection of components written to emphasize hypermedia exchanges (as opposed to data exchanges). All examples are offered without fee or licensing restrictions.   The goal is to provide a starter kit for newcomers moving into hypermedia, htmx, and Hyperscript.    

You are encouraged to make any changes or modifications to the example code, and to offer our contributions to the hyperComponents community via pull requests.



