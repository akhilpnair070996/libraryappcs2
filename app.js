const express = require('express');
const app = new express();
var session = require('express-session');
var methodOverride = require('method-override');
const port = process.env.PORT || 6060;
nav = [
    {
        link: "/books",
        name: "Books"
    },
    {
        link: "/authors",
        name: "Authors"
    },
    {
        link: "/newbook",
        name: "Add new book"
    },
    {
        link: "/newauthor",
        name: "Add new author"
    },
    {
        link: "/login",
        name: "Log In"
    },
    {
        link: "/signup",
        name: "Signup"
    }
]
const loginsRouter = require('./src/routes/loginRoutes')(nav);
const signupsRouter = require('./src/routes/signupRoutes')(nav);
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const newbookRouter = require('./src/routes/newbookRoutes')(nav);
const newauthorRouter = require('./src/routes/newauthorRoutes')(nav);
const upbookRouter = require('./src/routes/updatebook')(nav);
const upauthorRouter = require('./src/routes/updateauthor')(nav);
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}));
app.use('/login',loginsRouter);
app.use('/signup',signupsRouter);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/newbook',newbookRouter);
app.use('/newauthor',newauthorRouter);
app.use('/updatebook',upbookRouter);
app.use('/updateauthor',upauthorRouter);
app.use(methodOverride('_method'));
app.get('/',function(req,res)
{
    res.render("index",
    {
nav, 
title:"Library",
role:req.session.role
    });
});
app.get('/foradmin',function(req,res)
{
    res.render("for",
    {
nav, 
title:"Library",
role:req.session.role
    });
});
app.get('/logout', function(req, res){
req.session.destroy();
res.render("login",
{
nav, 
title:"Login",
error:'',
error1:''
});
});
app.listen(port,()=>{console.log("Server ready at" + port)});