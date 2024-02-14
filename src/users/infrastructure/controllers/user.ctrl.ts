import { UserUseCase } from "../../application/UserUsesCase";
import { GetUserController } from "./getUser.ctrl";
import { InsertUserController } from "./insertUser.ctrl";
export class UserController {
  public getUser: GetUserController;
  public insertUser: InsertUserController;

  constructor(private userUseCase: UserUseCase) {
    this.getUser = new GetUserController(userUseCase);
    this.insertUser = new InsertUserController(userUseCase);
  }
}
