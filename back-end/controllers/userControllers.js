import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateTokenAndSetCookie.js'
import{v2 as cloudinary} from 'cloudinary'

// @desc register a user
// @route POST /api/users/signup
// @access public

const signupUser = async (req, res) => {
    try {
        const { name, email, username, password } = req.body;
        const user = await User.findOne({$or:[{email}, {username}]});
        
        if (user) {
            return res.status(400).json({error:'User already exists'});
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
                name: newUser.name,
                email: newUser.email,
                username: newUser.username,
                bio:newUser.bio,
                profilePic: newUser.profilePic})
        }
        else{

            res.status(400).json({error:'Invalid user data'})
        }

    } catch (err) {
        res.status(500).json({error:err.message});
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
                error:'username is not registered'
            })
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect){
            return res.status(400).json({
                error: 'Password is wrong'
            })
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            message:'Login Successful',
            _id:user._id,
            name: user.name,
            email: user.email,
            username: user.username,
            bio: user.bio,
            profilePic: user.profilePic
        })


    } catch (err) {
        res.status(500).json({error:err.message});
        console.log('Error in loginUser: ', err.message);
    }
}


// @desc logout user
// @route POST /api/users/logout
// @access private

const logoutUser = (req, res) => {
    try {
        res.cookie('token', '', {
            maxAge:1
        })
        res.status(200).json({
            message:'User logged out'
        });

    } catch (err) {
        res.status(500).json({error:err.message});
        console.log('Error in logoutUser: ', err.message);
    }
}

// @desc update user
// @route PUT /api/users/update/:id
// @access private

const updateUser = async (req, res) => {
    const {name, email, username, password, bio} = req.body;
    let { profilePic } = req.body;
    const userId = req.user._id
    try {

        let user = await User.findById(userId);

        if (!user){
            return res.status(400).json({
                error:'User not found'
            })
        }

        if (req.params.id !== userId.toString()){
            return res.status(400).json({error:'You can not update someone else\'s user profile'});
        }

        if (password){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            user.password = hashedPassword;
        }

        if(profilePic){
            if(user.profilePic){
                await cloudinary.uploader.destroy(user.profilePic.split('/').pop().split('.')[0]);
            }
            const uploadedResponse = await cloudinary.uploader.upload(profilePic);
            profilePic = uploadedResponse.secure_url;
        }

        user.name = name || user.name;
        user.email = email || user.email;
        user.username = username || user.username;
        user.profilePic = profilePic || user.profilePic;
        user.bio = bio || user.bio;

        user = await user.save();

        user.password=null;

        res.status(200).json({
            user,
        })


    } catch (err) {
        res.status(500).json({error:err.message});
        console.log('Error in updateUser: ', err.message);
    }
}

// @desc get user profile
// @route GET /api/users/profile/:username
// @access public

const getUserProfile = async (req, res) => {
    const {username} = req.params;
    try {
        const user = await User.findOne({username}).select('-password').select('-email').select('-updatedAt');
        if(!user) return res.status(404).json({error:'User does not exist'});

        res.status(201).json(user)





    } catch (err) {
        res.status(500).json({error:err.message});
        console.log('Error in updateUser: ', err.message);
    }
}


export {signupUser, loginUser, logoutUser, updateUser, getUserProfile}