import jwt from "jsonwebtoken";
import "../data.json" assert { type: "json" };

const key = "super_secret_key";

let lastUsedToken = undefined;

export const validateToken = (_req, res) => {

    if (lastUsedToken) {

        const { username, password } = jwt.decode(lastUsedToken);

        if (username == data.username && password == data.password)
            res.status(200).send(userContent);

    } else res.status(401).send({ error: "token not provided" });

}

export const createNewToken = (req, res) => {

    const { username, password } = req.body;

    const user = find(data => data.username === username);

    if (user && password === user.password) {

        const token = jwt.sign({ username, password }, key);

        lastUsedToken = token;

        res.status(200).send({ token });

    } else res.status(401).send({ error: "user not found" });

}