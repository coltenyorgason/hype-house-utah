import { bookingDetails, bouncehouse, customerDetails } from "../src/database/models";

export const controllerFunctions = {
  getCustomers: async (req, res) => {
    const customers = await customerDetails.findAll();
    res.json(customers);
  },
  getBounceHouses: async (req, res) => {
    const bouncehouses = await bouncehouse.findAll();
    res.json(bouncehouses)
  },
  getBookings: async (req, res) => {
    const bookings = await bookingDetails.findAll();
    res.json(bookings)
  }
};
