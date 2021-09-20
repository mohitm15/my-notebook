const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//ROUTE 1 :Get all the notes of a particular user GET:/api/notes/fetchallnotes
router.get("/fetchallnotes", fetchUser, async (req, res) => {
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
  fetchUser,
  [
    body("title", "Should be at  least 3 characters").isLength({ min: 3 }),
    body("description", "Should be at  least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      //If there are errors, then return bad request + Errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      //creating a new note
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });

      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("internal server error");
    }
  }
);

//ROUTE 3 :Update notes of a particular user PUT:/api/notes/updatenote:id

router.put("/updatenote/:id", fetchUser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    //console.log(req.body);

    //Create a newNote object
    let newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    //finding the note to be updated and update it
    let noteToBeUpdated = await Notes.findById(req.params.id); //id in the parameter

    //if note is not found
    if (!noteToBeUpdated) {
      return res.status(404).send("Not found");
    }

    //req.user.id == person ki id who is updating and notetobeupdated.user = jiska note update ho rha uski id
    if (noteToBeUpdated.user.toString() !== req.user.id) {
      return res.status(401).send("Unauthorised User");
    }

    noteToBeUpdated = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );

    res.json({ noteToBeUpdated });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("internal server error");
  }
});

//Route 4: Delete note of a particular user DELETE: /api/notes/deletenote/:id

router.delete("/deletenote/:id", fetchUser, async (req, res) => {
  try {
    //finding the note to be deleted and delete it
    let noteToBeDeleted = await Notes.findById(req.params.id);

    //if note is not found
    if (!noteToBeDeleted) {
      return res.status(404).send("Not Found ");
    }

    //req.user.id == person ki id who is deleting and notetobedeleted.user = jiska note delete ho rha uski id'
    if (noteToBeDeleted.user.toString() !== req.user.id) {
      return res.status(401).send("Not authorised to delete");
    }

    noteToBeDeleted = await Notes.findByIdAndDelete(req.params.id);
    res.status(200).send("Note deleted succeessfully! ");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("internal server error");
  }
});
module.exports = router;
