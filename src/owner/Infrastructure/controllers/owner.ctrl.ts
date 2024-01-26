import { Request, Response } from "express";
import { OwnerUseCase } from "../../application/OwnerUseCase";

export class OwnerController {
  constructor(private ownerUseCase: OwnerUseCase) {
    this.insertCtrl = this.insertCtrl.bind(this);
    this.getCtrl = this.getCtrl.bind(this);
  }

  public async getCtrl({ query }: Request, res: Response) {
    const { uuid = "" } = query;
    const owner = await this.ownerUseCase.getDetailOwner(`${uuid}`);
    res.send({ owner });
  }

  public async insertCtrl({ body }: Request, res: Response) {
    const owner = await this.ownerUseCase.registerOwner(body);
    res.send({ owner });
  }
}
