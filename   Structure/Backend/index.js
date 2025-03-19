var express = require('express');  

app = express(); 


  
app.get('/', function(req,res){
    res.send('This is home page')
})


app.use('/about',function(req,res,next){
    console.log('I am from About validation')
    next();
})

app.get('/about', function(req,res){
    res.send('This is About page')
})

app.get('/contact', function(req,res){
    res.send('This is Contact page')
})
 

app.listen(8000, function () {
    console.log("Server Run Success")
})