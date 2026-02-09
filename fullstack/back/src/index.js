require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const exercisesRouter = require('./routes/exercisesRoutes');
const routinesRouter = require('./routes/routinesRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
const port = 9000;

const url_mongo = "mongodb+srv://marcioelliott:3wx9jsjBUXDKQjON@cluster0.ruunbo8.mongodb.net/MisEjercicios?retryWrites=true&w=majority";

mongoose.connect(url_mongo);

const db = mongoose.connection;

db.on("error", (error) => {
    console.log(`Error al conectar con mongo ${error}`);
});

//Comprobamos si se ha conectado correctamente
db.once("connected", () => {
    console.log(`Success connect`);
});

//Comprobamos si se ha desconectado mongodb
db.on("disconnected", () => {
    console.log(`mongoose is disconnected`);
});

app.use(express.json());
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/exercises', exercisesRouter);
app.use('/routines', routinesRouter);
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
