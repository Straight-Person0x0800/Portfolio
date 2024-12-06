// middlewares/adminMiddleware.js
//This page check if you are an admin or no

const adminMiddleware = (req, res, next) => {
  // Check if the user is authenticated and has the role "admin"
  if (req.user?.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }

  next(); // User is an admin, proceed to the next middleware or route handler
};

module.exports = adminMiddleware;
