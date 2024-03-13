const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('DB Connected');
  } catch (error) {
    console.error('Error occurred:', error.message);
  }
}

module.exports = connectDB;

// Rest of your code remains unchanged...
