const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({

  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },

  username: {
    type:String,
    required:true,
  },
  email:{
    type:String,
    require:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  },
  date:{
    type:Date,
    default:Date.now
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;