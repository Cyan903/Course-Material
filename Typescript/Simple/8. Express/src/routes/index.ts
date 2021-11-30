import express, { Router } from "express";

const router: express.Router = Router();

router.get("/main", (req: express.Request, res: express.Response) => {
    res.send("foo");
});


export default router;