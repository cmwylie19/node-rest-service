"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = require("./app");
const confirmationMessage = (error) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }
    // tslint:disable-next-line:no-console
    console.log(`Server listening on port ` + process.env.PORT);
};
app_1.default.listen(process.env.PORT, confirmationMessage);
//# sourceMappingURL=server.js.map