const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
mongoose.set('strictQuery',true);
console.log('hi');
const studentRoutes = require('./route/StudentRoutes');
// const PORT = 8070;
// const DBURL = process.env.MONGODB_URL;
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://Admin:root123@googlemongocluster1.ggf2hgq.mongodb.net/?retryWrites=true&w=majority/studentManagementSystem').then(()=>{
    app.listen(8080,()=>{
        console.log('app is running now');
    })
});

app.use('/student',studentRoutes);