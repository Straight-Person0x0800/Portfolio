// models/PortfolioManager.js

module.exports = (sequelize, DataTypes) => {
  const PortfolioManager = sequelize.define(
    "PortfolioManager",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true, // Clé primaire, auto-incrémentée
      },
      user_id: {
        type: DataTypes.INTEGER, // Clé étrangère vers users(id)
        allowNull: false,
      },
      portfolio_id: {
        type: DataTypes.STRING(255), // ID du portfolio de l’utilisateur
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN, // L'état du portfolio (online/offline)
        allowNull: false,
        defaultValue: 0,
      },
      url: {
        type: DataTypes.STRING(255), // URL si c'est online
        allowNull: true, // Optional; only required if status is online
        defaultValue: "",
      },
      created_at: {
        type: DataTypes.DATE, // Date de création
        allowNull: false,
        defaultValue: DataTypes.NOW, // Default to current timestamp
      },
      updated_at: {
        type: DataTypes.DATE, // Date de dernière mise à jour
        allowNull: false,
        defaultValue: DataTypes.NOW, // Default to current timestamp
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
    },
    {
      tableName: "PortfolioManagers", // Specify table name if different from model
      timestamps: false, // Automatically manage `created_at` and `updated_at`
      underscored: true, // Use snake_case column names in DB
    }
  );

  // Define associations here if needed
  PortfolioManager.associate = (models) => {
    PortfolioManager.belongsTo(models.User, { foreignKey: "user_id" });
    // Add other associations as necessary
  };

  return PortfolioManager;
};
