// controllers/PortfolioManagerController.js

const db = require("../models"); // To get all the models
const Joi = require("joi");

const PortfolioManager = db.portfolioManager;

// Joi validation schemas
const portfolioSchema = Joi.object({
  user_id: Joi.string().max(100).required(), // Foreign key to users table
  portfolio_id: Joi.string().max(255).required(), // Portfolio ID
  status: Joi.boolean().required(), // Online/Offline status
  url: Joi.string().max(255).uri().optional(), // URL (if online)
});

const updateSchema = Joi.object({
  status: Joi.boolean().optional(), // Online/Offline status
  url: Joi.string().max(255).uri().optional(), // URL (if online)
});

// Controller functions

//1. add a new Portfolio
const addPortfolio = async (req, res) => {
  try {
    const { user_id, portfolio_id, status, url } = req.body;
    const { error } = portfolioSchema.validate({
      user_id,
      portfolio_id,
      status,
      url,
    });
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const portfolio = await PortfolioManager.create({
      user_id,
      portfolio_id,
      status,
    });
    res.status(201).json(portfolio);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create portfolio", details: error.message });
  }
};

// 2. Add All Portfolios
const getAllPorfolios = async (req, res) => {
  try {
    const Porfolios = await PortfolioManager.findAll();
    res.status(200).json(Porfolios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

//3. get a portfolio with id
const getPortfolioById = async (req, res) => {
  const { id } = req.params;

  try {
    const Portfolio = await PortfolioManager.findOne({ where: { id } });
    if (!Portfolio) {
      return res.status(404).json({ message: "Portfolio doesn't exist" });
    }
    res.status(200).json(Portfolio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

//4. delete a portfolio

module.exports = {
  addPortfolio,
  getAllPorfolios,
  getPortfolioById,
};
