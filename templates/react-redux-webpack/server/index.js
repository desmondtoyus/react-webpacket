var express = require('express');
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname+'/.env')});
var app = express();
const PORT = process.env.PORT || 8008;

//REDIRECT TO HTTP
// app.use(function(req, res, next) {
//     if(req.headers['x-forwarded-proto'] === 'https') {
//         res.redirect('http://' + req.hostname + req.url);
//     } else {
//         next();
//     }
// });

app.use(express.static('build'));
// app.use(express.static(path.join(__dirname, '../app/public')));

// app.get('/', function (req, res) {
//    res.send("Hello World!"); 
// });

app.listen(PORT, function(){
    console.log(`Development Environment: ${process.env.NODE_ENV} Listen on port ${PORT}...`);
});