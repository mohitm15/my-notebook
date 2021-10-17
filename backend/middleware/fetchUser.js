
const jwt = require("jsonwebtoken");
const JWT_SECRET = "mohitisagood$boy";



const fecthUser = (req,res,next) => {

    //Get the user from the jwt token and add id to req object
    const token = req.header("auth-token"); //taking token from header
    if(!token) {
        res.status(401).send("Please authenticate using a valid token");
    }
    try {
        //verify simply returns the payload we supply = { user: {id:4535345}}
        const data = jwt.verify(token, JWT_SECRET );
        
        
        //sending req.user to getUser fn
        req.user = data.user;
        next();        
    } catch (error) {
        res.status(401).send("Please authenticate using a valid token");
    }

}

module.exports = fecthUser;