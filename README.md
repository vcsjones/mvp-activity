MVP Activity Tracker
============

⚠️This project has been archived because it no longer functions for reasons beyond
this repository's control. See https://github.com/vcsjones/mvp-activity/issues/1
for details.


This extension is identical in behavior to the MVP Activity Tracker bookmarklet, but
implemented as a browser extension instead.

Browser extensions don't have the Content-Security-Policy limitation that the bookmarklet
does, which prevented it from working on popular sites such as GitHub.

# Using

Simply grab the extension from the browser's extension store to get it installed. You'll
be asked to sign in once in a new browser window, then you can use the extension.

## Store installers

* Chrome: https://chrome.google.com/webstore/detail/mvp-activity-tracker/djllhdemfpgjphlhoaelkpppfgdkjgfk
* Firefox: https://addons.mozilla.org/en-US/firefox/addon/mvp-activity-tracker/?src=ss
* Edge: Available when Edge takes general submissions
* Safari: In Progress

# Building

Ensure you have typescript 2.0 installed and npm.

Use `npm install` to restore the typings files, and `tsc` to build, or VSCode.
