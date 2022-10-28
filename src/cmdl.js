const cLog = require('./constants/structuredLogger').toConsole;

yargs
	.command(
		'barcode',
		'generate an image of a single barcode',
		function(yargs) {
			return yargs
				.option('data', {
					alias: 'd',
					describe: 'the data to be encoding into a barcode'
				})
				.option('addlabel', {
					alias: 'l',
					describe: 'add the data label to the barcode image'
				})
				.option('size', {
					alias: 's',
					describe: 'size of the barcode image "(w:h)"'
				})
				.option('addborder', {
					alias: 'b',
					describe: ''
				})
				.option('margin', {
					alias: 'm',
					describe: 'margin around the barcode inside the border.'
				})
		},
		function(argv) {
			console.log(argv)
		}
	)
	.command(
		'barcodes',
		'generate a page of barcode images',
		function(yargs) {
			return yargs
				.option('datafile', {
					alias: 'd',
					describe: 'the file with line separated data to be encoding into a barcode'
				})
				.option('addlabel', {
					alias: 'l',
					describe: 'add the data label to the barcode image'
				})
				.option('size', {
					alias: 's',
					describe: 'size of the barcode image "(w:h)"'
				})
				.option('addborder', {
					alias: 'b',
					describe: ''
				})
				.option('margin', {
					alias: 'm',
					describe: 'margin around the barcode inside the border'
				})
				.option('pagesize', {
					alias: 'p',
					describe: 'size for page for paged barcodes'
				})
		},
		function(argv) {
			console.log(argv)
		}
	)
	.help()
	.argv

