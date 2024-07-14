import express from 'express';
import {loginUser, signupUser, logoutUser, updateUser, getUserProfile} from '../controllers/userControllers.js';
import validateTokenHandler from '../middleware/validateTokenHandler.js';

const router = express.Router();

router.get('/profile/:username', getUserProfile);
router.post('/signup', signupUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.put('/update/:id', validateTokenHandler, updateUser);

export default router