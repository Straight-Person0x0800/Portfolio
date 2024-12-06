module.exports = (sequelize, DataTypes) => {
  const AboutStyles = sequelize.define(
    "AboutStyles",
    {
      id: {
        type: DataTypes.STRING(255),
        primaryKey: true,
        allowNull: false,
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
      tableName: "about_styles", // Explicit table name
      timestamps: true, // Disable Sequelize auto-timestamps
      underscored: true, // Use snake_case in the DB columns
      paranoid: true, // Enable soft delete
      deletedAt: "deleted_at", // Column to track soft delete
    }
  );

  return AboutStyles;
};
