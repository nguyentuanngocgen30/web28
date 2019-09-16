var fs =require('fs');
var argv = process.argv.slice(2);
if (argv && argv.length >= 2){
    var fileInput = argv[0];
    var fileOutput = argv[1];
    var content = fs.readFileSync(fileInput).toString();
    var arrayData = content.split("\r\n");
    console.log(arrayData);
}
