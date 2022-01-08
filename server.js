var express = require("express");
var bodyParser = require("body-parser");

server = express();

server.use(express.static("Vue_Bootstrap"));//web root
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

var DB = require("nedb-promises");
var Contact = DB.create("contact.db");

server.post("/contact_me", function(req, res){
    console.log(req.body);
    //check 
    Contact.insert(req.body);
    res.end()
})

server.listen(8080, function(){
    console.log("Server is running at port 8080!")
})