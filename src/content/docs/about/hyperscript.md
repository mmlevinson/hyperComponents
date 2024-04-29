---

title: "Hyperscript"
description: "Hyperscript  -- the new player in Front End interactivity"
---

## Hyperscript Options

Hyperscript is a new front-end scripting language with syntax patterned after xTalk and the popular HyperTalk control language of HyperCard.active

The syntax is English prose-link with emphasis on self-documenting code by using familiar phraseology.active

HS emphasizes Locality of Behavior (LoB) to keep functionality at the site of intent.   LoB also emphasizes understanding the action of code simply by inspection, reducing the cryptic nature of programming logic, improving understanding and code maintenance.active

However, there are some unique features as well as possiblities.  The official docs are the best place to learn in depth, but a review of some of the important topics will help the facilitate understanding of the example Components in this library.

### Embedded Hyperscript

There are several ways to embed HS code into your client side markup:

###### 1. Inline using the `_="` attribute as in the code fragment below

###### 2. Inline using a `script=""` or `data-script=""` attribute

###### 3. Traditional `<script>` tag within your component markup using the `type="text/hyperscript"` attribute`

###### 4. Importing HS code from an external file with the `._hs` extension. In Astro projects, these imports should be placed in the `<head>` of your main layout file.

### Declaring Functions

The `def` keyword is used to declare a function.  You can pass parameters to any function.   

### Using Behaviors

Functionality that can be applied to more than one html element can be encapsulated in a Behavior, as in the code block below:

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

For this Component library, we make use of all the above embedding techniques for HS code.   Not all code examples will use Behaviors.  

In some situations, the same Component will be presented with Behaviors, `<script>` tags, and inline `script=""` attributes.

The shortcut attribute `_="` is very common. 

**However, the Components in this library are for instructional purposes so using so a preference is stated here for the using the `script=""` attribute to explicitly indicate that the element has HS code attached.**

### Operator Precedence (not!)

### Async Agnostic

### Using Objects