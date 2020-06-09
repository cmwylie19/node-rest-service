"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = require("./app");
app_1.default.listen(process.env.PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server listening on port ` + process.env.PORT);
});
//# sourceMappingURL=server.js.map