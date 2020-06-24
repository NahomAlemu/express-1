var express = require('express');
var data = require('./data/test.json');

var app = express();
const PORT = 3000;

app.use(express.statics(__dirname));

//app.listen(300);

app.listen(PORT,()=>{
  console.log(`App is running on port ${PORT}`);

});

