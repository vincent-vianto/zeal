const Sequelize = require("sequelize");
const db = require("../config/database");

const Class = db.define(
  "Class",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imageName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    subtitle: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    sertifikat: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    harga: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    kuota: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    namaMentor: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    link: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Class;
