module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("student", "admin"),
        allowNull: false,
        defaultValue: "student",
      },
    },
    {
      tableName: "users",
      timestamps: true,
      paranoid: true, // Enable soft delete
      deletedAt: "deleted_at", // Column to track soft delete
      underscored: true,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.PortfolioManager, {
      foreignKey: "user_id",
      as: "portfolios",
    });
  };

  return User;
};
