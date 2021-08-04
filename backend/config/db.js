const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        })
        console.log(`MongoDB Connected: ${con.connection.host}`.green.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red)
        process.exit(1)
    }
}

module.exports = connectDB;