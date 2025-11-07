const mongoose = require('mongoose')
const { Schema } = mongoose;

const NoteScheema = new mongoose.Schema({
  titlle: {
    type:String,
    required:true,
  },
  decription:{
    type:String,
    require:true,
    
  },
  tag:{
    type:String,
    default:"General"
  },
  date:{
    type:Date,
    default:Date.now
  }
});

const Note = mongoose.model("Note", NoteScheema);
module.exports = Note;