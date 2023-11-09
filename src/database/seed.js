import { Booking_details, Bouncehouse_details, dbConnection, Bouncehouse_pricings } from "./models.js";

await dbConnection.sync({ force: true });
await Booking_details.create({
    scheduleDate: new Date(),
    order_price: 25.0,
})

await Bouncehouse_details.create({
    description: "this is a string",
    product_img: "this is a img"
})

await Bouncehouse_pricings.create({
    price_3hr: 150.0,
    price_6hr: 200.0,
})