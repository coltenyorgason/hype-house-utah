import { bookingDetails, bouncehouseDetails, dbConnection, bouncehousePricings } from "./models.js";

await dbConnection.sync({ force: true });
await bookingDetails.create({
    scheduleDate: new Date(),
    order_price: 25.0,
})

await bouncehouseDetails.create({
    description: "this is a string",
    product_img: "this is a img"
})

await bouncehousePricings.create({
    price_3hr: 150.0,
    price_6hr: 200.0,
})