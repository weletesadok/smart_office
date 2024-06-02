const mongoose = require("mongoose");

const { Schema } = mongoose;

const destinationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: {
        city: String,
        country: String,
        coordinates: {
          latitude: Number,
          longitude: Number,
        },
      },
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Historical", "Natural", "Cultural", "Entertainment", "Other"],
    },
    attachments: [String],
    reviews: [{
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      rating: {
        type: Number,
        min: 1,
        max: 5,
      },
      comment: String,
    }],
    operatingHours: {
      open: String,
      close: String,
    },
    entryFee: Number,
  },
  {
    timestamps: true,
  }
);

const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;
