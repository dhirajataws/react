"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
let router;
router = express.Router();
router.get("/", function (req, res) {
    console.log("logged");
    res.json({ status: "success" });
});
exports.default = router;
//# sourceMappingURL=index.js.map