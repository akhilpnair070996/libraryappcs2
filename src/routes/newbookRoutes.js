const express = require("express");
const newbookRouter = express.Router();
const multer = require("multer");
const path=require("path");
const Bookdata = require('../model/Bookdata');
newbookRouter.use(express.static(__dirname+"./public/"));
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
    newbookRouter.get('/',function(req,res){
        res.render("newbook",
        {
            nav,
            title:"Add new book",
            role:req.session.role
        });
    });
    newbookRouter.post('/add',upload,function(req,res){
var item={
title:req.body.title,
author:req.body.author,
genre:req.body.genre,
synopsis:req.body.synopsis,
image:req.file.filename
}
var book=Bookdata(item);
book.save();
res.redirect('/books');
    });
     return newbookRouter;
 }
module.exports = routers;