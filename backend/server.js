const { json } = require('express');
const express = require('express');
const cors = require('cors');


const axios = require('axios')
const PORT = 5000;

const app = express()
const admin = express()

app.use(json())
app.use(cors())

app.get('/admin',async (req,res)=>{
    console.log('Running')
    res.send('OLA')  
}
)

app.post('/',async (req,res)=>{
    console.log('Running')
    res.send('OLA')
}
)
const authRoute = require('./routes/auth');
app.use('/',authRoute)

app.listen(PORT,()=>
    console.log(`server is running in port : ${PORT}`)
)