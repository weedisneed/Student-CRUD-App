const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const app=express();
const bodyparser=require("body-parser");
const path=require('path');
dotenv.config({path:'config.env'})
const PORT=process.env.PORT||8080

const connectDB = require('./server/database/connection');

//log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();


//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

// set view enging
app.set("view engine","ejs")
// app.set("views",path.resolve(__dirname,"veiws/ejs"))

// load assets using middleware method use
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
//css/style.css 


//load routers

app.use('/',require('./server/routes/router'))
app.listen(PORT,()=>{console.log(`Server is Running on http://localhost:${PORT}`)}) 