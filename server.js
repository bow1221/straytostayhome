var express = require("express");
var bodyParser=require("body-parser");
const res = require("express/lib/response");

server = express();

server.use(express.static("strayanimal"));//web root
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

var DB = require("nedb-promises");
var Users = DB.create("users.db")//引入db
var Contact = DB.create("contact.db")//

server.get("/portfolio", function(req, res){
    portfolios= [
    ]
   res.send(portfolios);
})

server.get("/contact",function(req,res){
    res.send("call contact");
    res.redirect("/");
})

server.post("/contact_me", function(req, res){
    console.log(req.body);
    //check 
    Contact.insert(req.body);
    res.end()
})

server.listen(80, function(){
    console.log("Server is running at port 8080!")
})