import { Request, Response } from "express";
import { OwnerUseCase } from "../../application/OwnerUseCase";

export class DeleteOwnerController {
  constructor(private ownerUseCase: OwnerUseCase) {}

  public async deleteCtrl(req: Request, res: Response) {
    const uuid = req.params.uuid;

    const owner = await this.ownerUseCase.deleteOwner.execute(uuid);
    res.send({ owner });
  }
}
