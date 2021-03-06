const express = require("express");
const booksRouter = express.Router();
const Bookdata=require('../model/Bookdata');
function router(){

    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",
            {
                nav,
                title:"Books",
                books,
                role:req.session.role
            });
        }) 
    });
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("book",
            {
                nav,
                title:"Book",
                book,
                role:req.session.role
            });
        })
    });
    booksRouter.get('/:id/add',function(req,res){
        const id = req.params.id;
        Bookdata.deleteOne({_id:id})
        .then(function(){
            res.redirect("/books");
        })
    });
    return booksRouter;
}
module.exports = router;
