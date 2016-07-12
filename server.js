var express = require('express');

var app = express();
app.use(express.static(__dirname+'/public'));

app.get('/', function(req, res, next) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.sendFile('/index.html');
});

app.get('/whoiam', function(req, res, next) {
    res.writeHead(200, {'Content-Type': 'application/JSON'});
    res.end(JSON.stringify({hello: process.env}));
})


var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('App listening on port: ' + port);
})