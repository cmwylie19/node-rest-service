import { ErrorSchema, mainController } from "./MainController";

describe("ErrorSchema", () => {
  it("AccountInUse", () => {
    expect(ErrorSchema.AccountInUse).toBe(
      "An acccount has been registered to that email."
    );
  });
  it("EmailNotFound", () => {
    expect(ErrorSchema.EmailNotFound).toBe(
      "Account not found registered to that email."
    );
  });
  it("OK", () => {
    expect(ErrorSchema.OK).toBe("OK");
  });
});

describe("MainController class", () => {
  interface IRequest {
    params?: {
      email?: string;
    };
    body?: {
      email: string;
      role: string;
      name: string;
    };
  }

  interface IResponse {
    status?: any;
    send?: any;
  }

  const res: IResponse = {
    send: jest.fn(),
    status: jest.fn(() => res),
  };

  const req: IRequest = {
    body: {
      email: "test@redhat.com",
      name: "Test User",
      role: "test",
    },
    params: {
      email: "test@redhat.com",
    },
  };

  const mockReq: IRequest = {
    body: {
      email: "test2@redhat.com",
      name: "Test User",
      role: "test",
    },
    params: {
      email: "test2@redhat.com",
    },
  };

  const responseTemplate: any = jest.spyOn(mainController, "responseTemplate");

  it("MainController class should be defined", () => {
    expect(mainController).toBeDefined();
  });

  it("MainCroller responeTemplate function", () => {
    process.env.NODE_ENV = "SH";
    mainController.responseTemplate(200, "test", res);
    process.env.NODE_ENV = "test";
    const result: boolean = mainController.responseTemplate(200, "test", res);
    expect(result).toBe(true);
  });
  it("MainController getUsers function", () => {
    mainController.getUsers(req, res);
    expect(responseTemplate).toHaveBeenCalled();
  });
  it("MainController createUser function", () => {
    mainController.createUser(req, res);
    mainController.createUser(req, res);
    expect(responseTemplate).toHaveBeenCalled();
  });

  it("MainController editUser function", () => {
    mainController.editUser(req, res);
    mainController.editUser(mockReq, res);
    expect(responseTemplate).toHaveBeenCalled();
  });

  it("MainController deleteUser function", () => {
    mainController.deleteUser(req, res);
    mainController.deleteUser(mockReq, res);
    expect(responseTemplate).toHaveBeenCalled();
  });

  it("MainController getUser function", () => {
    mainController.createUser(req, res);
    mainController.getUser(req, res);
    mainController.getUser(mockReq, res);
    expect(responseTemplate).toHaveBeenCalled();
  });
});
