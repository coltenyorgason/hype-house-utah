import {
  bookingDetails,
  bouncehouse,
  customerDetails,
} from "../src/database/models.js";

const controllerFunctions = {
  getCustomers: async (req, res) => {
    const customers = await customerDetails.findAll();
    res.json(customers);
  },
  getBounceHouses: async (req, res) => {
    const bouncehouses = await bouncehouse.findAll();
    res.json(bouncehouses);
  },
  getBookings: async (req, res) => {
    const bookings = await bookingDetails.findAll();
    res.json(bookings);
  },
  getBounceHouseByID: async (req, res) => {
    const { bounceHouseId } = req.params;
    const bounceHouse = await bouncehouse.findByPk(parseInt(bounceHouseId));
    res.json(bounceHouse);
  },
  createBooking: async (req, res) => {
    const { name, email, phone, date, pickupTime, dropOffTime, orderPrice, bounceHouseId } =
      req.body;
    let customer = await customerDetails.findOne({ where: { email: email } });
    console.log("customer log", customer);
    if (customer === null) {
      customer = await customerDetails.create({
        name: name,
        email: email,
        phone: phone,
      });
    }
    console.log("second customer log", customer);
    const newBooking = await bookingDetails.create({
      scheduledDate: date,
      order_price: orderPrice,
      bouncehouse_id: bounceHouseId,
      customer_id: customer.id
    });
    res.json(newBooking);
  },
};

export default controllerFunctions;
