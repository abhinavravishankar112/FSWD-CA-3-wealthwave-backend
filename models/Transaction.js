const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  // TODO: Define 'description' (String, Required, trimmed)
  description: {
    type: String,
    required: true,
    trim: true,
  },
  // TODO: Define 'amount' (Number, Required)
  amount:{
    type: Number,
    required: true,
  },
  // TODO: Define 'category' (String, Required)
  category: {
    type: String,
    required: true,
  },
  // TODO: Define 'owner' (Type: mongoose.Schema.Types.ObjectId, Required: true, ref: 'User')
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  }
}, { 
  // TODO: Enable automatic timestamps
  timestamps: true,
});

module.exports = mongoose.model('Transaction', transactionSchema);