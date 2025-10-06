import { NextFunction, Request, Response } from "express";
import { sendEmailService } from "../../services/mail/mail.service";

class MailController {
  public async sendMail(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await sendEmailService(req.body);
      res
        .status(200)
        .send({ message: "Email sent successfully", success: true });
    } catch (error) {
      next(error);
    }
  }
}

export default MailController;
