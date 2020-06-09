"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
require("dotenv/config");
const express = require("express");
const MainRoutes_1 = require("./routes/MainRoutes");
class App {
    constructor() {
        this.app = express();
        this.config();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use("/users", MainRoutes_1.mainRoutes);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map