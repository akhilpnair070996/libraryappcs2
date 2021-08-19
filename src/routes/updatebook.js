const express = require("express");
const upbookRouter = express.Router();
const multer = require("multer");
const path=require("path");
const Bookdata = require('../model/Bookdata');
upbookRouter.use(express.static(__dirname+"./public/"));
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
     upbookRouter.get('/:id',function(req,res){
         const id= req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("updatebook",
            {
                nav,
                title:"Update book",
                book,
                role:req.session.role
            });
        }) 
    });
    upbookRouter.post('/add/:id',upload,function(req,res){
        id=req.body.id;
        var item={
            title:req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            synopsis:req.body.synopsis,
            image:req.file.filename
            }
        let updateBook = { $set: item };
        Bookdata.updateOne({_id:id},updateBook)
        .then(function(){
            res.redirect("/books");
        })    
    });
     return upbookRouter;
 }
module.exports = routers;