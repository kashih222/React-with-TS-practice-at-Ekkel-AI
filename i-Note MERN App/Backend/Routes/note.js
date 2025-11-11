const express = require('express');
const router = express.Router();
const Note = require('../Model/Note'); 
const { body, validationResult } = require('express-validator');
const fetchuser = require('../Middleware/fetchuser');

// Create a note (Login required)
router.post(
  '/addnote',
  fetchuser,
  [
    body('title', 'Enter a valid title').notEmpty(),
    body('description', 'Description must be at least 5 characters').isLength({ min: 5 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title, description, tag } = req.body;

      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id
      });

      const saveNote = await note.save();
      res.status(201).json(saveNote);
    } catch (error) {
      console.error("Save note failed:", error);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Fetch all notes (Login required)
router.get('/fetchallnotes', fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error("Fetch notes failed:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update Note 
router.put(
  '/updatenote/:id',
  fetchuser,
  async (req, res) => {
    const {title, description, tag} = req.body;
    // create new note object 
    try {
      const newNote = { };
    if (title){ newNote.title = title};
    if (description){ newNote.description = description};
    if (tag){ newNote.tag = tag};

    // find the note to be updated and updtaed 
    let note = await Note.findById(req.params.id);
    if(!note){res.status(404).send("not found")}

    if(note.user.toString() !== req.user.id){
      return res.send(401).send("Not Allowed");
    }
    note = await Note.findByIdAndUpdate (req.params.id, {$set: newNote}, {new:true})
    res.json({note});
    }  catch (error) {
      console.error("Save note failed:", error);
      res.status(500).send("Internal Server Error");
    }
    
  })

  //Delete Note
  router.delete(
  '/deletenote/:id',
  fetchuser,
  
  async (req, res) => {
    try {
      let note = await Note.findById(req.params.id);
    if(!note){res.status(404).send("not found")}

    if(note.user.toString() !== req.user.id){
      return res.send(401).send("Not Allowed");
    }

    note = await Note.findByIdAndDelete (req.params.id,  {new:true})
    res.json({"Success":"Note has been deleted", note : note});
    } catch (error) {
      console.error("Save note failed:", error);
      res.status(500).send("Internal Server Error");
    }
    
  })


module.exports = router;
