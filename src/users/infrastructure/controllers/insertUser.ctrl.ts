import { Request, Response } from "express";
import { UserUseCase } from "../../application/UserUsesCase";

export class InsertUserController {
  constructor(private userUseCase: UserUseCase) {}

  public async insertCtrl({ body }: Request, res: Response) {
    const user = await this.userUseCase.registerUser.execute(body);
    res.send({ user });
  }
}
