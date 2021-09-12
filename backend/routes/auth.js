const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/User");

//Creating a User :POST - "/api/auth/createuser"

router.post(
  "/createuser",

  body("name", "Name must have at least 3 characters").isLength({ min: 3 }),
  body("email", "Enter a valid email").isEmail(),

  async (req, res) => {
    //If there are errors, then return bad request + Errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //Check whether email exists
      let user = await User.findOne({ email: req.body.email });
      console.log("user.nemail = " + user);
      if (user) {
        console.log(user.email);
        return res.status(400).json({ error: "Email Already Taken" });
      }
    //user is created
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then((user) => res.json(user));
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some error occured")
    }
  }
);

module.exports = router;
