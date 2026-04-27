require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');

const connectDB = require('./config/db');

const exercisesRouter = require('./routes/exercisesRoutes');
const routinesRouter = require('./routes/routinesRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

connectDB();

const port = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/exercises', exercisesRouter);
app.use('/routines', routinesRouter);
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


