// package.json ke script hai to use run krne ke liy hme npm run phir us script ke andr jo bhi hai usko likh do chl jayega to hmne "server": "nodemon server.js" likha to nodemon server.js likhne ke jagah ab npm run server likhnege terminal me to nodemon chlne lagega

const express = require("express");
const dotenv = require("dotenv");
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');

//dot config
dotenv.config();

// mongodb connection
connectDB();

//rest object , iska mtlb express ki sari functionality ab app naam ke variable me store ho gyi hai.
const app = express();

// middlewares
app.use(express.json())
// cors ko enable kiya hai 
app.use(cors())
app.use(morgan('dev'))



//routes
// 1 test route
app.use("/api/v1/test", require("./routes/testRoutes"));


//port
// yha pe process.env.PORT pe nhi to hamra program crash na kre isliy || krke 8080 de diye hai.
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running on Port ${process.env.PORT}`.bgCyan.white);
    //  yha pe jo bgCyan.white likhe to terminal pe ye message dikhai de rha hai colourful me iske liy hi hmne colors package ko install kiya tha upr hmne require kiya hai colors ko
});
