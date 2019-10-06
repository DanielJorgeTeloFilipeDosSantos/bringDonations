"use strict";

const { Router } = require("express");

const router = Router();

const checkOrganization = require("../middleware/checkOrganization");
const checkUser = require("../middleware/checkUser");

router.post("/", (req, res) => {
  //   checkOrganization(req, res);
  checkOrganization(req, res);
});

module.exports = router;
