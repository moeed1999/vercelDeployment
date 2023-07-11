const express = require('express');
require('dotenv').config({ path: '/.env' });
const app = express();

const port = process.env.PORT || 5001;

app.use('/',(req,res)=>{
    res.send('server is runningss')
})

app.listen(port , ()=>{
    console.log("Listening at port: 5000" );
})

