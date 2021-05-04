const express =require('express') ;
const dotenv =require('dotenv'); 
const color = require('colors');
const connectDB = require('./config/db');
const product = require('./data/products')
const productRoute = require('./route/productRoute')



dotenv.config();
connectDB();
const app = express();

app.use('/api/products', productRoute)

app.get('/', (req, res) => {
    res.send('API is running....')
})



const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold.underline));