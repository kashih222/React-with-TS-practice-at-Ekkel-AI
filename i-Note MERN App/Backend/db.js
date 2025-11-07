const mongoose = require("mongoose")


const Mongo_URI = "mongodb://localhost:27017/inotebook";

const connectToMongo =  async()=>{
          await mongoose.connect('mongodb://localhost:27017/inotebook');
          console.log("Mongoose Conected Sucessfuly")
    }

module.exports = connectToMongo;