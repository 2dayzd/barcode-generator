const cLog = require('./constants/structuredLogger').toConsole;

require('yargs/yargs')(process.argv.slice(2))
	.command(
		'barcode',
		'generate an image of a single barcode',
		function(yargs) {
			return yargs
				.option('data', {
					alias: 'd',
					describe: 'the data to be encoding into a barcode',
					demandOption: true,
					type: 'string'
				})
				.option('addlabel', {
					alias: 'l',
					describe: 'add the data label to the barcode image',
					type: 'boolean',
				})
				.option('size', {
					alias: 's',
					describe: 'size of the barcode image "(w:h)"',
					type: 'string'
				})
				.option('addborder', {
					alias: 'b',
					describe: 'adds a border around the barcode',
					type: 'boolean'
				})
				.option('margin', {
					alias: 'm',
					describe: 'margin around the barcode inside the border.',
					type: 'number'
				})
		},
		function(argv) {
			console.log('Barcode');
			console.log(argv);
		}
	)
	.command(
		'barcodes',
		'generate a page of barcode images',
		function(yargs) {
			return yargs
				.option('datafile', {
					alias: 'f',
					describe: 'the file with line separated data to be encoding into a barcode',
					demandOption: true,
					type: 'string'
				})
				.option('addlabel', {
					alias: 'l',
					describe: 'add the data label to the barcode image',
					type: 'boolean'
				})
				.option('size', {
					alias: 's',
					describe: 'size of the barcode image "(w:h)"',
					type: 'string'
				})
				.option('addborder', {
					alias: 'b',
					describe: 'adds a border around the barcode',
					type: 'boolean'
				})
				.option('margin', {
					alias: 'm',
					describe: 'margin around the barcode inside the border',
					type: 'number'
				})
				.option('pagesize', {
					alias: 'p',
					describe: 'size for page for paged barcodes (w:h)',
					type: 'string'
				})
		},
		function(argv) {
			console.log('Barcodes');
			console.log(argv);
		}
	)
	.strict()
	.help()
	.argv

