---

title: "Hyperscript"
description: "Hyperscript  -- the new player in Front End interactivity"
---

## Hyperscript Options (A and B)

Hyperscript is a new front-end scripting language with syntax patterned after xTalk and the popular HyperTalk control language of HyperCard.

The syntax is English prose-like with emphasis on self-documenting code by using familiar phraseology.

HS emphasizes [Locality of Behavior (LoB)](https://htmx.org/essays/locality-of-behaviour/) to keep functionality at the site of intent.   LoB also emphasizes understanding the action of code simply by inspection, reducing the cryptic nature of programming logic, improving understanding and code maintenance.

Hyperscript presents some unique features as well as possiblities which are worthy of a brief summary.   The [official docs](https://hyperscript.org/docs/) are the best place to explort HS in depth, but a review of some of the important topics here will help the facilitate understanding of the example Components in this library.

The examples in this library use different strategies for placing HS code into an Astro component, as detailed below. 
To assist the library user a `brief naming convention is put forward` which is a small attempt to indicate for the user which embedding stragey for HS code is being used in that particular example.   

**Style A**:  Examples with names ending in `_A` utilize `attribute embedded Hyperscript` code

**Style B**:  Examples ending with `_B` utilize `behaviors to embed Hyperscript` code

For educational purposes, some examples in this libary are offered in both embedding styles.  Whether the `A style` or `B style` of Hyperscript embedding is used, the code functions identically.

Below is an explanation of all the options for embedding Hyperscript into your Astro components.

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

The hyperComponents library will use of all the above [embedding](#embedding) techniques for HS code.   Not all code examples will use Behaviors.  

In some situations, the same hyperComponent will be presented differently using Behaviors, `<script>` tags, or  `script=""` attributes.

The shortcut attribute `_="` is very common technique for embedding element level Hyperscipts.

**However, the hyperCompnents library is principally for instructional purposes so it is the author's preference to use the more descriptive `script=""` attribute to explicitly indicate that an element has HS code attached.**

**As a naming convention, hyperComponents embedding  Hyperscript code using attribute will display an `(A)` suffix in the Component name (symbolic of 'attribute').**

**hyperComponents where HS is installed from a Behavior will display an `(B)` suffix in the Component name (symbolic of 'behavior').**

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

Unlike most programming languages where a defined precedence is established for mathematical operators, Hyperscript expects the programmer to explicitly define the order of operations using parentheses `()`.

### Async Agnostic

Many method calls, such as the 'fetch()' method are asynchronous behind the scenes.   All Promise resolutions and error management are handled for you behind the scenes in Hyperscript.

You can explicitly designate a function as synchronous with the `async` keyword but any system or server side Promise based methods will be resolved before HS proceeds with the next code line.   

### Using Objects

You can set up key:value pairs in Hyperscript using the `{}` syntax. 


