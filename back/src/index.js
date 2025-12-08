const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');

const exercisesRouter = require('./routes/exercisesRoutes');
const Exercise = require('./models/Exercise');
const exercisesDB = require('./mocks/exercisesDB')

const app = express()
const port = 9000

const url_mongo = "mongodb+srv://marcioelliott:3wx9jsjBUXDKQjON@cluster0.ruunbo8.mongodb.net/MisEjercicios?retryWrites=true&w=majority";

mongoose.connect(url_mongo);

const db = mongoose.connection;

db.on("error", (error) =>{
    console.log(`Error al conectar con mongo ${error}`);
});

db.once("open", () => {
  console.log(`Conectado a la base: ${mongoose.connection.name}`);
});

//Comprobamos si se ha conectado correctamente
db.once("connected", () =>{
    console.log(`Success connect`);
});

//Comprobamos si se ha desconectado mongodb
db.on("disconnected", () =>{
    console.log(`mongoose is disconnected`);
});


app.use(express.json());
app.use(cors());

app.use('/exercises', exercisesRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})


// ⬇️ AQUÍ adentro va el bloque para insertar tus ejercicios una sola vez
db.once("open", async () => {
    console.log('✅ Conectado a MongoDB');
    console.log('Base actual:', mongoose.connection.name);

    // Si la colección está vacía, insertamos tus ejercicios:
    const count = await Exercise.countDocuments();
    if (count === 0) {
        await Exercise.insertMany(exercisesDB);
        console.log('Ejercicios insertados en la colección "exercises" de MisEjercicios');
    } else {
        console.log('La colección ya tiene datos');
    }
});



