const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

const app = express()
const blogRoute = require('./routes/routes')

//MIDDLEWARE
app.use( bodyParser() )
app.use( cors() )
app.use( '/blog', blogRoute )


//ROUTES
app.get('/', (req,res) => {
    res.send('Hello Larhendiel')
})

//db connection
mongoose.connect(
    process.env.SUMMON_LARH,
    { useNewUrlParser: true, useUnifiedTopology: true },
    ()=>{console.log('db connection')})

//listen to a port
app.listen(4200)