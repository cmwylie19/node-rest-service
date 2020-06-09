"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOG_LEVEL = exports.APP_ID = void 0;
const dotenv = require("dotenv");
dotenv.config();
let path;
switch (process.env.NODE_ENV) {
    case "test":
        path = `${__dirname}/../../.env.test`;
        break;
    case "production":
        path = `${__dirname}/../../.env.production`;
        break;
    default:
        path = `${__dirname}/../../.env/development`;
}
dotenv.config({ path });
exports.APP_ID = process.env.APP_ID;
exports.LOG_LEVEL = process.env.LOG_LEVEL;
//# sourceMappingURL=config.js.map