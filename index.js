const chalk = require('chalk');

const colorMap = {
	info: 'green',
	warn: 'yellow',
	loading: 'blue',
	experimental: 'magenta',
	error: 'red'
};

const print = (type, label, message) => {
	const color = colorMap[type];
	console.log(
    chalk.inverse.bold[color](` ${label} `),
    chalk[color](message),
    '\n'
  );
};

const info = (label, message) => print('info', label, message);
const warn = (label, message) => print('warn', label, message);
const loading = (label, message) => print('loading', label, message);
const experimental = (label, message) => print('experimental', label, message);

const command = cmd => chalk.cyan(cmd);
const link = url => chalk.cyan(url);

const error = (err, options) => {
	const label = 'ERROR';
	if (!options) {
		options = {exit: true, silent: false, label};
	}
	print('error', options.label || label, err);
	if (options.silent) {
		process.exit(1);
	}
	if (options.exit) {
		throw new Error(err);
	}
};

module.exports = {info, loading, warn, experimental, error, command, link};
