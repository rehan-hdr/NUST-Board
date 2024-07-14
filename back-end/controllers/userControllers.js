import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateTokenAndSetCookie.js'


// @desc register a user
// @route POST /api/users/signup
// @access public

const signupUser = async (req, res) => {
    try {
        const { name, email, username, password } = req.body;
        const user = await User.findOne({$or:[{email}, {username}]});
        
        if (user) {
            return res.status(400).json({message:'User already exists'});
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name, 
            username, 
            email,
            password:hashedPassword
        });
        await newUser.save();

        if (newUser){

            generateTokenAndSetCookie(newUser._id, res);
            res.status(201).json({
                message:'User created',
                _id:newUser._id,
                name: newUser.name})
        }
        else{

            res.status(400).json({message:'Invalid user data'})
        }

    } catch (err) {
        res.status(500).json({message:err.message});
        console.log('Error in signupUser: ', err.message);
    }
}

// @desc login user
// @route POST /api/users/login
// @access public

const loginUser = async (req, res) => {
    try {

        const {username, password} = req.body;

        const user = await User.findOne({username});

        if (!user){
            return res.status(400).json({
                message:'username is not registered'
            })
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect){
            return res.status(400).json({
                message: 'Password is wrong'
            })
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            message:'Login Successful',
            _id: user._id,
            name:user.name,
        })


    } catch (err) {
        res.status(500).json({message:err.message});
        console.log('Error in loginUser: ', err.message);
    }
}


// @desc login user
// @route POST /api/users/login
// @access public

const logoutUser = (req, res) => {
    try {
        res.cookie('token', '', {
            maxAge:1
        })
        res.status(200).json({
            message:'User logged out'
        });

    } catch (err) {
        res.status(500).json({message:err.message});
        console.log('Error in logoutUser: ', err.message);
    }
}


export {signupUser, loginUser, logoutUser}