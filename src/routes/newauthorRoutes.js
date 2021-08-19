const express = require("express");
const newauthorRouter = express.Router();
const multer = require("multer");
const path=require("path");
const Authordata= require('../model/Authordata');
newauthorRouter.use(express.static(__dirname+"./public/"));

function routers(nav){
    var Storage=multer.diskStorage({
        destination:"./public/images/",
        filename:(req,file,cb)=>{
            cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
        }
    });
    var upload = multer({ 
        storage:Storage
     }).single('image');
    newauthorRouter.get('/',function(req,res){
        res.render("newauthor",
        {
            nav,
            title:"Add new author",
            role:req.session.role
        });
    });
    newauthorRouter.post('/add',upload,function(req,res){
        var item={
        author:req.body.author,
        book:req.body.book,
        genre:req.body.genre,
       info:req.body.info,
        image:req.file.filename
        }
        var author=Authordata(item);
        author.save();
        res.redirect('/authors');
            });
     return newauthorRouter;
 }
module.exports = routers;