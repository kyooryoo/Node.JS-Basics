var fs = require("fs")
// modify the input file name to check the err msg
fs.readFile('0_input.txt', function(err,data){
	if(err) return console.error(err.stack);
	console.log(data.toString());
});
console.log("the end");
