const db = require("../models"); // To get all the models
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  fullUserSchema,
  loginSchema,
  changeUserOrEmailSchema,
  validateInput,
} = require("../utils/UsersValidation");

// Main model with Joi
const User = db.users;

// **Controller Functions**

// 1. Add a User
const addUser = async (req, res) => {
  //TODO not anyone can Add admin Users
  try {
    const { name, email, password } = req.body;

    // Validate input data

    const { valid, errors } = validateInput(fullUserSchema, {
      name,
      email,
      password,
    });
    if (!valid) {
      return res
        .status(400)
        .json({ message: errors.join(", "), success: false });
    }
    // Check if email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); //bcrypt will HashThe code 10 rounds 2^10

    // Create a new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      message: "User created successfully!",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

//2. Login User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { valid, errors } = validateInput(loginSchema, { email, password });
    if (!valid) {
      return res
        .status(400)
        .json({ message: errors.join(", "), success: false });
    }

    // Find the user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found.", success: false });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Invalid credentials.", success: false });
    }

    // Generate a JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || "secretTokenHere",
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    res
      .status(200)
      .json({ message: "Login successful.", token, success: false });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// 2. Get All Users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// 3. Get User by ID
const getUserById = async (req, res) => {
  try {
    const id = req.user.id;

    //validation
    if (!id) {
      return res.status(400).json({ message: "Please Provide an ID" });
    }
    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// 4. Update a User
const updateUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const id = req.user.id;

    //Check if the user is user is the one making the request or is he an admin

    const { valid, errors } = validateInput(changeUserOrEmailSchema, {
      name,
      email,
    });
    if (!valid) {
      return res
        .status(400)
        .json({ message: errors.join(", "), success: false });
    }

    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    await user.update({ name, email });
    res.status(200).json({ message: "User updated successfully!", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.user.id;
    // Find the user
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Perform a soft delete
    await user.destroy();

    res.status(200).json({ message: "User marked as deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Export functions
module.exports = {
  addUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  loginUser,
};
