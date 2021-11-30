import express from "express";
import indexRoute from "./routes/index";

const app: express.Application = express();

app.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).send("aaa");
});

app.use(indexRoute);

app.listen(3000);
