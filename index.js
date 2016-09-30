var Express = require('express');
var app = new Express();
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var db = require('./models');
var router = require('./routes');

// app.get('/', function(req,res,next) {
// 	res.send("YO, TGIF");
// 	console.log("Ya server is RUNNIN");
// })

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(morgan('dev'));

app.use(Express.static(path.join(__dirname, '/public')));
app.use('/bootstrap', Express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use('/jquery', Express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/', router);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.render(
    // ... fill in this part
  );
});

app.listen(8080, function(){
    console.log("Ya server is RUNNIN");
});
