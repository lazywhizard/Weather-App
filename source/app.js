const path = require('path')
const express = require('express')
const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../public/views')

const portNumber = process.env.PORT || 3000

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

app.listen(portNumber, function(){
    console.log(`Starting at Port: ${portNumber}`)
})