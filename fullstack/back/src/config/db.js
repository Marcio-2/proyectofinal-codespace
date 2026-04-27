const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URL_MONGO);

        console.log('MongoDB connected successfully');

        const db = mongoose.connection;

        db.on("error", (error) => {
            console.log(`Error al conectar con mongo ${error}`);
        });

        db.on("disconnected", () => {
            console.log("mongoose is disconnected");
        });

    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;