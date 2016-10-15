var express = require('express');
var child = require('child_process');
var app = express();

app.get('/', function(req, res){
	res.send('commands');
});

app.get('/rptoggle', function(req, res){
	child.exec('irsend SEND_ONCE Philips KEY_POWER', (err) => {
		if (err){
			console.log('exec error: ${err}');
			return;
		}
	});
	return res.send('ok');
}); 

var port = 8001;
app.listen(port, function(){
	console.log('listening on port:' +  port);
});
