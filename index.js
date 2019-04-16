'use strict';

const chalk = require('chalk');
const Color = require('color');
const {isBrowser} = require('browser-or-node');
const is = require('electron-is');

module.exports.success = text => {
	if (isBrowser) {
		console.log(' %cSUCCESS ' + text, 'background: green; border-radius: 2px');
	}

	if (is.main()) {
		console.log(` ${chalk.bgGreen.black(' MAIN ')} ${text}`);
	}

	if (is.renderer()) {
		console.log(` ${chalk.bgGreen.black(' RENDERER ')} ${text}`);
	}

	console.log(` ${chalk.bgGreen.black(' SUCCESS ')} ${text}`);
};

exports.info = text => {
	if (isBrowser) {
		console.log(' %cINFO ' + text, 'background: blue; border-radius: 2px');
	}

	if (is.main()) {
		console.log(` ${chalk.bgBlue(' MAIN ')} ${text}`);
	}

	if (is.renderer()) {
		console.log(` ${chalk.bgBlue(' RENDERER ')} ${text}`);
	}

	console.log(` ${chalk.bgBlue(' INFO ')} ${text}`);
};

exports.warning = text => {
	if (isBrowser) {
		console.log(' %cWARNING ' + text, 'background: yellow; border-radius: 2px');
	}

	if (is.main()) {
		console.log(` ${chalk.bgYellow.black(' MAIN ')} ${text}`);
	}

	if (is.renderer()) {
		console.log(` ${chalk.bgYellow.black(' RENDERER ')} ${text}`);
	}

	console.log(` ${chalk.bgYellow.black(' WARNING ')} ${text}`);
};

exports.error = text => {
	if (isBrowser) {
		console.log(' %cERROR ' + text, 'background: red; border-radius: 2px');
	}

	if (is.main()) {
		console.log(` ${chalk.bgRed(' MAIN ')} ${text}`);
	}

	if (is.renderer()) {
		console.log(` ${chalk.bgRed(' RENDERER ')} ${text}`);
	}

	console.log(` ${chalk.bgRed(' ERROR ')} ${text}`);
};

exports.custom = (title, text, {titleColor, backgroundColor}) => {
	const color = Color(titleColor).hex();
	const bgColor = Color(backgroundColor).hex();

	if (isBrowser) {
		console.log(` %c${title} ` + text, `color: ${color || 'white'}; background: ${bgColor || 'black'}; border-radius: 2px`);
	}

	if (is.main()) {
		console.log(` ${chalk.bgGreen.black(' MAIN ')} ${text}`);
	}

	if (is.renderer()) {
		console.log(` ${chalk.bgGreen.black(' RENDERER ')} ${text}`);
	}

	console.log(` ${chalk.bgHex(bgColor).hex(color)(` ${title} `)} ${text}`);
};
