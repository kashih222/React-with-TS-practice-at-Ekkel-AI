const express = require('express');
const router = express.Router();
const Note = require('../Model/Note'); 
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');

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

module.exports = router;
