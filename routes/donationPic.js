"use strict";

const { Router } = require("express");
const router = Router();
// const Donation = require("../models/donation");

router.get("/", (req, res) => {
  res.json({ type: "success", data: { title: "donationpic works" } });
});

//-------cloudinary configurations--------

const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const storage = cloudinaryStorage({
  cloudinary,
  folder: "/bring-folder",
  allowedFormats: ["jpg", "png"]
});
const upload = multer({ storage });

router.post("/pic", upload.single("imageUrl"), (req, res) => {
  console.log("route caght");
  const { url } = req.file;
  console.log("route1", req);
  res.json({ type: "success", data: url });
  console.log("route2", req.file);
});

module.exports = router;
