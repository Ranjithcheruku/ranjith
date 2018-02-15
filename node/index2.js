var express = require('express');
var app = express();
app.use('/static', express.static('public'));
app.use('/public', express.static('public'));
app.listen(4000, function() {
	console.log('the server is running at http://localhost:4000')
})