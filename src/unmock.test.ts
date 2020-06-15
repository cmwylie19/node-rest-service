import axios from "axios";
import unmock, { u } from "unmock";

describe("unmock examople", () => {
  it("should mock request from http://test.org", async () => {
    unmock
      .mock("http://www.example.com")
      .get("/login")
      .reply(200, { ans: u.string() });
    expect(true).toBeDefined();
  });
});

describe("", () => {
  it("", () => {
    expect(true);
  });
});
