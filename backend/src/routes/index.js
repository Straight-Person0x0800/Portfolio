const express = require("express");
const usersRouter = require("./userRouter.js");
const portfolioManagerRouter = require("./profolioManagerRouter.js");
const navStylesRouter = require("./navStylesRouter.js");
const aboutStyleRouter = require("./aboutStylesRouter.js");
const sectionsStylesRouter = require("./sectionStylesRouter.js");
const contactStylesRouter = require("./contactStylesRouter.js");

const router = express.Router();

// Define all the routes here
router.use("/users", usersRouter);
router.use("/portfolio", portfolioManagerRouter);
router.use("/nav-styles", navStylesRouter);
router.use("/about-styles", aboutStyleRouter);
router.use("/section-styles", sectionsStylesRouter);
router.use("/contact-style", contactStylesRouter);


module.exports = router;
