const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://mohit_maroliya:Zker42FNU.buD_E@cluster0.n03hm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=> {
        console.log("Connected to Mongo Successfully!");
    })
}

module.exports = connectToMongo;