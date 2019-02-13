import express from "express";
import * as http from "http";
import * as bodyParser from "body-parser";
import carRouter from './car';

export default class App {
    app = express();
    server = http.createServer(this.app);

    constructor() {
        this.app.use(bodyParser.json());
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Content-Type");
            next();
        });
        this.app.use("/car", carRouter);
    }

    start = () => {
        try {
            const port = 4000;// TODO read port from config file or env.
            this.server.listen(port, () => {
                console.log(`Server started on port:${port}`);
            });
        } catch (err) {
            this.shutDown();
        }

    };

    shutDown = () => {
        this.server.close(); // close any database connection 
    };
}
