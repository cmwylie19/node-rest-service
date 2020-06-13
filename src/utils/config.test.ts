import "dotenv/config";
import { setenv } from "./config";

describe("setenv function", () => {
  const testPath: string = `${__dirname}/../../.env.test`;
  const prodPath: string = `${__dirname}/../../.env.production`;
  const devPath: string = `${__dirname}/../../.env.development`;
  it("returns testPath when NODE_ENV is test", () => {
    expect(setenv(process.env.NODE_ENV)).toBe(testPath);
  });
  it("returns prodPath when NODE_ENV is prod", () => {
    expect(setenv("production")).toBe(prodPath);
  });
  it("returns devPath when NODE_ENV is dev", () => {
    expect(setenv("development")).toBe(devPath);
  });
});
