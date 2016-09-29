MVP Activity Tracker
============

This extension is identical in behavior to the MVP Activity Tracker bookmarklet, but
implemented as a browser extension instead.

Browser extensions don't have the Content-Security-Policy limitation that the bookmarklet
does, which prevented it from working on popular sites such as GitHub.

# Using

Simply grab the extension from the browser's extension store to get it installed. You'll
be asked to sign in once in a new browser window, then you can use the extension.

# Building

Ensure you have typescript 1.8 installedi and typings 1.4.

Use `typings install` to restore the typings files, and `tsc` to build, or VSCode.

TypeScript 2.0 support will come when VS Code support is mainstream for it.
