"use strict";
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const donationSchema = new mongoose.Schema({
  donationName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ["Food", "Clothing", "Furniture", "Other"],
    default: "Other"
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    default: ""
  },
  _creator: {
    type: ObjectId,
    ref: "User"
  },
  _requestedBy: {
    type: ObjectId,
    ref: "User"
  },
  _volunteer: {
    type: ObjectId,
    ref: "User"
  }
});
module.exports = mongoose.model("Donation", donationSchema);
