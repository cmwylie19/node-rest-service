"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const request = require("supertest");
const app = express();
app
    .delete('/users/cwylie@redhat.com', (req, res) => res.status(200).send("OK"))
    .put('/users/cwylie@redhat.com', (req, res) => res.status(200).send("OK"))
    .get("/users", (req, res) => {
    res.status(200).json({
        "cwylie@gmail.com": {
            "name": "Casey Wylie",
            "role": "admin"
        }
    });
})
    .post("/users", (req, res) => {
    res.status(200).send("OK");
});
describe("GET /users", () => {
    it("respond with json", done => {
        request(app)
            .get("/users")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done);
    });
});
describe("POST /users", () => {
    it("responds with json", done => {
        request(app)
            .post("/users")
            .send({
            "email": "cwylie@gmail.com",
            "name": "Casey Wylie",
            "role": "admin"
        })
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
//# sourceMappingURL=routes.test.js.map