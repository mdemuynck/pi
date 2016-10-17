var express = require('express');
var favicon = require('serve-favicon');
var child = require('child_process');
var app = express();

app.use(favicon(__dirname + '/img/favicon.png'));

app.get('/', function(req, res){
	res.sendFile('index.html', {root: __dirname});
});

app.get('/rptoggle', function(req, res){
	irsend('KEY_POWER');
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

app.get('/r1', function(req, res){
	irsend('KEY_1');
	res.sendFile('index.html', {root: __dirname});
});

app.get('/r2', function(req, res){
	irsend('KEY_2');
	res.sendFile('index.html', {root: __dirname});
});

app.get('/r3', function(req, res){
	irsend('KEY_3');
	res.sendFile('index.html', {root: __dirname});
});

function irsend(cmd){
    child.exec('irsend SEND_ONCE Philips ' + cmd, (err, stdout, stderr) => {
		if (err){
			console.log('exec error: ${err}');
			return;
		}
		if (stdout) {
			console.log('exec success: ${stdout}');
			return;
		}
	});
};

var port = 8001;
app.listen(port, function(){
	console.log('listening on port:' +  port);
});
