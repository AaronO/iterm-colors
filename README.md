iterm-colors
================

Converts iTerm2's color schemes (plist files) to a JSON array useable in term.js and others

## Install

```
npm install -g iterm-colors
```

## Example

### Binary

```bash
$ iterm-colors ~/Downloads/Monokai.itermcolors
["#615d4c","#e53865","#a8ff60","#ddcf69","#6bcce6","#ef8930","#9879f9","#eeeeee","#615d4c","#e53865","#a8ff60","#ddcf69","#6bcce6","#ef8930","#9879f9","#eeeeee"]
$
```

### Library

```js
// Core fs module
var fs = require('fs');

// iterm-colors module/function
var icolors = require('iterm-colors');

// ansiColors will be an array of hex colors for each ainsi color
// in the .itermcolors file
var ansiColors = icolors(fs.readFileSync('SOME_FILE_PATH.itermcolors'));

```

### Library (bundle access)

```js
// iterm-colors module/function
var bundle = require('iterm-colors/bundle.json');

// Github's theme
bundle.github;

// Monokai theme
bundle.monokai_soda;

...
```
