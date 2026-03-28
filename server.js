const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// --- MOCK IDENTITY MIDDLEWARE ---
app.use((req, res, next) => {
  req.user = { _id: '65d9876543210fedcba09876' }; 
  next();
});

app.use('/api/transactions', require('./routes/transactionRoutes'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log(' WealthWave API running on port 5000')))
  .catch(err => console.log('❌Database Connection Error:', err));