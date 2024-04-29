---

title: "Hyperscript"
description: "Hyperscript  -- the new player in Front End interactivity"
---

## Hyperscript Options

Hyperscript is a new front-end scripting language with syntax patterned after xTalk and the popular HyperTalk control language of HyperCard.active

The syntax is English prose-link with emphasis on self-documenting code by using familiar phraseology.active

HS emphasizes Locality of Behavior (LoB) to keep functionality at the site of intent.   LoB also emphasizes understanding the action of code simply by inspection, reducing the cryptic nature of programming logic, improving understanding and code maintenance.active

However, there are some unique features as well as possiblities.  The official docs are the best place to learn in depth, but a review of some of the important topics will help the facilitate understanding of the example Components in this library.

### Embedding Hyperscript

There are several ways to embed HS code into your client side markup:


###### 2. As a `script=""` or `data-script=""` attribute of any html element

```html title="Hyperscript attributes"
<div script="on click send 'Hello' to me">
	Click me to say Hello
</div>

<div data-script="on click send 'World' to the next <output/>">
	Click me to say Hello
</div>
<output></output>

```

###### 2. As an html attribute using the shorthand `_="` attribute as in the code fragment below

```html title="Underscore attribute (_='')"
<div _="on click send 'Hello' to me">
	Click me to say Hello
</div>
```

###### 3. Traditional `<script type="text/hypertext">` tag anywhere within your markup

```html title="<script> tag"
<script type="text/hyperscript">
	on click send 'Hello' to me
</script>
```

###### 4. Importing HS code from an external file with the `._hs` extension. In Astro projects, these imports should be placed in the `<head>` of your main layout file.

```html title="<head> element import statement"
<script src="/assets/scripts/my-hyperscript-file._hs"></script>
```

### Declaring Functions

The `def` keyword is used to declare a function in HS no matter what embedding strategy you choose.  You can pass parameters to any function.

```html title="Function declaration"
<script>
	def sayHello(name)
		send 'Hello ' + name to me
	end
</script>
```

### Using Behaviors

Behaviors are one strengths of Hyperscript. Behaviors allow you to encapsulate functionality in one place that can be used in many other places.   

Behaviors are declared with the `Behavior` keyword.  Parameters can be passed into Behaviors.

```js
  Behavior Removable
		on click
			remove me
		end
	end
```

After defining a Behavior in a globally accessible HS, you can apply the Behavior to any html element using the `install	BehaviorName` syntax as in:

```html

	<div install="Removable">
		Click here to use the Behavior
	</div>
```

The hyperComponents library will use of all the above [embedding](#embedding) techniques for HS code.   Not all code examples will use Behaviors.  

In some situations, the same hyperComponent will be presented differently using Behaviors, `<script>` tags, or  `script=""` attributes.

The shortcut attribute `_="` is very common technique for embedding element level Hyperscipts.

**However, the hyperCompnents library is principally for instructional purposes so it is the author's preference to use the more descriptive `script=""` attribute to explicitly indicate that an element has HS code attached.**

**As a file naming convention, hyperComponents embedding  Hyperscript code using attribute will display an `_A` suffix in the Component name (symbolic of 'attribute').**

**hyperComponents where HS is installed from a Behavior will display an `_B` suffix in the Component name (symbolic of 'behavior').**

### Operator Precedence (not!)

Unlike most programming languages where a defined precedence is established for mathematical operators, Hyperscript expects the programmer to explicitly define the order of operations using parentheses `()`.

### Async Agnostic

Many method calls, such as the 'fetch()' method are asynchronous behind the scenes.   All Promise resolutions and error management are handled for you behind the scenes in Hyperscript.

You can explicitly designate a function as synchronous with the `async` keyword but any system or server side Promise based methods will be resolved before HS proceeds with the next code line.   

### Using Objects

You can set up key:value pairs in Hyperscript using the `{}` syntax. 


