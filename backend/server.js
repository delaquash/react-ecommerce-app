const express =require("express");
const dotenv =require('dotenv'); 
const color = require('colors');
const connectDB = require('./config/db');
const product = require('./data/products')
const productRoute = require('./route/productRoute')
const { notFound, errorHandlingStatus } = require('./middleware/errorHandling')



dotenv.config();
connectDB();
const app = express();

app.use('/api/products', productRoute)

app.get('/', (req, res) => {
    res.send('API is running....')
});

// Error handling for 404(Page not found)
app.use(notFound)
// Error handling for 200 and 500 http status code
app.use(errorHandlingStatus)

const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold.underline));