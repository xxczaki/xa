const chalk = require('chalk');

const stdoutHandlerOptions = {
	error: 'red',
	experimental: 'magenta',
	info: 'green',
	loading: 'blue',
	off: 'gray',
	on: 'white',
	warn: 'yellow'
};
function stdoutHandler(options = stdoutHandlerOptions) {
	return (type, label, message) => {
		const color = options[type];
		if (!color) {
			process.stdout.write(
				`${chalk.inverse.bold.white(label)} ${chalk.white(message)}\n`
			);
		} else {
			process.stdout.write(
				`${chalk.inverse.bold[color](label)} ${chalk[color](message)}\n`
			);
		}
	};
}

class Logger {
	constructor(options = defaultOptions) {
		this.loggerDump = [];
		this.handlers = options.handlers;
	}

	log(type, label, message) {
		for (const handler of this.handlers) {
			handler(type, label, message);
		}
	}
}

const defaultOptions = {
	handlers: [stdoutHandler()]
};

module.exports = {
	logger: (options = defaultOptions) =>
		new Proxy(new Logger(options), {
			get: function (target, name) {
				switch (name) {
					case 'getDump':
						return function () {
							return target.loggerDump;
						};
					default:
						return function (label, message) {
							target.loggerDump.push({label, message});
							target.log(name, label, message);
						};
				}
			}
		}),
	stdoutHandler
};
