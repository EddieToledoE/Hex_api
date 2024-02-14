import { Request, Response } from "express";
import { UserUseCase } from "../../application/UserUsesCase";

export class GetUserController {
  constructor(private userUseCase: UserUseCase) {}

  public async getCtrl(req: Request, res: Response) {
    const uuid = req.params.uuid;

    const user = await this.userUseCase.getDetailUser.execute(uuid);
    res.send({ user });
  }
}
