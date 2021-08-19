const express = require("express");
const authorsRouter = express.Router();
const Authordata = require('../model/Authordata');
function router(){
  
    authorsRouter.get('/',function(req,res){
       Authordata.find()
        .then(function(authors){
        res.render("authors",
        {
            nav,
            title:"Authors",
            authors,
            role:req.session.role
        });
    })
    });
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render("author",
            {
                nav,
                title:"Author",
                author,
                role:req.session.role
            });
        })
        
    });
    authorsRouter.get('/:id/add',function(req,res){
        const id = req.params.id;
        Authordata.deleteOne({_id:id})
        .then(function(){
            res.redirect("/authors");
        })
    });
    return authorsRouter;
}
module.exports = router;
