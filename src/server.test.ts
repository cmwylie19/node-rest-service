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

  it("should call process.exit if the NODE_ENV is not test", () => {
    process.env.NODE_ENV = "DEVELOP";
    const mockExit: any = jest.spyOn(process, 'exit').mockImplementation();
    const result: boolean = confirmationMessage("test");
    expect(result).toBe(false);
    expect(mockExit).toHaveBeenCalled();
    process.env.NODE_ENV = "test";
  })
});
