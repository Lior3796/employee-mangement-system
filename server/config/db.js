const mongoose = require("mongoose");

const connectDB = async () => {
    const connect = await mongoose.connect("mongodb+srv://liorlsa9:SOLO3796@cluster0.cbh9k.mongodb.net/Employees?retryWrites=true&w=majority", {
        useNewUrlParser: true
    })
    console.log(`mongoDB connected`.cyan.underline.bold)


}
module.exports = connectDB;