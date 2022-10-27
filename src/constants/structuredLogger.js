const structuredLog = require('structured-log');

const toConsole = structuredLog
  .configure()
	.writeTo(new structuredLog.ConsoleSink())
	.enrich((properties) => {
		if (properties.secret) {
			return {
				secret: 'MASKED'
			};
		}
	})
	.create();

/* Exports */
module.exports = { toConsole };
