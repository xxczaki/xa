<p align="center">
  <img src="https://i.imgur.com/2n3U5I8.png" href="https://github.com/xxczaki/xa" height="256">
  <h2 align="center">xa</h2>
  <p align="center">Beautiful & Customizable log messages in your terminal :heart:<p>
  
<p align="center">  
<a href="https://travis-ci.org/xxczaki/xa"><img src="https://travis-ci.org/xxczaki/xa.svg?branch=master" alt="Build Status"></a> <a href="https://github.com/sindresorhus/xo"><img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" alt="XO Code Style"></a> 
<a href="https://www.youtube.com/watch?v=9auOCbH5Ns4"><img src="https://img.shields.io/badge/unicorn-approved-ff69b4.svg" alt="Unicorn"></a>
  </p>
  
 
 <p align="center"><img src="https://i.imgur.com/LxRnkIN.png" alt="Screenshot"></p>

## Installation

```
npm install --save xa
```

<a href="https://www.patreon.com/akepinski">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## Usage

Default logger is usign only stdoutHandler which accepts these types of logging

- `info: (label, message)`

- `loading: (label, message)`

- `warn: (label, message)`

- `experimental: (label, message)`

- `on: (label, message)`

- `off: (label, message)`

- `error: (message)`

## Example

> See [example.js](https://github.com/xxczaki/xa/blob/master/example.js) file.

```js
const xa = require("xa");

xa.info("SUCCESS", "Finished converting file!");

xa.warn(
	'WARN',
	`This module is deprecated! Read more: ${xa.link('http://example.com')}`
);
```

## Customize

xa uses [chalk](https://www.npmjs.com/package/chalk) for colorful output, so you can customize technically every color :unicorn:

### Handlers

```js
Logger({
	handlers: [
		stdoutHandler({
			info: "magenta",
			error: "blue"
		})
	]
});
```

Handlers are functions that are called when you are logging something.
You are able to use predefined one or you can create it by your own like this:

```js
function mineHandler(options = defaultOptions) {
	return (type, label, message) => {
		switch (type) {
			case "error":
				DB.insert({
					into: "errors",
					date: new Date(),
					message,
					label
				});
				break;
			default:
				DB.insert({
					into: "logs",
					date: new Date(),
					message,
					label
				});
				break;
		}
	};
}
```

### stdoutHandler customization

stdoutHandler accepts object with names of acceptable log methods and their display color as values.

```js
const stdoutHandlerOptions = {
	error: "red",
	experimental: "magenta",
	info: "green",
	loading: "blue",
	off: "gray",
	on: "white",
	warn: "yellow"
};
```

## Thanks:

- [Jamen Marzonie](https://www.npmjs.com/~jamen) for providing package name!

## License

MIT © [Antoni Kepinski](https://akepinski.me)

<a href="https://app.fossa.io/projects/git%2Bgithub.com%2Fxxczaki%2Fxa?ref=badge_large" alt="FOSSA Status"><img src="https://app.fossa.io/api/projects/git%2Bgithub.com%2Fxxczaki%2Fxa.svg?type=large"/></a>
