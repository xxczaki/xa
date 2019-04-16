<p align="center">
  <img src="https://i.imgur.com/2n3U5I8.png" href="https://github.com/xxczaki/xa" height="256">
  <h2 align="center">xa</h2>
  <p align="center">Simple console logger, that works in Node.js, Electron and the Browser :heart:<p>
  
<p align="center">  
<a href="https://travis-ci.org/xxczaki/xa"><img src="https://travis-ci.org/xxczaki/xa.svg?branch=master" alt="Build Status"></a> <a href="https://github.com/sindresorhus/xo"><img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" alt="XO Code Style"></a> 
<a href="https://www.youtube.com/watch?v=9auOCbH5Ns4"><img src="https://img.shields.io/badge/unicorn-approved-ff69b4.svg" alt="Unicorn"></a>
  </p>
  
 
 <p align="center"><img src="screenshot.png" alt="Screenshot"></p>

## Installation

```
npm install xa
```

<a href="https://www.patreon.com/akepinski">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## Usage

```js
const xa = require('xa');

xa.success('Build finished!');
xa.custom('TITLE', 'Nice description', {titleColor: 'yellow', backgroundColor: '#212121'});
```

## API

## xa

Main method

### success(text)

**text**

Type: `string`

A text you want to display


### info(text)

**text**

Type: `string`

A text you want to display

### warning(text)

**text**

Type: `string`

A text you want to display

### error(text)

**text**

Type: `string`

A text you want to display

### custom(title, text, {titleColor, backgroundColor})

**title**

Type: `string`

Title of the log. When in Electron, the title will be either `MAIN` or `RENDERER`.

**text**

Type: `string`

A text you want to display

**titleColor**

Type: `string`
Default: `white`

Color of the title. It will be converted to HEX.

**backgroundColor**

Type: `string`
Default: `black`

Color of title's background. It will be converted to HEX.

## Thanks:

- [Jamen Marzonie](https://www.npmjs.com/~jamen) for providing package name!

## License

MIT © [Antoni Kepinski](https://kepinski.me)
