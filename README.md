iterm-colors
================

Converts iTerm2's color schemes (plist files) to a JSON array useable in term.js and others

## Install

```
npm install -g iterm-colors
```

## Theme screenshots

##Screenshots##

**blazer**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/blazer.png)

**chalkboard**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/chalkboard.png)

**dark_pastel**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/dark_pastel.png)

**desert**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/desert.png)

**espresso**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/espresso.png)

**github**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/github.png)

**grass**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/grass.png)

**homebrew**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/homebrew.png)

**hurtado**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/hurtado.png)

**idletoes**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/idleToes.png)

**kibble**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/kibble.png)

**man_page**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/man_page.png)

**monokai_soda**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/monokai_soda.png)

**neopolitan**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/neopolitan.png)

**novel**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/novel.png)

**ocean**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/ocean.png)

**pro**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/pro.png)

**red_sands**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/red_sands.png)

**seafoam_pastel**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/seafoam_pastel.png)

**solarized_darcula**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/solarized_darcula.png)

**solarized_dark**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/solarized_dark.png)

**solarized_light**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/solarized_light.png)

**symfonic**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/symfonic.png)

**terminal_basic**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/terminal_basic.png)

**vaughn**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/vaughn.png)

**zenburn**

![Screenshot](https://github.com/AaronO/iterm-colors/raw/master/screenshots/zenburn.png)

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

## Disclaimer

The original `iTerm2` colorschemes (and screenshots) were sourced from here : https://github.com/mbadolato/iTerm2-Color-Schemes.
