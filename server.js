var express = require('express');
var cors    = require('cors'); 
var bodyParser = require('body-parser');
var storeRoute = require('./router/storeRoute');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/",function(req,res){
    res.send("Server Started...");

});
app.use("api/v1/",storeRoute);
app.listen(3000,()=>{
    console.log('Server start........');
})