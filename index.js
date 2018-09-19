const chalk = require('chalk');

// Color map
const colorMap = {
	error: 'red',
	experimental: 'magenta',
	info: 'green',
	loading: 'blue',
	off: 'gray',
	on: 'white',
	warn: 'yellow'
};

// Background color & text
const print = (type, label, message) => {
	const color = colorMap[type];
	console.log(
		chalk.inverse.bold[color](` ${label} `),
		chalk[color](message),
		'\n'
	);
};

// Log types
const info = (label, message) => print('info', label, message);
const warn = (label, message) => print('warn', label, message);
const loading = (label, message) => print('loading', label, message);
const on = (label, message) => print('on', label, message);
const off = (label, message) => print('off', label, message);
const experimental = (label, message) => print('experimental', label, message);
const error = (err, options) => {
	const label = 'ERROR';
	// Loud or silent error (default is loud)
	if (!options) {
		options = {loud: true, silent: false, label};
	}
	print('error', options.label || label, err);
	if (options.silent) {
		process.exit(1);
	}
	if (options.loud) {
		throw new Error(err);
	}
};

// Additional log types (command & url)
const command = cmd => chalk.cyan(cmd);
const link = url => chalk.cyan(url);

module.exports = {info, loading, warn, experimental, on, off, error, command, link};
