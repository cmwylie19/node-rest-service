import { Request, Response } from 'express'

export class MainController {

  public users = {};

  public responseTemplate(code: any, message: any, res: Response) {
    res.status(code).send(message)
  }
  public getUsers(req: Request, res: Response) {
    this.responseTemplate(200, this.users, res)
  }

  public createUser(req: Request, res: Response) {
    const { email, name, role } = req.body;
    if (!this.users[email]) {
      this.users[email] = {
        name,
        role
      }
      this.responseTemplate(200, "OK", res);
    }
    else {
      this.responseTemplate(400, "User exists", res)
    }
  }

  public editUser(req: Request, res: Response) {
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
  public deleteUser(req: Request, res: Response) {
    if (this.users[req.params.email]) {
      delete this.users[req.params.email];
      this.responseTemplate(200, "OK", res);
    } else {
      this.responseTemplate(400, "User not found", res)
    }
  }

  public getUser(req: Request, res: Response) {
    if (this.users[req.params.email]) {
      this.responseTemplate(200, this.users[req.params.email], res)
    } else {
      this.responseTemplate(400, "User not found", res)
    }
  }
}

export const mainController = new MainController();