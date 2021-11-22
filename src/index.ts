import express, { Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connect } from './utils/connect';
const app = express();
dotenv.config();

const PORT = process.env['PORT'] || 4000;

//cors
import cors from 'cors';

// importing routes from routes files.
import usersRoute from './routes/api/users';
import authRoute from './routes/api/auth';
import studentHomeRoute from './routes/api/studentHomeAttendance';
import profileRoute from './routes/api/profile';

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//define routes
app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);
app.use('/api/studentHome/', studentHomeRoute);
app.use('/api/profile', profileRoute);

app.get('/', (_, res: Response) => {
    res.send('Hello World!');
});

app.listen(PORT, async () => {
    console.log(`App started on port ${PORT}`);
    const conn = await connect();
});
