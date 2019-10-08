"use strict";
const { Router } = require("express");
const router = Router();
const Donation = require("../models/donation");

// router.get("/test", (req, res, next) => {
//   res.json({ msg: "donation works" });
// });

router.post("/create", (req, res, next) => {
  console.log("req.bodyyyyy", req.body);
  const donationName = req.body.donationName;
  const category = req.body.category;
  const description = req.body.description;
  const location = req.body.location;
  const imageUrl = req.file && req.file.url;
  const _creator = req.session.user._id;

  Donation.create({
    donationName,
    category,
    description,
    location,
    imageUrl,
    _creator
  })
    .then(donation => {
      res.json({ type: "success", data: { donation } });
    })
    .catch(error => {
      next(error);
    });
});
// // Note: Whatever goes after ":"" in the route is being accessed
// // with the same name in req.params.THENAME
router.get("/list", (req, res, next) => {
  Donation.find()
    // .sort({ createdAt: -1 })
    .populate("_creator")
    .then(donation => {
      res.json({ type: "success", data: { donation } });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/:id", (req, res, next) => {
  Donation.findById(req.params.id)
    .populate("_creator")
    .then(donation => {
      res.json({ type: "success", data: { donation } });
    })
    .catch(error => {
      next(error);
    });
});

router.patch("/:id/edit", (req, res, next) => {
  const {
    donationName,
    category,
    description,
    location,
    imageUrl
    //_creator
  } = req.body;
  const donationId = req.params.id;
  Donation.findByIdAndUpdate(
    donationId,
    {
      ...(donationName && { donationName }),
      ...(category && { category }),
      ...(description && { description }),
      ...(location && { location }),
      ...(imageUrl && { imageUrl }),
      ...(_creator && { _creator })
    },
    { new: true }
  )
    .then(donation => {
      res.json({ type: "success", data: { donation } });
    })
    .catch(error => {
      next(error);
    });
});
router.delete("/:id/delete", (req, res, next) => {
  const donationId = req.params.id;
  // Grab the ID and use it as an argument for deleting
  Donation.findByIdAndDelete(donationId)
    .then(() => {
      res.json({ type: "success" });
    })
    .catch(error => {
      next(error);
    });
});
module.exports = router;
