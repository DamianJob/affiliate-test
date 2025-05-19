const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  age: { type: Number, required: true },
  sex: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  paymentNumber: { type: String },
  // You can add more fields if needed (e.g. affiliate link, shared products, etc.)
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
