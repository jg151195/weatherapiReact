import express from "express";
import fetch from "node-fetch";

const router = express.Router();

const URL = "https://api.openweathermap.org/data/2.5/weather?"
const API_KEY = "05b42a359cf920c47403016748ae9efb"

router.get("/:city", async (req,resp)=>{
    const city = req.params.city
    const response = await fetch(`${URL}q=${city}&appid=${API_KEY}`);
    const data = await response.json();
    resp.send(data);
})

export default router