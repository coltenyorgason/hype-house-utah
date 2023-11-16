import express from "express";
import controllerFunctions  from "./controller.js";
import cors from 'cors'

const app = express();
const port = 5172;
const corsOptions = {
  origin: "*"
}

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());
app.use(cors(corsOptions))



app.get("/", () => {});

app.get("/allBookings", controllerFunctions.getBookings);
app.get("/allBounceHouses", controllerFunctions.getBounceHouses);
app.get("/allCustomers", controllerFunctions.getCustomers);

app.listen(port, () =>
  console.log(`Running on server http://localhost:${port}/`)
);
