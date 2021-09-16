const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";


const connectToMongo = async() => {
    mongoose.connect(mongoURI, {useNewUrlParser: true}, ()=> {
        console.log("Connected to Mongo Successfully!");
    })
}

module.exports = connectToMongo;