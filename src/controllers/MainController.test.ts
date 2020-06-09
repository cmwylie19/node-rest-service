import { mainController } from './MainController'

describe("MainController class", () => {
  interface IRequest {
    params?: {
      email?: string
    },
    body?: {
      email: string,
      role: string,
      name: string
    }
  }

  interface IResponse {
    status?: any
    send?: any
  }
  const res: IResponse = {
    send: a => a,
    status: code => code
  }

  const req: IRequest = {
    body: {
      email: "test@redhat.com",
      role: "test",
      // tslint:disable-next-line:object-literal-sort-keys
      name: "Test User"
    },
    params: {
      email: "test@redhat.com"
    }
  };

  const responseTemplate: any = jest.spyOn(mainController, "responseTemplate")

  it('MainController class should be defined', () => {
    expect(mainController).toBeDefined();
  })

  it('MainCroller responeTemplate function', () => {
    let ans = mainController.responseTemplate(200, "test", res)
    expect(ans).toBe(true)
  })
  it('MainController getUsers function', () => {
    mainController.getUsers(req, res)
    expect(responseTemplate).toHaveBeenCalled()
  })
  it("MainController createUser function", () => {
    mainController.createUser(req, res);
    expect(responseTemplate).toHaveBeenCalled()
  })

  it("MainController editUser function", () => {
    mainController.editUser(req, res);
    expect(responseTemplate).toHaveBeenCalled()
  })

  it("MainController deleteUser function", () => {
    mainController.deleteUser(req, res);
    expect(responseTemplate).toHaveBeenCalled()
  })

  it("MainController getUser function", () => {
    mainController.getUser(req, res);
    expect(responseTemplate).toHaveBeenCalled()
  })
})