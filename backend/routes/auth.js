const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/User");

//Creating a User :POST - "/api/auth/"
router.post(
  "/",

  body("name", "Name must have at least 3 characters").isLength({ min: 3 }),
  body("email", "Enter a valid email").isEmail(),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        res.json({
          error: err.name,
          message: err.message,
        });
      });
  }
);

module.exports = router;
