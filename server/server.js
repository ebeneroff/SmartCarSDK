var express = require('express');
var app = express();
var bodyParser = require('body-parser');

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
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.post('/', function(req, res){
	req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.json({message: 'dope post request bro'});
});

router.put('/', function(req, res){
	req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.json({message: 'nice put request brah'});
})

router.delete('/', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.json({message: 'congrats on the delete'});
})

// REGISTER OUR ROUTES
// ==============================================
app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
//var ipaddress = '127.0.0.1';
//var http = require('http');
//var httpServer = http.createServer(app);
//httpServer.listen(port, ipaddress);