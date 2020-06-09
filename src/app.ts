import * as bodyParser from 'body-parser'
import "dotenv/config";
import * as express from 'express'
import { mainRoutes } from "./routes/MainRoutes"

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use("/users", mainRoutes)
  }
}

export default new App().app;