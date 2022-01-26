const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    validate(value) {
      if(value.length < 5) {
        throw new Error( "Minimum length is 5 characters");
      }
      else if (!value.match(/\d/) || !value.match(/[a-zA-Z]/) ) {
        throw new Error(
          "Password must contain at least one letter and one number"
        );
      }

    }
    
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("users", UserSchema);
module.exports.User = User;
