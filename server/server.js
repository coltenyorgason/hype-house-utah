import express from "express";
import controllerFunctions  from "./controller.js";

const app = express();
const port = 5172;

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());

app.get("/", () => {});

app.get("/allBookings", controllerFunctions.getBookings);
app.get("/allBounceHouses", controllerFunctions.getBounceHouses);
app.get("/allCustomers", controllerFunctions.getCustomers);

app.listen(port, () =>
  console.log(`Running on server http://localhost:${port}/`)
);
