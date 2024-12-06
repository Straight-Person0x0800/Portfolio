const express = require("express");
const PortfolioManagerController = require("../controllers/portfolioManagerController.js");
const authMiddleware =  require('../middleware/authMiddleware.js')

const router = express.Router();

// Define routes and bind controller methods
router.get("/", authMiddleware, PortfolioManagerController.getAllPorfolios); // Fetch all portfolios
router.post("/add", authMiddleware, PortfolioManagerController.addPortfolio);
router.get("/:id", authMiddleware, PortfolioManagerController.getPortfolioById);

module.exports = router;
