"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("komenRatigs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      wisataId: {
        type: Sequelize.INTEGER,
        references: {
          model: "wisata",
          key: "id",
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      rating: {
        type: Sequelize.FLOAT,
      },
      kometar: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("komenRatigs");
  },
};
