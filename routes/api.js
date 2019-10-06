"use strict";

const { Router } = require("express");
const router = Router();

// POST   /autentication/sign-up
// POST   /autentication/sign-in
// GET    /autentication/verify

const authenticationControllers = require("../controllers/authentication");

const routeGuardMiddleware = require("../middleware/route-guard");

router.post(
  "/authentication/sign-up",
  routeGuardMiddleware(false),
  authenticationControllers.signUp
);
router.post(
  "/authentication/sign-in",
  routeGuardMiddleware(false),
  authenticationControllers.signIn
);
router.post(
  "/authentication/sign-out",
  routeGuardMiddleware(true),
  authenticationControllers.signOut
);
router.get("/authentication/verify", authenticationControllers.verify);

module.exports = router;
