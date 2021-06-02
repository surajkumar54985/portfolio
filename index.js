const express = require('express');

const path = require('path');

const port = 8000;

const app = express();

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());

app.use(express.static('assets'));

var contactList=[
    {
        name:"suraj",
        phone:"8209125863",
        message:"heloo"
    },
    {
        name:"priyanshu",
        phone:"8405892112",
        message:"heloo"
    },
    {
        name:"suraj kumar",
        phone:"7665427795",
        message:"heloo"
    }
]

app.get('/' , function(req,res){
    // console.log(__dirname);
    // res.send('<h1>cool! it is running. or is it?</h1>');
    return res.render('home', 
    {title: "Contacts List",
    contact_list: contactList
});

});

app.get('/practice' , function(req,res){
    return res.render('practice', {title: "Let's play with ejs"});
});

app.post('/create-contact',function(req,res){
    //return res.redirect('/practice');
    //console.log(req.body);
    contactList.push({
        name: req.body.name,
        phone: req.body.phone,
        message: req.body.message
    });

    return res.redirect('/');
});

app.listen(port, function(err){
    if(err)
    {
        console.log('Error in running the server.');
    }

    console.log('Yup! my express server is running on port:',port);
});