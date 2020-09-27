require('dotenv').config()
const express = require('express')
const routes = require('./routes')
const firebase = require('firebase')
const firebaseConfig = require('./configs/firebase')

const app = express()
app.use(express.json())

app.get('/', (req, res)=>{
    res.json({message: 'Hello World'})
})

firebase.initializeApp(firebaseConfig)

app.use(routes)

app.listen(3333, ()=>{
    console.log('Server Started')
})