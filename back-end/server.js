import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/dbConnection.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

connectDB();

const app = express();

const port =  process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(errorHandler);


app.use('/api/users', userRoutes);

app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`)
    }
)

