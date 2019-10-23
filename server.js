//Install express server
const express = require('express');
const path = require('path');
const morgan=require('morgan');
const app = express();

//added morgan for request logging.
//use 'combined' option in production
app.use(morgan('dev'));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);