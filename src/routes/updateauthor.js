const express = require("express");
const upauthorRouter = express.Router();
const multer = require("multer");
const path=require("path");
const Authordata = require('../model/Authordata');
upauthorRouter.use(express.static(__dirname+"./public/"));
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
     upauthorRouter.get('/:id',function(req,res){
         const id= req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render("updateauthor",
            {
                nav,
                title:"Update author",
                author,
                role:req.session.role
            });
        }) 
    });
    upauthorRouter.post('/add/:id',upload,function(req,res){
        id=req.body.id;
        var item={
            author:req.body.author,
            book:req.body.book,
            genre:req.body.genre,
           info:req.body.info,
            image:req.file.filename
            }
        let updateAuthor = { $set: item };
        Authordata.updateOne({_id:id},updateAuthor)
        .then(function(){
            res.redirect("/authors");
        })    
    });
     return upauthorRouter;
 }
module.exports = routers;