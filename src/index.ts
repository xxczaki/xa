'use strict';

import chalk from 'chalk';
import Color from 'color';
import is from 'electron-is';

interface Options {
	titleColor?: string;
	backgroundColor?: string;
}

exports.success = (text: string) => {
	if (typeof window === 'undefined') {
		console.log(' %cSUCCESS', `%c${text}`, 'background: green; border-radius: 2px');
	}

	if (is.main()) {
		console.log(` ${chalk.bgGreen.black(' MAIN ')} ${text}`);
	}

	if (is.renderer()) {
		console.log(` ${chalk.bgGreen.black(' RENDERER ')} ${text}`);
	}

	console.log(` ${chalk.bgGreen.black(' SUCCESS ')} ${text}`);
};

exports.info = (text: string) => {
	if (typeof window === 'undefined') {
		console.log(' %cINFO', `%c${text}`, 'background: blue; border-radius: 2px');
	}

	if (is.main()) {
		console.log(` ${chalk.bgBlue(' MAIN ')} ${text}`);
	}

	if (is.renderer()) {
		console.log(` ${chalk.bgBlue(' RENDERER ')} ${text}`);
	}

	console.log(` ${chalk.bgBlue(' INFO ')} ${text}`);
};

exports.warning = (text: string) => {
	if (typeof window === 'undefined') {
		console.log(' %cWARNING', `%c${text}`, 'background: yellow; border-radius: 2px');
	}

	if (is.main()) {
		console.log(` ${chalk.bgYellow.black(' MAIN ')} ${text}`);
	}

	if (is.renderer()) {
		console.log(` ${chalk.bgYellow.black(' RENDERER ')} ${text}`);
	}

	console.log(` ${chalk.bgYellow.black(' WARNING ')} ${text}`);
};

exports.error = (text: string) => {
	if (typeof window === 'undefined') {
		console.log(' %cERROR', `%c${text}`, 'background: red; border-radius: 2px');
	}

	if (is.main()) {
		console.log(` ${chalk.bgRed(' MAIN ')} ${text}`);
	}

	if (is.renderer()) {
		console.log(` ${chalk.bgRed(' RENDERER ')} ${text}`);
	}

	console.log(` ${chalk.bgRed(' ERROR ')} ${text}`);
};

exports.custom = (title: string, text: string, {titleColor, backgroundColor}: Options) => {
	const color = Color(titleColor).hex();
	const bgColor = Color(backgroundColor).hex();

	if (typeof window === 'undefined') {
		console.log(` %c${title}`, `%c${text}`, `color: ${color || 'white'}; background: ${bgColor || 'black'}; border-radius: 2px`);
	}

	if (is.main()) {
		console.log(` ${chalk.bgGreen.black(' MAIN ')} ${text}`);
	}

	if (is.renderer()) {
		console.log(` ${chalk.bgGreen.black(' RENDERER ')} ${text}`);
	}

	console.log(` ${chalk.bgHex(bgColor).hex(color)(` ${title} `)} ${text}`);
};
