<p align="center">
  <img src="https://i.imgur.com/xpwm2L4g.png" href="https://github.com/xxczaki/xa" height="256">
  <h2 align="center">xa</h2>
  <p align="center">Beautiful & Customizable log messages in your terminal ❤<p>
  
<p align="center"><a href="https://www.npmjs.com/package/xa"><img src="https://badge.fury.io/js/xa.svg" alt="npm Package"></a>  <a href="https://travis-ci.org/xxczaki/xa"><img src="https://travis-ci.org/xxczaki/xa.svg?branch=master" alt="Build Status"></a> <a href="https://github.com/sindresorhus/xo"><img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" alt="XO Code Style"></a> <a href="https://www.youtube.com/watch?v=9auOCbH5Ns4"><img src="https://img.shields.io/badge/unicorn-approved-ff69b4.svg" alt="Unicorn"></a>
  </p>
 

## Installation 

### 📦 npm
``` 
npm install xa
```

## Usage

```js
const xa = require('xa');

/*

  There are 5 options:
  
  1. info: (label, message)
  2. loading: (label, message)
  3. warn: (label, message)
  4. experimental: (label, message)
  5. error: (message)
  
  You can also highlight commands & links:
  
  - command: (cmd)
  - link: (url)
*/

console.log('');

xa.loading('TEST', 'Running test...');

xa.info('SUCCESS', 'Finished converting file!');

xa.warn('WARN', `This module is deprecated! Read more: ${xa.link('http://example.com')}`);

xa.experimental('EXPERIMENTAL', 'This feature is not implemented yet!');

xa.error('Could not find chalk. Make sure you have installed it!', {
	exit: false
});
```

## Thanks:

- [Jamen Marzonie](https://www.npmjs.com/~jamen) for providing package name!

## License

MIT © [Antoni Kepinski](https://akepinski.me)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fxxczaki%2Fxo.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fxxczaki%2Fxo?ref=badge_large)



