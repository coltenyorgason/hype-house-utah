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
};

// FULL CRUD 


export default controllerFunctions;