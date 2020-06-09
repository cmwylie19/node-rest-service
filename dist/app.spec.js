"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const request = require("supertest");
const app = express();
app
    .get("/user", (req, res) => {
    res.status(200).json({ name: "john" });
})
    .post("/users", (req, res) => {
    res.status(200).json({ status: "create user!" });
});
describe("GET /user", () => {
    it("respond with json", done => {
        request(app)
            .get("/user")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done);
    });
});
describe("POST /users", () => {
    it("responds with json", done => {
        request(app)
            .post("/users")
            .send({ name: "john" })
            .set("Accept", "application/json")
            .expect(200)
            .end((err, res) => {
            if (err) {
                return done(err);
            }
            done();
        });
    });
});
//# sourceMappingURL=app.spec.js.map