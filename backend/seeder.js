const  colors  = require("colors");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const users = require("./data/user");
const products = require("./data/products");
const User = require("./Model/userModel");
const Order = require("./Model/orderModel");
const Product = require("./Model/productModel");
const connectDB = require("./config/db");

dotenv.config();



const importData = async() => {
    await connectDB()
    try {
        
        // empty the db before sending user details etc 
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        // import users
        const createdUsers = await User.insertMany(users)
        // connection btw product and user which is admin and surfaces at 0 in the array list in userjs
        const adminUser = createdUsers[0]._id

        // for product in order to add admin user to each product
        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser}
        })
        
        // passing the sampleProduct into Product
        await Product.insertMany(sampleProducts)
        console.log('Data Imported!'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}


const destroyData = async() => {
    try {

        await connectDB()
        // empty the db before sending user details etc 
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

       
        console.log('Data destroyed!'.red.inverse);
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}


if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}