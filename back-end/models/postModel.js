import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    title:{
        type: String,
        maxLength: 150,
        required:true
    },
    description:{
        type:String,
        maxLength: 1000.
    },
    img:{
        type: String,
        default: ''
    },
    likes:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"User",
        default:[],
    },
    replies:[
        {
            userId:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            },
            replyText:{
                type:String,
                required: true,
            },
            userProfilePic:{
                type:String,
            },
            username:{
                type:String,
            },
        }
    ],
    postCategory:{
        type:String,
    },
}, {
    timestamps: true
})

const Post = mongoose.model('Post', postSchema);

export default Post;