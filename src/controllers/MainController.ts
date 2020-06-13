export enum ResponseMessages {
  CREATED = "New user has been created.",
  CONFLICT = "This email is current being used.",
  OK = "OK",
  ACCEPTED = ""
}


interface ISquareConfig {
  [propName: string]: any;
}

const keyValue: ISquareConfig = {}
const test: string = "test";
keyValue[test] = 0;

export class MainController {

  public users = {};

  public responseTemplate(code: any, message: any, res: any) {
    if (process.env.NODE_ENV !== "test") {
      res.status(code).send(message);
    }
    return true;
  }

  public getUsers(req: any, res: any) {
    this.responseTemplate(200, this.users, res)
  }

  public createUser(req: any, res: any) {
    const { email, name, role } = req.body;
    if (!this.users[email]) {
      this.users[email] = {
        name,
        role
      }
      this.responseTemplate(201, "OK", res);
    }
    else {
      this.responseTemplate(409, "An acccount has been registered to that email.", res)
    }
  }

  public editUser(req: any, res: any) {
    if (this.users[req.params.email]) {
      this.users[req.params.email] = {
        name: req.body.name,
        role: req.body.role
      }
      this.responseTemplate(200, "OK", res)
    }
    else {
      this.responseTemplate(400, "User not found", res);
    }
  }
  public deleteUser(req: any, res: any) {
    if (this.users[req.params.email]) {
      delete this.users[req.params.email];
      this.responseTemplate(200, "OK", res);
    } else {
      this.responseTemplate(400, "User not found", res)
    }
  }

  public getUser(req: any, res: any) {
    if (this.users[req.params.email]) {
      this.responseTemplate(200, this.users[req.params.email], res)
    } else {
      this.responseTemplate(400, "User not found", res)
    }
  }
}

export const mainController = new MainController();