const { ContactStyles } = require("../models"); // Import the NavStyles model
const Joi = require("joi");

const styleSchema = Joi.object({
  section: Joi.string().required(), // Must be a string and required
  container: Joi.string().required(),
  imageContainer: Joi.string().required(),
  image: Joi.string().required(),
  textContainer: Joi.string().required(),
  title: Joi.string().required(),
  subtitle: Joi.string().required(),
  description: Joi.string().required(),
});

// Get all styles
const getStyles = async (req, res) => {
  try {
    const styles = await ContactStyles.findAll();
    res.status(200).json(styles);
  } catch (error) {
    console.error("Error fetching styles:", error);
    res.status(500).json({ message: "Failed to fetch styles." });
  }
};

// Get a single style by ID
const getStyle = async (req, res) => {
  try {
    const { id } = req.params;
    const style = await ContactStyles.findByPk(id);

    if (!style) {
      return res.status(404).json({ message: "Style not found." });
    }

    res.status(200).json(style);
  } catch (error) {
    console.error("Error fetching style:", error);
    res.status(500).json({ message: "Failed to fetch the style." });
  }
};

// Add a new style
const addStyle = async (req, res) => {
  try {
    const { name, value } = req.body;

    // Validate input
    if (!name || !value) {
      return res
        .status(400)
        .json({ message: "All fields (name, value) are required." });
    }

    const { error } = ContactStyles.validate(req.body.value);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const newStyle = await NavStyles.create({ name, value });
    res.status(201).json({
      message: "Style added successfully!",
      style: newStyle,
    });
  } catch (error) {
    console.error("Error adding style:", error);
    res.status(500).json({ message: "Failed to add the style." });
  }
};

module.exports = {
  getStyles,
  getStyle,
  addStyle,
};
