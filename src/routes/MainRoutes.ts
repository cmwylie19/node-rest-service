import * as express from 'express'
import { mainController } from "../controllers/MainController"

export class MainRoutes {
  public router: express.Router = express.Router();

  constructor() {
    this.config();
  }

  private config(): void {
    this.router.get("/", (req: express.Request, res: express.Response) => mainController.getUsers(req, res))
    this.router.get("/:email", (req: express.Request, res: express.Response) => mainController.getUser(req, res))
    this.router.post("/", (req: express.Request, res: express.Response) => mainController.createUser(req, res))
    this.router.put("/:email", (req: express.Request, res: express.Response) => mainController.editUser(req, res))
    this.router.delete("/:email", (req: express.Request, res: express.Response) => mainController.deleteUser(req, res))
  }
}


export const mainRoutes = new MainRoutes().router;