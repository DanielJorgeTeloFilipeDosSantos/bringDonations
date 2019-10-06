"use strict";
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const schema = new mongoose.Schema({
  // role: {
  //   type: String,
  //   enum: ["User", "Organisation"],
  //   default: "User"
  // },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  imageUrl: {
    type: String,
    default: "../images/default-user-icon-4.jpg"
  },
  _donationPost: [
    {
      type: ObjectId,
      default: "",
      ref: "DonationPost"
    }
  ]
});

const signInStatic = require("./statics/sign-in");
const signUpStatic = require("./statics/sign-up");
const findByEmailStatic = require("./statics/find-by-email");

schema.statics.signIn = signInStatic;
schema.statics.signUp = signUpStatic;
schema.statics.findByEmail = findByEmailStatic;

const User = mongoose.model("User", schema);

module.exports = User;
