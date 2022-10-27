/* BARCODE CREATOR COMMAND LINE APPLICATION
*
* This is the cmd entry point into the application.
* Use this module to create barcodes from the command
* line.
*
* Command: generate-barcode
*   generates a one off barcode svg with barcode data as
*   the filename.
*
* Options:
*   data (required): the data to be encoded into the barcode
*
*   size: 
*    the width and height of the barcode to barcodes
*    generated.  Formatted as "w:h". By default This 
*    value is autocalculated.
*   
*   showdata (defaulted): 
*    shows the encoded data in ascii characters.
*   
*   fontsize (defaulted): 
*    size of the font.  By default this is auto calculated
* 
*   margin (defaulted):
*    amount of space to be added around the barcode and data.
*
*   border:
*    adds a border around the margin of the barcode
*
* Command: generate-barcodes
*   generates serveral barcode svgs from a file of line
*   separated barcodes.
*
* Options:
*   file (required): file of line separated barcodes.  A 
*    check will be performed against the file to ensure 
*    that barcodes are in compliance
*
*   size: 
*    the width and height of the barcode to barcodes
*    generated.  Formatted as "w:h". By default This 
*    value is autocalculated.
*   
*   showdata (defaulted): 
*    shows the encoded data in ascii characters.
*   
*   fontsize (defaulted): 
*    size of the font.  By default this is auto calculated
* 
*   margin (defaulted):
*    amount of space to be added around the barcode and data.
*
*   border:
*    adds a border around the margin of the barcode
*/

