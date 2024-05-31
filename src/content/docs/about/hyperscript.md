---

title: "Hyperscript"
description: "Hyperscript  -- the new player in Front End interactivity"
---

## Hyperscript Options (A and B)

[Hyperscript](https://hyperscript.org/) is a new front-end scripting language with syntax patterned after the  [HyperTalk](https://en.wikipedia.org/wiki/HyperTalk) control language of [HyperCard](https://hypercard.org).

The syntax is English prose-like with emphasis on self-documenting code by using familiar phraseology.

HS emphasizes [Locality of Behavior (LoB)](https://htmx.org/essays/locality-of-behaviour/) to keep functionality at the site of intent.   LoB also emphasizes understanding the action of code simply by inspection, reducing the cryptic nature of programming logic, improving understanding and code maintenance.

[Hyperscript](https://hyperscript.org/) presents some unique features as well as possiblities which are worthy of a brief summary.   The [official docs](https://hyperscript.org/docs/) are the best place to explort HS in depth, but a review of some of the important topics here will help the facilitate understanding of the example Components in this library.

Hyperscript allows different options for embedding script code into an Astro component, as detailed below. 
To assist the library user a `brief naming convention is put forward` which provide a hint as to which embedding style is being used in that particular example.   

**Style A**:  Examples with names ending in `_A` utilize `attribute embedded Hyperscript` code

**Style B**:  Examples ending with `_B` utilize `behaviors to embed Hyperscript` code

For educational purposes, some examples in this libary are offered in both embedding styles.  Whether the `A style` or `B style` of Hyperscript embedding is used, the code functions identically.

Below is an explanation of all the options for embedding Hyperscript into your Astro components.

### Embedding Hyperscript

There are several ways to embed HS code into your client side markup.


###### 1. As a `script=""` or `data-script=""` attribute of any html element

```html title="Hyperscript attributes"
<div script="on click send 'Hello' to me">
	Click me to say Hello
</div>

<div data-script="on click send 'World' to the next <output/>">
	Click me to say Hello
</div>
<output></output>

```

###### 2. Using the shorthand `_="` attribute

```html title="Underscore attribute (_='')"
<div _="on click send 'Hello' to me">
	Click me to say Hello
</div>
```

###### 3. Traditional `<script>` tag anywhere within your markup

You must include the `type="text/hyperscript"` attribute in your \<script\> tag to tell the browser to interpret the content as Hyperscript.

```html title="<script> tag"
<script type="text/hyperscript">
	on click send 'Hello' to me
</script>
```

###### 4. Importing HS code from an external `._hs` file. 

In Astro projects, these files should be placed in your /public folder and the \<script\> import placed into the  `<head>` tag of your main layout.

```html title="<head> element import statement"
<script src="/assets/scripts/my-hyperscript-file._hs"></script>
```

### Using Behaviors

Behaviors are one strengths of Hyperscript. Behaviors allow you to encapsulate functionality in one place that can be used in many other places.   

Behaviors are declared with the `Behavior` keyword.  Parameters can be passed into Behaviors.

```js "Behavior Removable"
  Behavior Removable
		on click
			remove me
		end
	end
```

After defining a Behavior in a globally accessible HS, you can apply the Behavior to any html element using the `install	BehaviorName` syntax as in:

```html "install=\"Removable\""

	<div install="Removable">
		Click here to use the Behavior
	</div>
```

The hyperComponents library will use of all the above [embedding](#embedding) styles for HS code.   Not all code examples will use Behaviors.  

In some situations, the same hyperComponent will be presented differently using Behaviors, `<script>` tags, or  `script=""` attributes.

The shortcut attribute `_="` is the most common technique for embedding element level Hyperscipts.

**However, the hyperComponents library is principally for instructional purposes so it is the author's preference to use the more descriptive `script=""` attribute to explicitly indicate that an element has HS code attached.**

### Events

The DNA of HS is event management.   All actions invoked by HS are in response to an event triggered by an `on eventName` phrase.  Available event modifiers which [determine handling of multiple events](https://hyperscript.org/docs/#event_queueing) are:

1.  on `every` eventName 
2.  on eventName `queue all`
3.  on eventName `queue first`
4.  on eventName `queue last`

In addition, an optional event `filter` allows you to restrict how/when an event is fired, as in:

```js
<div script="on event[key='Escape'] ...">
<div script="on mousedown(button==1) ...">     

```

The square bracket syntax evaluates an expression which is used to filter the event.

By default an `event.detail` object is provided to each handler, from which you can destructure the individual properties using parentheses.

You can send custom events to other DOM elements using either `send` or `trigger` syntax, as in:

```js
<div script="on thisEvent trigger anotherEvent on the <div.eventTarget/>">
<div script="on thisEvent send anotherEvent to the  <div.eventTarget/>">
```


### Declaring Functions

The `def` keyword is used to declare a function in HS no matter what embedding strategy you choose.  You can pass parameters to any function.

```html title="Function declaration" "def"
<script>
	def sayHello(name)
		send 'Hello ' + name to me
	end
</script>
```

### Operator Precedence (not!)

Unlike most programming languages where a defined precedence is established for mathematical operators, Hyperscript expects the programmer to explicitly define the order of operations using parentheses `()`.  This avoids some side-effects typical of other languages where the precedence is baked in and sometimes leads to unexpected results.

### Async Transparency

Many commands, including Hyperscripts `fetch()` command are implemented asynchronously behind the scenes.   Hyperscript handles Promise resolution and error management for you.  You can expect a Promise to be resolved before the next HS code line is executed, as would be for the async/await syntax in vanilla JS.

You can explicitly designate a function as asynchronous with the `async` keyword but any system or server side Promise based methods are still resolved before HS proceeds with the next code line.   

### Using Objects

You can set up key:value pairs in Hyperscript using the `{key:"value"}` syntax.  You can access properties of an object in HS with -translate-x-6

1.  x.key
2.  x['key']
3.  the key of x
4.  x's key

### Null Safety

IF you access an object or property the result is null (ie does not throw an error)

### Logical Operators

In addition to the standard comparison operators, [natural language comparisons](https://hyperscript.org/expressions/comparison-operator/) are available, such as: 

1.  is less | greater | than
2.  is equal | not equal to
3.  exists | matches | is empty
4.  and | or | not

To test if an element possesses a certain CSS selector, use the `matches` operator, as in:

<div _="if me matches '.my-class' then log me">
	Yes
</div>

### Calling Functions

Use the syntax `call someFunction()` to invoke a either a HS defined function or a native JavaScript function.  For example  `call me.setFocus()`  invokes the JavaScript function setFocus() on the current element.

Using the `js` keyword in an event handler creates a command that executes JavaScript, including passing parameters and returning results.  The `end` keyword terminates the block.

To embed JS code into a `<script type=text/hyperscript>` top level block, there are some additional precautiosn using the `end` keyword which you can review [here](https://hyperscript.org/features/js/).



HS also provides the [pseudo-command](https://hyperscript.org/commands/pseudo-commands/) syntax where you can invoke a function call as a noun instead of a verb, for instance


```js title="pseudo-command"
get the customFunction() then put it into my innerHTML
```

### DOM traversal

In HS, you do not call `getElementById`, `querySelectorAll`, etc.  Instead you take advtange of a shorthand syntax called `DOM literals` which are strings  (or [expressions](https://hyperscript.org/expressions/) that yield a string) wrapped with special characters to tell HS you want to access one or more DOM elements.   Behind the scenes HS invokes the standard queries for you.  You can get or set any value accesed by a DOM literal syntax.

Expressions inside of curly braces are evaluated to yield a string which is then uses as the literal value for DOM access.


1.  `.className` or `.{expression}` refers to  an element by a class name  
2.  `#id` or `#{'someIdString'}` refers to  an element by its identifier
3.  `<selector/>` returns an array of all elements matching the specified CSS selector
4. `@attributeName` refers to an element with the specified attribute and/or value
5.  `*propertyName` get or set a style property of an element

With CSS selectors, HS returns all elements that match, so you will receive an array of elements.

You can traverse the DOM with the additional keywords:

1. `closest` closest element matching a CSS selector you provide
2. `nearest`
3. `parent` begins searching at the parent of the current element
4. `next` scans forward from current element looking for specified CSS Selector
5. `previous` scans backward from current element looking for a specified cSS Selector
4. `first` the initial element
5. `last` the final element
6. `random` any random element
7. `in` looks inside of the specified element
8. `from` begins a forward search where you specify, with the current element as default
9. `within` restricted subset of the DOM in which to search (default is the entire document)
10. `with wrapping` allows the search to wrap around 

### Special Keywords

HS provides syntax which helps for descriptive senctence structure which is familiar in English sentence structure, such as...

1. `me`, `my`, or `I` represents the current element of an event handler
2. `it`, `its`, or `result` represents the return value of the last command
3. `event` represents the triggering event
4. `body` represents the body of the document
5. `target` represents the target of the current event
6. `detail` contains meta-data properties for the invoked event
7. `sender` represents the element initiating the current event
8. `the`, `then` are interpreted as white space and are used for coding sugar.
9. `end` terminites a code block but is optional if nothing follows anyway.


### Arrays

Standard array syntax and access via index works with a few caveats. HS will loop most arrays for you if possible so you don't need to explicitly call `for`.  The example below loops all `.bar` elements and adds a `.foo` class to each.

```js
<div script="on click add .foo to .bar"></div>
```

When a property is an array-like composition, HS will flat-map the results into a single linear array, as in:

```js
set allDivs to <div/>   -- returns an array of a div elements
set divChildren to the children of allDivs -- retrieves all children, walking each div element
```

### Variables

Variables are created  `set` or `put` and accessed with `get`
YOU can scope variables with the `local` `element` or `global` keyword preceeding the variable name.   Also, using a colon prefix is a shorthand for an element scoped variable which remains valid as long as the element is in the DOM.   The  `$` prefix defines a globally scoped variable. 
