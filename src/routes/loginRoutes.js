const express = require("express");
const loginsRouter = express.Router();
var session = require('express-session');
const Signupdata = require("../model/Signupdata");
loginsRouter.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
function routers(nav){
    loginsRouter.get('/',function(req,res){
        res.render("login",
        {
            nav,
            title:"Login",
            role:req.session.role,
            error:'',
            error1:''
        });
    });
    loginsRouter.post('/add',function(req,res){
        var email=req.body.email;
         var password=req.body.password;
 if(email=="admin@ictak.in" && password=="1234"){ 
     req.session.role="admin";
     res.redirect('/');
 }
 else{
     Signupdata.findOne({email:email,password:password}, function (err, user) {
       if (user) {
             req.session.role = 'user';
             res.redirect("/");
         } else {
             res.render("login",{
                 title:"Login",
                 error: "Username and password doesnt match",
                 error1:''
                      });
                      req.session.destroy();
         }
     });
 }
     });
     return loginsRouter;
 }
module.exports = routers;
