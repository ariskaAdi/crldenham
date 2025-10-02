import { NextFunction, Request, Response } from "express";

class AuthController {
  public async register(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { name, password } = req.body;
    } catch (error) {
      next(error);
    }
  }

  public async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { name, password } = req.body;
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
