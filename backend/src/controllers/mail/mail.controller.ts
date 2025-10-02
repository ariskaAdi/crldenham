import { NextFunction, Request, Response } from "express";

class MailController {
  public async sendMail(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { email, subject, message } = req.body;
      res.status(200).send({ email, subject, message });
    } catch (error) {
      next(error);
    }
  }
}

export default MailController;
