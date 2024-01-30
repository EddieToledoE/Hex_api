import { Request, Response } from "express";
import { OwnerUseCase } from "../../application/OwnerUseCase";

export class InsertOwnerController {
  constructor(private ownerUseCase: OwnerUseCase) {}

  public async insertCtrl({ body }: Request, res: Response) {
    const owner = await this.ownerUseCase.registerOwner.execute(body);
    res.send({ owner });
  }
}
