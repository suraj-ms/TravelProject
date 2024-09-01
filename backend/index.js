import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.js';
import tourRouter from './routes/tours.js';
import authRouter from './routes/auth.js'; 
import reviewRouter from './routes/review.js'; 
import bookingRouter from './routes/booking.js'; 



dotenv.config();
const app = express();

const corsOption = {
    origin:true,
    Credential:true
}

// Database connection
mongoose.set('strictQuery', false);
const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error(`MongoDB connection error: ${error}`);
        process.exit(1);  // Exit the process with a failure code
    }
};

// Middleware
app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());

// Routes
app.use('/api/v1/tour', tourRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/review', reviewRouter);
app.use('/api/v1/booking', bookingRouter);

// app.get('/', (req, res) => {
//     res.send('Hello');
// });

// Start server only after DB connection is established
connectdb().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
});
