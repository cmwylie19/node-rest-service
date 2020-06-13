"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config_1 = require("./config");
describe("setenv function", () => {
    const testPath = `${__dirname}/../../.env.test`;
    const prodPath = `${__dirname}/../../.env.production`;
    const devPath = `${__dirname}/../../.env.development`;
    it('returns testPath when NODE_ENV is test', () => {
        expect(config_1.setenv(process.env.NODE_ENV)).toBe(testPath);
    });
    it('returns prodPath when NODE_ENV is prod', () => {
        expect(config_1.setenv("production")).toBe(prodPath);
    });
    it('returns devPath when NODE_ENV is dev', () => {
        expect(config_1.setenv("development")).toBe(devPath);
    });
});
//# sourceMappingURL=config.test.js.map