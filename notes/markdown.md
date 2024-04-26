## Terrible visual Markdown editor was default in VSCode. 

 It stripped out frontmatter boundaries and hid  the actual markdown tags, etc.
 It also did not provide all the Markdown features and hid the ones I added

 I need to remove this editor and found this on StackOverflow, which worked
 Now I can write Markdown with no interference


### From the instructions for Office Viewer

If you want to use the original vscode editor, insert this in your settings.json.

### { "workbench.editorAssociations": { "*.md": "default" } }

