"use strict";

module.exports = (sequelize, DataTypes) => {
  const Proveedores = sequelize.define(
    "Proveedores",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      biografia: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
      tableName: "proveedores",
    }
  );


  return Proveedores;
};


