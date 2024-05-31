---

title: How to Contribute
description:  Instructions to Authors of hyperComponents

---

## Contributors

At this time, hyperComponents is a nascent project.   If there is need, the project will grow by contribution from the community.

Pull Requests through the GitHub interface are welcome.  Please fork the repository, make your additions, and submit a Pull Request.

## Refactoring

Understand that your original source code may be the best ever, but if it is hard to understand then some refactoring or commenting may be needed.   The site managers may add comments, or even refactor some parts of your contribution to help the users grasp your intention.

At no times is refactoring intended to change the purpose of your contribution, nor to create a different version.   You will be contacted through your PR to discuss if fundamental changes are needed.

## Styling

The original example code on this site represents an opinionated writing style.  For consistency across the library, your contribution will be reviewed for component and script style.  

There may be some tweaks to the styling or comments added to assist users in how to implement your contribution.


### Tailwind

Your are encouraged to stay with Tailwind utility classes for styling.  In some situations, there is no appropriate TW class.   In that situation, a component based `<style>` tag should be used.  Astro supports the `is:global` attribute for `<style>` tags to apply styles to the global scope but this is discouraged.  CSS should remain scoped to the component you are writing.

Long, verbose TW class lists are difficult to maintain. In particular, they are difficult to apply to repetitive elements (like `<tr>`, `<td>` `<li>`, etc.).  For this reason, I prefer to remove the class list from the element and instead place a `tw` object in the Astro component script (ie frontmatter).  Then properties of the `tw` object can be interpolated into the elements `class` attribute.  

The advantage of this technique is that making minor changes to the `tw` object will automatically update the class list for every element that uses that object.  

Click on the [Tailwind Issues](/about/tailwind/) doc for a detailed discussion of this technique.

### Hyperscript

To assist in writing HS code, there is a VSCode extension for color syntax hilighting. 

Comments in HS are created with double-dashes  (--) followed by a space.  These comments can be inline (ie the remainder of the line is ignored)

Although HS also supports common C-type comments, please reserve these for multi-line comments only.   

Most coders prefer comments at the beginning of a code block.   However, I find a one-line brief comment following the `end` keyword of a code block helpful b/c it also clarifies which method  has just completed.  

```astro

<div script="
		on mouseleave
		  ... 
		end -- mouseleave handler
		
		on someCustomEvent
			...
		end -- someCustomEvent handler">

</div>

```

## VSCode Extensions

If you are using VSCode, you will find helpful Extensions for writing hyperComponents:

1.  Astro official extension (by the Astro team) provides color syntax highlighting and code completion in .astro files

2. Houston (by the Astro team) is a color theme that works great in Astro code (derived fromn Sara Drashner's popuular Night Owl theme)

3.  MDX (by unified) for using components within markdown files (including color syntax highlighting for any JSX code within markdown)

4. Path Intellisense (by Christian Kohler) providing autocompletion of file paths making it easier to reference the correct file

5.  _hyperscript  extension (by dz4k) which provides syntax highlighting for HS.

6. fold-level (by denjay) places 1 through 7 clickable indicators in the Activity Bar for quickly folding or unfolding code base on indentation level. 

7. Relative Path by (jakob101) uses Cmd-Shift-H (or Ctl-Shift-H) to paste in the path of a file import from anywhere in your project.

