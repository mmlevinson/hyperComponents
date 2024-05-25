### Sending values to Astro endpoing

In the Search example at htmx.org, there is no clue how the <input> element sends the its value to the backend.  All <input> have a value attribute.   The text of the [value=""] somehow makes it to the server in the example, but its assumed to be sent by default and is likely being extracted in Python.-translate-x-6
How to do this in Astro?

Here is the example I was working with:

```html title="TestSearch.astro"
  <!-- TestSearch.astro -->
	<Searchbox id="searchbox" searchPath="/api/speeches/match/" target="#speech-transcript" swapStrategy="innerHTML" />

	```html title="Searchbox.astro"
	<!-- Searchbox.astro -->
	<input type="hidden" id="index" name="index" value="2"/>
	<input
		  id=`${id}`
			type="search"
			name="search"
			placeholder={placeholder}
			class={tw.input}
			hx-post=`${searchPath}`
			hx-include="[name='index']"
			hx-trigger="input changed delay:500ms, search"
			hx-target=`${target}`
			hx-swap=`${swapStrategy}`
			>
		</input>
	```



Each Astro endpoint gets a **context** object which can be destructured into {request, url, params, cookies, locals, session}

However, if you send Astro an hx-post from the <input> using say a **change** event, where is the [value=""]? 

Logging the request shows many properties of the request object, but no **value**.  The **params** is empty and the **url** just contains the path without the data of the <input> element.

After much debugging using console.log, the value of the input is found in logging the request.text() yielding

#####  search=xyz&index=2

In order to get this result, I needed somewhere to store an number indicating the array index for the speech I was looking up.   I used a hidden <input> for lack of a better idea.  Then I included the value of that input into the request using hx-include="[name='index']" (using an attribute selector syntax to identify the correct element)

This is a long round-about way to pass the values but now that I found this, I can split the string returned by request.text() and use these for returng a hypermedia response.

This script then updates the hidden <input> which is relayed to the endpoint by hx-include

```js

script="
				on click 
					fetch /api/speeches/${speech.id} as text then 
					put it into the #{'speech-title'}
					fetch /api/speeches/${speech.id}?transcript=true as html then 
					put it into the #{'speech-transcript'}
					set the value of #{'speech-index'} to the '${speech.id}'
				"

```