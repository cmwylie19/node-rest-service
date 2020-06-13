"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
describe("class User", () => {
    const tempUser = {
        email: "test@redhat.com",
        name: "Test User",
        role: "test"
    };
    const user = new User_1.User(tempUser);
    it("user should be defined", () => {
        expect(user).toBeDefined();
    });
    it("Should have a me method", () => {
        expect(Object.keys(user.me()).length).toBe(3);
    });
});
//# sourceMappingURL=User.test.js.map