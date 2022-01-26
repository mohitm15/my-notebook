const mongoose = require("mongoose");
//const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const mongoURI = "mongodb+srv://mohit_maroliya:Zker42FNU.buD_E@cluster0.n03hm.mongodb.net/iNotebook?retryWrites=true&w=majority"

const connectToMongo = async() => {
    mongoose.connect(mongoURI, {useNewUrlParser: true}, ()=> {
        console.log("Connected to Mongo Successfully!");
    })
}

module.exports = connectToMongo;