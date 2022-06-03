import express from "express";
import router from "./routers/weather.routes.js"
import cors from "cors"

const app = express();

app.use(cors());

app.use("/city", router);

app.use(express.json());

app.listen(1000, console.log("Listening 1000"));
