<p align="center">
  <img src="https://i.imgur.com/xpwm2L4g.png" href="https://github.com/xxczaki/xa" height="256">
  <h2 align="center">xa</h2>
  <p align="center">📤 Dynamically load external JS & CSS files!<p>
  
<p align="center"><a href="https://www.npmjs.com/package/xa"><img src="https://badge.fury.io/js/xa.svg" alt="npm Package"></a>  <a href="https://travis-ci.org/xxczaki/xa"><img src="https://travis-ci.org/xxczaki/xa.svg?branch=master" alt="Build Status"></a> <a href="https://github.com/sindresorhus/xo"><img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" alt="XO Code Style"></a>
  </p>
 

## Installation 

📦 npm
``` 
npm install xa
```

🐦 bower
``` 
bower install xa
```

🚀 jsdelivr
```html
<script src="https://cdn.jsdelivr.net/npm/xa/xa.min.js"></script>
```


## Usage

```js
xa.js('jquery.js', function(error) {
    /* You could use jQuery functions here! */
});

xa.css('main.css', function(error) {
    /* Load main.css and then do some magic */
});

/* Recognition file type by extension */
xa('css-or-.js', function(error, event) {
    console.log(error || event);
});

xa('template/header.html', function(error, footer) {
    console.log(error || header);
});

xa.json('config.json', function(error, config) {
    console.log(error || config);
});

xa.ajax('template/header.html', function(error, header) {
    console.log(error || header);
});

/* Load one-by-one */
xa.series([
    'jquery.js',
    'math.js',
], function(error) {
});

/* Load all together and call callback */
xa.parallel([
    'main.css',
    'main.js',
], function(error) {
});
```


## Thanks:

- [Jamen Marzonie](https://www.npmjs.com/~jamen) for providing package name!

## License

MIT © [Antoni Kepinski](https://akepinski.me)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fxxczaki%2Fxo.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fxxczaki%2Fxo?ref=badge_large)



