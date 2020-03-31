'use strict';

import chalk from 'chalk';
import Color from 'color';
import is from 'electron-is';

interface Options {
	titleColor?: string;
	backgroundColor?: string;
}

const custom = (title: string, text: string, {titleColor, backgroundColor}: Options): void => {
	const color = Color(titleColor).hex();
	const bgColor = Color(backgroundColor).hex();

	if (typeof window !== 'undefined') {
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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const factory = (title: string, backgroundColor: string) => (text: string): void => custom(title, text, {backgroundColor});

export = {
	success: factory('SUCCESS', 'green'),
	info: factory('INFO', 'blue'),
	warning: factory('WARNING', 'yellow'),
	error: factory('ERROR', 'red'),
	custom
};
