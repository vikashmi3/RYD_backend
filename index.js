const express = require('express');
const app = express();

//dotenv
require('dotenv').config();

//mongose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vikash:amandb@rydercluster.lqedivg.mongodb.net/vikash');

mongoose.connection.once('open',()=>{
    console.log('connected to database'); 
});

mongoose.connection.on('error',(error)=>{
    console.log('mongoose connection faield'+error);
});

//routes
const userRoute = require('./route/UserRoute');
app.use('/api',userRoute);

//server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});