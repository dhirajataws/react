"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const bodyParser = __importStar(require("body-parser"));
const car_1 = __importDefault(require("./car"));
class App {
    constructor() {
        this.app = express_1.default();
        this.server = http.createServer(this.app);
        this.start = () => {
            try {
                const port = 4000; // TODO read port from config file or env.
                this.server.listen(port, () => {
                    console.log(`Server started on port:${port}`);
                });
            }
            catch (err) {
                this.shutDown();
            }
        };
        this.shutDown = () => {
            this.server.close(); // close any database connection 
        };
        this.app.use(bodyParser.json());
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Content-Type");
            next();
        });
        this.app.use("/car", car_1.default);
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map