"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmationMessage = void 0;
require("dotenv/config");
const app_1 = require("./app");
exports.confirmationMessage = (error) => {
    if (error) {
        if (process.env.NODE_ENV !== "test") {
            process.exit(1);
        }
        return false;
    }
    // tslint:disable-next-line:no-console
    console.log(`Server listening on port ` + process.env.PORT);
    return true;
};
app_1.default.listen(process.env.PORT, exports.confirmationMessage);
//# sourceMappingURL=server.js.map