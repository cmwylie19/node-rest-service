"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRoutes = exports.MainRoutes = void 0;
const express = require("express");
const MainController_1 = require("../controllers/MainController");
class MainRoutes {
    constructor() {
        this.router = express.Router();
        this.config();
    }
    config() {
        this.router.get("/", (req, res) => MainController_1.mainController.getUsers(req, res));
        this.router.get("/:email", (req, res) => MainController_1.mainController.getUser(req, res));
        this.router.post("/", (req, res) => MainController_1.mainController.createUser(req, res));
        this.router.put("/:email", (req, res) => MainController_1.mainController.editUser(req, res));
        this.router.delete("/:email", (req, res) => MainController_1.mainController.deleteUser(req, res));
    }
}
exports.MainRoutes = MainRoutes;
exports.mainRoutes = new MainRoutes().router;
//# sourceMappingURL=MainRoutes.js.map