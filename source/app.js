const path = require('path')
const express = require('express')
const app = express()
const publicDirectoryPath = 'C:/main/programming/node_udemy/web_server/public'
const viewsPath = path.join(publicDirectoryPath, '/views')

app.use(express.static(publicDirectoryPath))

app.set('views', viewsPath)
app.set('view engine', 'hbs')



app.get('',function(req,response){          
    response.render('index.hbs')

})

app.get('/about', function(req,res){                                //ABOUT PAGE
    const someObj = 
    {
        title: 'ABOUT PAGE',
        createdBy: 'GK'
    }
    res.render('about',someObj)
})

app.get('*',function(req,res){
    res.send('SORRY MATE!')
})

app.listen(3000, function(){
    console.log("Starting at 3000")
})