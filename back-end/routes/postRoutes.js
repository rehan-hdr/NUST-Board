import express from 'express';

import { createPost, getPost, deletePost, likeUnlikePost, replyToPost, getNewPosts, getTrendingPosts, getTopPosts } from '../controllers/postControllers.js';
import validateTokenHandler from '../middleware/validateTokenHandler.js';

const router = express.Router();

router.get('/new', getNewPosts);
router.get('/trending', getTrendingPosts);
router.get('/top', getTopPosts);

router.get('/:id', getPost);
router.post('/create',validateTokenHandler, createPost);
router.delete('/:id',validateTokenHandler, deletePost);
router.post('/like/:id', validateTokenHandler, likeUnlikePost);
router.post('/reply/:id', validateTokenHandler, replyToPost)




export default router