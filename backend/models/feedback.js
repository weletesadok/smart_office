const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
