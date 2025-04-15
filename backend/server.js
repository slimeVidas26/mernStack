const express = require('express')
require('dotenv').config()


//express app
const app = express()

//routes
app.get('/', (req , res)=>{
res.json({msg:"Welcome to the app"})
})

//listen for requests
app.listen(process.env.PORT, ()=>{
    console.log(`App listening on port ${process.env.PORT}`)
})