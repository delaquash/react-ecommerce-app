const express =require('express') ;
const dotenv =require('dotenv'); 
const color = require('colors');
const connectDB = require('./config/db');



dotenv.config();
connectDB();
const app = express();

app.get('/', (req, res) => {
    res.send('API is running....')
})



const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold.underline));