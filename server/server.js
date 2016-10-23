var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var servers = require('./app/models/DummyData.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;

// ROUTES FOR OUR API
// ==============================================
var router = express.Router();

// middleware that logs all requests
router.use(function(req, res, next){
	console.log('Something is happening.');
	// go to the next route!
	next();
});

// ROUTES FOR OUR API
// ==============================================

// test route
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// server route
router.route('/servers')
	.get(function(req, res){
	//simulate Kohl's API calls
	servers[0].Online = !servers[0].Online;
	console.log(servers[0].Online);
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.json({servers});
});

// REGISTER OUR ROUTES
// ==============================================
app.use('/api', router);

//app.listen(port);
console.log('Magic happens on port ' + port);
var ipaddress = '127.0.0.1';
var http = require('http');
var httpServer = http.createServer(app);
httpServer.listen(port, ipaddress);