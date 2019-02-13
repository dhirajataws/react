import * as express from "express";

let router: express.Router;
router = express.Router();

router.get("/", function (req, res) {
    console.log("logged");
    res.json({ status: "success" });
});

export default router;
