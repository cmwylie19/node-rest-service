"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MainController_1 = require("./MainController");
describe("MainController class", () => {
    const res = {
        send: a => a,
        status: code => code
    };
    const req = {
        body: {
            email: "test@redhat.com",
            name: "Test User",
            role: "test"
        },
        params: {
            email: "test@redhat.com"
        }
    };
    const responseTemplate = jest.spyOn(MainController_1.mainController, "responseTemplate");
    it('MainController class should be defined', () => {
        expect(MainController_1.mainController).toBeDefined();
    });
    it('MainCroller responeTemplate function', () => {
        const result = MainController_1.mainController.responseTemplate(200, "test", res);
        expect(result).toBe(true);
    });
    it('MainController getUsers function', () => {
        MainController_1.mainController.getUsers(req, res);
        expect(responseTemplate).toHaveBeenCalled();
    });
    it("MainController createUser function", () => {
        MainController_1.mainController.createUser(req, res);
        expect(responseTemplate).toHaveBeenCalled();
    });
    it("MainController editUser function", () => {
        MainController_1.mainController.editUser(req, res);
        expect(responseTemplate).toHaveBeenCalled();
    });
    it("MainController deleteUser function", () => {
        MainController_1.mainController.deleteUser(req, res);
        expect(responseTemplate).toHaveBeenCalled();
    });
    it("MainController getUser function", () => {
        MainController_1.mainController.getUser(req, res);
        expect(responseTemplate).toHaveBeenCalled();
    });
});
//# sourceMappingURL=MainController.test.js.map