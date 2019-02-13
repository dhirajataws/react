"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const signals = [
    "SIGINT",
    "SIGTERM"
];
const app = new App_1.default();
app.start();
signals.forEach((signal) => {
    process.on(signal, function () {
        app.shutDown();
    });
});
//# sourceMappingURL=server.js.map