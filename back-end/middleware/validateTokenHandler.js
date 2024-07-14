import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const validateTokenHandler = async (req, res, next) => {

    try {

        const userToken = req.cookies.token;

        if (!userToken){
            return res.status(401).json({
                message: 'Unauthorized. Token does not exist.'
            })
        };

        // decodes the token and returns the payload i.e in our case, userId
        const decoded = jwt.verify(userToken, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decoded.userId).select('-password');

        // the req.user is assigned the decoded user, for any succeeding functions
        req.user = user;
        next();
        
    } catch (err) {
        res.status(500).json({message:err.message});
        console.log('Error in validateTokenHandler: ', err.message);
      
    }
}

export default validateTokenHandler