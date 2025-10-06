import { Router } from "express";
import MailController from "../controllers/mail/mail.controller";

class MailRouter {
  private route: Router;
  private mailController: MailController;

  constructor() {
    this.route = Router();
    this.mailController = new MailController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.route.post("/send", this.mailController.sendMail);
  }
  public getRouter(): Router {
    return this.route;
  }
}

export default MailRouter;
