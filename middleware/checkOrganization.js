"use strict";

module.exports = (req, res) => {
  console.log("role", req.body.role);
  if (req.body.role === "Organization") {
    res.json({ msg: "Organization allowed to enter private page" });
  } else {
    res.json({ msg: "Not allowed" });
  }
};
