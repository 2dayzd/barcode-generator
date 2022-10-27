const structuredLog = require('structured-log');

const loggerSingleton = structuredLog.configure()
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
export default loggerSingleton;
