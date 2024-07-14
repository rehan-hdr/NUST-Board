import express from 'express';

import { createPost } from '../controllers/postControllers.js';
import validateTokenHandler from '../middleware/validateTokenHandler.js';

const router = express.Router();

router.post('/create',validateTokenHandler, createPost);

export default router