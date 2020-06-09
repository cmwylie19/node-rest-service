"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainController = exports.MainController = void 0;
class MainController {
    constructor() {
        this.users = {};
    }
    responseTemplate(code, message, res) {
        res.status(code).send(message);
    }
    getUsers(req, res) {
        this.responseTemplate(200, this.users, res);
    }
    createUser(req, res) {
        const { email, name, role } = req.body;
        if (!this.users[email]) {
            this.users[email] = {
                name,
                role
            };
            this.responseTemplate(200, "OK", res);
        }
        else {
            this.responseTemplate(400, "User exists", res);
        }
    }
    editUser(req, res) {
        if (this.users[req.params.email]) {
            this.users[req.params.email] = {
                name: req.body.name,
                role: req.body.role
            };
            this.responseTemplate(200, "OK", res);
        }
        else {
            this.responseTemplate(400, "User not found", res);
        }
    }
    deleteUser(req, res) {
        if (this.users[req.params.email]) {
            delete this.users[req.params.email];
            this.responseTemplate(200, "OK", res);
        }
        else {
            this.responseTemplate(400, "User not found", res);
        }
    }
    getUser(req, res) {
        if (this.users[req.params.email]) {
            this.responseTemplate(200, this.users[req.params.email], res);
        }
        else {
            this.responseTemplate(400, "User not found", res);
        }
    }
}
exports.MainController = MainController;
exports.mainController = new MainController();
//# sourceMappingURL=MainController.js.map