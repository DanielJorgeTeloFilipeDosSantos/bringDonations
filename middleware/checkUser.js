"use strict";

module.exports = (req, res) => {
  console.log("role", req.body.role);
  if (req.body.role === "User") {
    res.json({ msg: "User allowed to enter private page" });
  } else {
    res.json({ msg: " Not allowed" });
  }
};
