import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/dbConnection.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js'
import errorHandler from './middleware/errorHandler.js';
import {v2 as cloudinary} from 'cloudinary' 

dotenv.config();

connectDB();

const app = express();

const port =  process.env.PORT || 5000;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(errorHandler);


app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`)
    }
)

