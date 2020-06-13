"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setenv = void 0;
const dotenv = require("dotenv");
function setenv(argPath) {
    dotenv.config();
    let path;
    switch (argPath) {
        case "test":
            path = `${__dirname}/../../.env.test`;
            break;
        case "production":
            path = `${__dirname}/../../.env.production`;
            break;
        default:
            path = `${__dirname}/../../.env.development`;
    }
    dotenv.config({ path });
    return path;
}
exports.setenv = setenv;
//# sourceMappingURL=config.js.map