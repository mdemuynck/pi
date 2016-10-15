var express = require('express');
var child = require('child_process');
var app = express();

app.get('/', function(req, res){
	res.sendFile('index.html', {root: __dirname});
});

app.get('/rptoggle', function(req, res){
	irsend('KEY_POWER');
	return res.send('ok');
});

function irsend(cmd){
    child.exec('irsend SEND_ONCE Philips ' + cmd, (err) => {
		if (err){
			console.log('exec error: ${err}');
			return;
		}
	});
};

var port = 8001;
app.listen(port, function(){
	console.log('listening on port:' +  port);
});
