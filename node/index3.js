// express is used to develop restful web services
var express = require('express');
// if you are supporting post, put or delete. Suppose if you response.body 
var bodyParser = require('body-parser');
var app = express();
// suppose if you using forms then using multer will be helpful
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

// within request if you are exoecting JSON request
app.use(bodyParser.json()); // for parsing application/json

// witing response body if you application/x-www-form-urlencoded
// format to parse messages we use
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// array
var userArr= [];
// we initate a database connection


// GET, POST, PUT and DELETE
// GET -- retreive
app.get('/user', function(req,res){
	console.log(JSON.stringify(userArr));
	// database find or select
	res.json(userArr);
});

// POST -- create a new record
app.post('/user', function(req,res){
	console.log(req.body);
	userArr.push(req.body);
	// data insert
	res.end();
});

// PUT -- modify existing record
app.put('/user/:name', function(req, res) {
	// database update
	var name = req.params.name;
	for(var i=0; i<userArr.length; i++) {
		if(userArr[i].name==name) {
			userArr.splice(i,1);
			userArr.push(req.body);
			break;
		}
	}
	res.end();
})

// DELETE -- 
app.delete('/user/:name', function(req,res) {
	// database delete
	var name = req.params.name;
	for(var i=0; i<userArr.length; i++) {
		if(userArr[i].name==name) {
			userArr.splice(i,1);
			break;
		}
	}
	
})


app.listen(3000, function() {
	console.log('the server is running at http://localhost:3000')
})