const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "ejs");
app.set("views", "templates");

app.use(bodyParser.urlencoded({extended:true}));

const usersArray = [];

app.get('/', (req,res)=>{
    res.render('index',{
        title:'Home'
    });
});

app.post('/', (req,res)=>{
    const user = req.body.userName;
    usersArray.push({userName:user});
    res.redirect('/users');
});

app.get('/users', (req,res)=>{
    console.log(usersArray);
    res.render('users',{
        title:'Users',
        users:usersArray
    });
});

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});