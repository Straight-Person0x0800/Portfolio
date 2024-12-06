//This pages is the model for table that hold all the navigation style
module.exports = (sequelize, DataTypes) => {
  const NavStyles = sequelize.define(
    "NavStyles",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true, // Clé primaire, auto-incrémentée
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      value: {
        type: DataTypes.JSON, // JSON column for storing style values
        allowNull: false,
      },
    },
    {
      tableName: "nav_styles", // Explicit table name
      timestamps: true, // Disable Sequelize auto-timestamps
      underscored: true, // Use snake_case in the DB columns
      paranoid: true, // Enable soft delete
      deletedAt: "deleted_at", // Column to track soft delete
    }
  );
  return NavStyles;
};
