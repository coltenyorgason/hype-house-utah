"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("booking_detail", [
      {
        scheduleDate: new Date(),
        order_price: 25.0,
      },
    ]);
    await queryInterface.bulkInsert("bouncehouse_pricing", [
      {
        price_3hr: 150.0,
        price_6hr: 200.0,
      },
    ]);
    await queryInterface.bulkInsert("bouncehouse_detail", [
      {
        description: "this is a string",
        product_img: "this is a img"
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("booking_detail", null, {});
    await queryInterface.bulkDelete("bouncehouse_pricing", null, {});
    await queryInterface.bulkDelete("bouncehouse_detail", null, {});

  },
};
