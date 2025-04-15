const express = require('express')
require('dotenv').config()


//express app
const app = express()

//middleware
app.use((req , res , next)=>{
    console.log(req.path , req.method)   
    next()
})

//routes
app.get('/', (req , res)=>{
res.json({msg:"Welcome to the app"})
})

//listen for requests
app.listen(process.env.PORT, ()=>{
    console.log(`App listening on port ${process.env.PORT}`)
})