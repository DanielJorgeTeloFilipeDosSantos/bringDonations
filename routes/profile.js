"use strict";

const { Router } = require("express");
const router = Router();
const User = require("../models/user");

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

router.post("/image", upload.single("imageUrl"), (req, res, next) => {
  //const { role, email, password, name, _donationPost } = req.body;
  const { url } = req.file;

  User.findByIdAndUpdate(
    req.user._id,
    {
      // ...(role && { role }),
      // ...(email && { email }),
      // ...(password && { password }),
      // ...(name && { name }),
      ...(url && { imageUrl: url })
      // ...(_donationPost && { _donationPost })
    },
    { new: true }
  )
    // .populate("_donationPost")
    .then(user => {
      res.json({ type: "success", data: { user } });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;

//----------------------------------------

//----------------------------------------

// router.get("/", (req, res, next) => {
//   res.render("index");
// });

// router.get("/profile", (req, res, next) => {
//   User.findById(req.session.user._id)
//     .then(user => {
//       console.log(user);
//       res.render("profile", { user });
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

// router.post("/profile/edit", (req, res, next) => {
//   const firstname = req.body.firstname;
//   const lastname = req.body.lastname;
//   const userDescription = req.body.userDescription;
//   const firstname = req.body.firstname;
//   const lastname = req.body.lastname;
//   const userDescription = req.body.userDescription;

//   const data = {
//     firstname,
//     lastname,
//     userDescription
//   };

//   User.update({ _id: req.session.user._id }, data)
//     .then(user => {
//       console.log(user);
//       res.redirect("/profile");
//     })
//     .catch(error => {
//       console.log("Could not update user information", error);
//     });
// });
