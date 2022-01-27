const mongoose = require("mongoose");
//const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const mongoURI = "mongodb+srv://mohit_maroliya:gw$@yG9W++%j@cluster0.n03hm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectToMongo = async() => {
    try {
          mongoose.connect(mongoURI, {useNewUrlParser: true}, ()=> {
            console.log("Connected to Mongo Successfully!");
        })
    }
    catch (e) {
        console.error(e);
    }
}

module.exports = connectToMongo;