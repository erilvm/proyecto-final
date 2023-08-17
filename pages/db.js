// db.js
const mongoose = require('mongoose');


const MONGODB_URI = 'mongodb+srv://ubaldo:Nasaspacex1@cluster1.vneebil.mongodb.net/?retryWrites=true&w=majority'


async function connectToDatabase() {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

module.exports = { connectToDatabase };