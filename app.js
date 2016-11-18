var express = require('express');
var favicon = require('serve-favicon');
var child = require('child_process');
var app = express();

app.use(favicon(__dirname + '/img/favicon.png'));

app.get('/', function(req, res){
	res.sendFile('index.html', {root: __dirname});
});

app.get('/rptoggle', function(req, res){
    console.log("KEY_POWER");
	irsend('KEY_POWER');
	res.sendFile('index.html', {root: __dirname});
});

app.get('/aux', function(req, res){
	irsend('KEY_AUX');
	res.sendFile('index.html', {root: __dirname});
});

app.get('/radio', function(req, res){
	irsend('KEY_RADIO');
	res.sendFile('index.html', {root: __dirname});
});

app.get('/cd', function(req, res){
	irsend('KEY_CD');
	res.sendFile('index.html', {root: __dirname});
});

app.get('/rvup', function(req, res){
	irsend('KEY_VOLUMEUP');
	res.sendFile('index.html', {root: __dirname});
});

app.get('/rvdown', function(req, res){
	irsend('KEY_VOLUMEDOWN');
	res.sendFile('index.html', {root: __dirname});
});

app.get('/station/:number', function(req, res){
    irsend('KEY_' + req.params.number);
	res.sendFile('index.html', {root: __dirname});
});


function irsend(cmd){
    child.exec('irsend SEND_ONCE Philips ' + cmd, (err, stdout, stderr) => {
		if (err){
			console.log('exec error: ' + JSON.stringify(err));
			return;
		}
		if (stdout) {
			console.log('exec success: ' +  JSON.stringify(stdout));
			return;
		}
	});
};

var port = 8001;
app.listen(port, function(){
	console.log('listening on port:' +  port);
});
