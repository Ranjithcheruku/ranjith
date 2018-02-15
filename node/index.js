console.log('hello world');
var fs = require('fs');

fs.readFile('notepad.txt', 'UTF-8', function(err, data) {
	if(err){
		console.error(err);
		return;
	}
	console.log(data);
})