import { Request, Response } from "express";
import { OwnerUseCase } from "../../application/OwnerUseCase";

export class GetOwnerController {
  constructor(private ownerUseCase: OwnerUseCase) {}

  public async getCtrl(req: Request, res: Response) {
    const uuid = req.params.uuid;

    const owner = await this.ownerUseCase.getDetailOwner.execute(uuid);
    res.send({ owner });
  }
}
