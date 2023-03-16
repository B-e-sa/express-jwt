import express from "express";
import apiRoute from "./api/routes/apiRoute.js";

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(apiRoute);

app.listen(3000, () => { console.log("listening on port 3000") });