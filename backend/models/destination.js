const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  woreda: {
    type: String,
    required: true
  },
  kebele: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  attachments: [{
    type: String,
    required: true
  }],
  bestTimeToVisit: {
    type: String,
    required: true
  },
  tourismCategories: [{
    type: String,
    enum: [
      "Beaches",
      "Mountains",
      "Historical Sites",
      "Cultural Heritage",
      "Urban Exploration",
      "Adventure Tourism",
      "Wildlife Safaris",
      "Festivals",
      "Natural Parks",
      "Spa and Wellness",
      "Food and Cuisine",
      "Cruises and Sailing",
      "Sports and Recreation",
      "Eco-Tourism",
      "Rural Tourism",
      "Family Friendly"
    ]
  }]
});

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;
