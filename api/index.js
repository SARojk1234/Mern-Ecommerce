import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './route/user.route.js'
import authRoutes from './route/auth.route.js'
dotenv.config();


const app = express();
app.use(express.json());

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.log(err);
})

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message =err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})