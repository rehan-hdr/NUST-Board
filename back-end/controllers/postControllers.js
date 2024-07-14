import Post from "../models/postModel.js";
import User from "../models/userModel.js";

// @desc Create post
// @route POST /api/posts/create
// @access public

const createPost = async (req, res) => {
    
    try {

        const {postedBy, title, description,img} = req.body;

        if (!title || !postedBy){
            return res.status(400).json({
                message:'postedBy and title fields are required'
            })
        }
        const user = await User.findById(postedBy);

        if(!user){
            return res.status(404).json({
                message:'User not found'
            });
        }

        if (user._id.toString() !== req.user._id.toString()){
            return res.status(401).json({message:'You are not authorized to create post'})
        }

        if (title.length > 150){
            return res.status(400).json({message:`Title must be less than 150 characters`
            })
        }
        if (description?.length > 1000){
            return res.status(400).json({message:`Description must be less than 1000 characters`
            })
        }

        const newPost = new Post({
            postedBy, title, description, img
        });

        await newPost.save();

        res.status(200).json({
            message:"Post created successfully", newPost
        });

    } catch (err) {
        res.status(500).json({message:err.message});
        console.log('Error in createPost: ', err.message);
    }
}

export { createPost }