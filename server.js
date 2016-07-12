var express = require('express');

var app = express();
app.use(express.static(__dirname+'/public'));

app.get('/', function(req, res, next) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.sendFile('/index.html');
});

app.get('/whoiam', function(req, res, next) {
    res.writeHead(200, {'Content-Type': 'application/JSON'});
    res.end(JSON.stringify({ipaddress: req.headers['x-forwarded-for'], 
                            language: req.headers['accept-language'].split(';')[0], 
                            region: req.headers['x-region'], 
                            software: req.headers['user-agent'].split('(')[1].split([')'])[0]}));
})


var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('App listening on port: ' + port);
})