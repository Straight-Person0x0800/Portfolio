"use strict";

const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [
      {
        name: "Admin User",
        email: "admin@example.com",
        password: await bcrypt.hash("adminpassword", 10),
        role: "admin",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    // Dynamically create student users
    const numberOfUsers = 25; // Replace with the desired number of users
    for (let i = 1; i <= numberOfUsers; i++) {
      users.push({
        name: `Student User ${i}`,
        email: `student${i}@example.com`,
        password: await bcrypt.hash(`studentpassword${i}`, 10),
        role: "student",
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    await queryInterface.bulkInsert("users", users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
