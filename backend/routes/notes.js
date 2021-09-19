const express = require("express");
const router = express.Router();
const fecthUser = require("../middleware/fetchUser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//ROUTE 1 :Get all the notes of a particular user GET:/api/notes/fetchallnotes
router.get("/fetchallnotes", fecthUser, async (req, res) => {
    try {
        let notes = await Notes.find({ user: req.user.id });
  res.json(notes);
        
    } catch (error) {
        console.log(error.message);
      res.status(500).send("internal server error");
    }
});

//ROUTE 2 :Add notes of a particular user POST:/api/notes/addnote
router.post(
  "/addnote",
  fecthUser,
  [
    body("title", "Should be at  least 3 characters").isLength({ min: 3 }),
    body("description", "Should be at  least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    
    try {

    const {title,description,tag} = req.body;

    //If there are errors, then return bad request + Errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    //creating a new note
    const note = new Notes({
        title,description,tag,user:req.user.id
    })

    const savedNote = await note.save();
    res.json(savedNote);
      
    } catch (error) {
      console.log(error.message);
      res.status(500).send("internal server error");
    }
  }
);

module.exports = router;
