var express = require('express');
var app = express();


app.get('/user/john', function(err, req,res, next){
	if(err) {
		console.error(err.stack)
  		res.status(500).send('Something broke!')
	}
	res.write('this is john \n');
	next();
})

app.get('/user/*', function(req, res) {
	res.end(req.originalUrl);
})

app.get('/urlpattern', function(req,res, next){
	console.log('use method middleware executed');
	res.write('get http method middleware 1 \n');
	next();
}, function(req,res, next){
	console.log('use method middleware executed');
	res.write('get http method middleware 2 \n');
	next();
});

app.post('/urlpattern', function(req,res, next){
	console.log('use method middleware executed');
	res.write('post http method middleware');
	next();
})

app.put('/urlpattern', function(req,res, next){
	console.log('use method middleware executed');
	res.write('put http method middleware');
	next()
})

app.delete('/urlpattern', function(req,res){
	console.log('use method middleware executed');
	res.write('delete http method middleware');
	next();
})
app.use('/urlpattern', function(req,res){
	console.log('use method middleware executed');
	res.end('use middleware \n');
})

app.listen(4000, function(){
	console.log('the server is running at http://localhost:4000')
})