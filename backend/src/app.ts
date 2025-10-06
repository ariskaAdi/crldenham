import express, { Application, Response, Request, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import MailRouter from "./route/mail.route";

const PORT: string | number = process.env.PORT || 4000;

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
  }

  private configure(): void {
    const allowedOrigins = ["http://localhost:3000"];
    this.app.use(
      cors({
        origin: allowedOrigins,
        credentials: true,
      })
    );
    this.app.use(express.json());
    //  this.app.use(cookieParser());
  }

  private routes(): void {
    const mailRouter = new MailRouter();
    this.app.get("/", (req: Request, res: Response) => {
      res.status(200).json("<h1> Welcome to the API</h1>");
    });

    this.app.use("/mail", mailRouter.getRouter());
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`API RUNNING AT: http://localhost:${PORT}`);
    });
  }
}

export default App;
