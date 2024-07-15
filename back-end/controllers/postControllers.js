import Post from "../models/postModel.js";
import User from "../models/userModel.js";

// @desc Create post
// @route POST /api/posts/create
// @access private

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

// @desc Get post
// @route GET /api/posts/:id
// @access public

const getPost = async(req, res) => {

    try {

        const post = await Post.findById(req.params.id);

        if(!post){
            return res.status(404).json({
                message: 'Post not found'
            })
        };

        res.status(200).json({post});
        
    } catch (err) {

        res.status(500).json({message:err.message});
        console.log('Error in getPost: ', err.message);
        
    }

}

// @desc Get post
// @route GET /api/posts/:id
// @access public

const deletePost = async(req, res) => {

    try {

        const post = await Post.findById(req.params.id);

        if(!post){
            return res.status(404).json({
                message: 'Post not found'
            })
        };

        if (post.postedBy.toString() !== req.user._id.toString()){
            return res.status(401).json({
                message: 'Unauthorized! Can not delete another user\'s post'
            });
        }

        await Post.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message:'Post Deleted Successfully'
        });

        
    } catch (err) {

        res.status(500).json({message:err.message});
        console.log('Error in deletePost: ', err.message);
        
    }

}

// @desc Like or Unlike a post
// @route POST /api/posts/like/:id
// @access private

const likeUnlikePost = async(req, res) => {

    try {

        const {id:postId} = req.params;
        const userId = req.user._id

        const post = await Post.findById(postId);

        if(!post){
            return res.status(404).json({
                message:'Post not found'
            })
        };
        const userLikedPost = post.likes.includes(userId);

        if(userLikedPost){
            await Post.updateOne({_id:postId}, {$pull:{likes: userId}})
            res.status(200).json({message:"Post unliked"})
            }

        else{

            post.likes.push(userId);
            await post.save();
            res.status(200).json({
                message:"Post liked"
            })

            }
        }

    
        
     catch (err) {
        res.status(500).json({message:err.message});
        console.log('Error in likeUnlikePost: ', err.message);
        
    }

}

// @desc Reply to a post
// @route POST /api/posts/reply/:id
// @access private

const replyToPost = async(req, res) => {

    try {

        const {replyText} = req.body;
        const postId = req.params.id;
        const userId = req.user._id;
        const userProfilePic = req.user.profilePic;
        const username = req.user.username;

        

        if(!replyText){
            return res.status(400).json({
                message:"Enter the reply"
            });
        }

        const post = await Post.findById(postId);
        if(!post){
            return res.status(404).json({
                message:"Post not found"
            })
        }

        const reply ={userId, replyText, userProfilePic, username};

        post.replies.push(reply);
        await post.save();

        res.status(200).json({
            message:"Replied to post",
            post
        });

    }
        
     catch (err) {
        res.status(500).json({message:err.message});
        console.log('Error in replyToPost: ', err.message);
        
    }

}

// @desc Get New posts
// @route GET /api/posts/new
// @access public

const getNewPosts = async(req, res) => {

    try {

        const posts = await Post.find().sort({createdAt:-1}).select('-replies');

        res.status(201).json(
            {message:'Getting All New Posts', 
            posts})
        
    } catch (err) {
        res.status(500).json({message:err.message});
        console.log('Error in getNewPosts: ', err.message);  
    }

}

// @desc Get Trending posts
// @route GET /api/posts/trending
// @access public


const getTrendingPosts = async(req, res) => {

    try {

        const oneDayAgo = new Date();
        oneDayAgo.setDate(oneDayAgo.getDate() - 1 );

        const posts = await Post.find({createdAt:{$gte:oneDayAgo}}).select('-replies').sort({likes:-1});

        res.status(201).json({message:'Getting All Trending Posts', posts});

        
    } catch (err) {
        res.status(500).json({message:err.message});
        console.log('Error in getTrendingPosts: ', err.message);  
    }

}

// @desc Get Top posts
// @route GET /api/posts/top
// @access public


const getTopPosts = async(req, res) => {

    try {

        const posts = await Post.find().select('-replies').sort({likes:-1});

        res.status(201).json({message:'Getting All top posts', posts})
        
    } catch (err) {
        res.status(500).json({message:err.message});
        console.log('Error in getTopPosts: ', err.message);  
    }

}



export { createPost, getPost, deletePost, likeUnlikePost, replyToPost, getNewPosts, getTrendingPosts, getTopPosts }