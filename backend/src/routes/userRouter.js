const {
  addUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  loginUser,
} = require("../controllers/userController"); //get all the controller of a user
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = require("express").Router();

router.post("/register", addUser); // Add a user
router.get("/", authMiddleware, adminMiddleware, getAllUsers); // Get all users
router.post("/login", loginUser); //login a User
router.get("/",authMiddleware, getUserById); // Get user by ID
router.put("/update",authMiddleware ,updateUser); // Update user
router.delete("/",authMiddleware ,deleteUser); // Delete user

module.exports = router;
