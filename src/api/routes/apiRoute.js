import { validateToken, createNewToken } from "../controller/api.controller.js";
import { Router } from "express";

const apiRoute = Router;

apiRoute.route('/')
    .get(validateToken)
    .post(createNewToken);

export default apiRoute;