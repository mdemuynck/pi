var express = require('express');
var favicon = require('serve-favicon');
var child = require('child_process');
var Streamplayer = require('stream-player');
var internetradio = new Streamplayer();
var stream = "http://mp3.streampower.be/stubru-high.mp3";

var app = express();

app.use(favicon(__dirname + '/img/favicon.png'));
var auxenabled = false;

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
    auxenabled != auxenabled;
     console.log("KEY_AUX");
     console.log("auxenabled: " + auxenabled);
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

app.get('/station/:number', function (req, res) {
    console.log("auxenabled: " + auxenabled);
    console.log("stream: " + stream);
    //if (auxenabled) {
        //stream from the net
        internetradio.add(stream);
        internetradio.play();
    /*} else {
        //play FM
        irsend('KEY_' + req.params.number);
        res.sendFile('index.html', { root: __dirname });
    }*/
});


function irsend(cmd){
    child.exec('irsend SEND_ONCE Philips ' + cmd, function(err, stdout, stderr){
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
