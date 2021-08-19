const express = require("express");
const signupsRouter = express.Router();
const Signupdata = require('../model/Signupdata');
function router(nav){
signupsRouter.get('/',function(req,res){
res.render("signup",
{
    nav,
    title: "Sign up",
    role:req.session.role,
    error:''
});
});
signupsRouter.post('/add',function(req,res){
    var item={
        fname:req.body.fname,
        lname: req.body.lname,
    mobnumber: req.body.mobnumber,
    email: req.body.email,
    password: req.body.password,
    confirmpwd:req.body.confirmpwd
    }
    var email=req.body.email;
    Signupdata.findOne({email:email}, function (err, user) {
         if (user) {
            res.render("signup",{
                nav, 
                title:"Signup",
                role:req.session.role,
                error:'"Email already exists. If already user please login or sign up with new email id."'    
            });     
        }
        else{
            var signup=Signupdata(item);
            signup.save();
            res.redirect("/login");
        }
    })
        });
return signupsRouter;
}
module.exports = router;

