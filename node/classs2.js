var http = require('http');
var server = http.createServer(function(req,res){
	res.write('Hi Every one!!');
	res.end();
});
server.listen(8080, function() {
	console.log('server is running at http://localhost:8080')
});

