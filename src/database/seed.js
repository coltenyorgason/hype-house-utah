import {
  bookingDetails,
  bouncehouse,
  dbConnection,
  customerDetails,
} from "./models.js";

await dbConnection.sync({ force: true });
await bookingDetails.create({
  scheduleDate: new Date(),
  order_price: 200.0,
  bouncehouse_id: 1,
  customer_id: 1,
});

await bouncehouse.create({
  description: "The King Castle",
  product_img: "https://m.media-amazon.com/images/I/8154feawNDL.jpg",
  price_3hr: 150.0,
  price_6hr: 200.0,
});

await customerDetails.create({
  name: "john",
  phone: "555555555",
  email: "test@test",
});
