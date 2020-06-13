"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
describe("confirmationMessage", () => {
    it('should return true if no params are passed', () => {
        const result = server_1.confirmationMessage();
        expect(result).toBe(true);
    });
    it('should return false if params are passed', () => {
        const result = server_1.confirmationMessage("true");
        expect(result).toBe(false);
    });
});
//# sourceMappingURL=server.test.js.map