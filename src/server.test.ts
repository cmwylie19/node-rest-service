import { confirmationMessage } from "./server";

describe("confirmationMessage", () => {
  it("should return true if no params are passed", () => {
    const result: boolean = confirmationMessage();
    expect(result).toBe(true);
  });
  it("should return false if params are passed", () => {
    const result: boolean = confirmationMessage("true");
    expect(result).toBe(false);
  });
});
