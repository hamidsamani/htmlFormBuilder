var express = require('express'), path = require('path'), bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/js', express.static(__dirname + '/app/js'));
app.use('/assets/img', express.static(__dirname + '/app/assets/img'));
app.set('view engine', 'pug');
app.set('views', ['./app/htmlTemplates', './app/jsTemplates']);
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/app' + '/home.html'));
});
app.get('/help', function (req, res) {
    res.sendFile(path.join(__dirname + '/app' + '/help.html'));
});
app.get('/tabs/:filename', function (req, res) {
    res.sendFile(path.join(__dirname + '/app/tabs/' + req.params.filename));
});
app.post('/widgets', function (req, res) {
    res.render(req.body.element, req.body);
});
app.post('/scripts', function (req, res) {
    res.render(req.body.element + '-js', req.body);
});
app.post('/templates', function (req, res) {
    res.render(req.body.template, req.body);
});

app.listen(3000, function () {
    console.log('Form Builder App Started...');
});
