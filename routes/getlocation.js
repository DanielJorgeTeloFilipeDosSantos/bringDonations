"use strict";

const { Router } = require("express");
const router = Router();
const Donation = require("../models/donation");

// router.get("/", (req, res) => {
//   res.json({ type: "success", data: { title: "getlocation works" } });
// });

router.get("/:id", (req, res, next) => {
  Donation.findById(req.params.id)
    .populate("_creator")
    .then(donation => {
      res.json({ type: "success", data: donation.location });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
