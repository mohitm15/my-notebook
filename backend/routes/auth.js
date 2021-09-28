const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "mohitisagood$boy";
const fecthUser = require("../middleware/fetchUser");

//ROUTE 1 :Creating a User :POST - "/api/auth/createuser"
router.post(
  "/createuser",
  [
    body("name", "Name must have at least 3 characters").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {
    //If there are errors, then return bad request + Errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //Check whether email exists
      let user = await User.findOne({ email: req.body.email });
      //console.log("user.nemail = " + user);
      if (user) {
        //console.log(user.email);
        return res.status(400).json({ error: "Email Already Taken" });
      }

      //hashing the password here
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      //user is created
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      //passing the id as data to make jwt token
      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      //console.log(authToken)

      //res.json(user);
      res.json({ authToken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("internal server error");
    }
  }
);

//ROUTE 2 :Authenticating a User :POST - "/api/auth/login"
router.post(
  "/login",

  body("email", "Enter a valid email").isEmail(),

  async (req, res) => {
    //If there are errors, then return bad request + Errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    
    let success = false;

    try {
      let user = await User.findOne({ email });

      // console.log("user - "+user)

      if (!user) {
        res.status(400).json({success,error:"Login with correct credentials!"});
      }

      //compare the pwd bw 'hash of pwd entered' & 'hash from your pwdDB'
      const passwordCompare = await bcrypt.compare(password, user.password);

      if (!passwordCompare) {
        res.status(400).json({success,error:"Login with correct credentials!"});
      }
      //nodemon crashes whenever PASSWORD === NULL


      const payload = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(payload, JWT_SECRET);
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE 3 :Get Loggedin user details  :GET - "/api/auth/getUser" LOGIN REQUIRED;

router.get("/getUser", fecthUser, async (req, res) => {
  try {
    const userid = req.user.id; //gets userid from fetchUser middleware fn
    let user = await User.findById(userid);
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
