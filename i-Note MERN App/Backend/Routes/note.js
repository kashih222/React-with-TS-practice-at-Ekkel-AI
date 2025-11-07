const express = require('express');
const router = express.Router()
const Note = require('../Model/Note')

// create a user using post api/note/ . Doest require auth 
router.post('/',(req, res)=>{
    
    console.log(req.body)
    const note = new Note(req.body)
    note.save();
    res.send(req.body)
})

module.exports = router