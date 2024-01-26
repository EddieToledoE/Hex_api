import { Request, Response } from "express";
import { PetUseCase } from "../../application/PetUseCase";

export class PetController {
  constructor(private petCase: PetUseCase) {
    this.insertCtrl = this.insertCtrl.bind(this);
    this.putCtrl = this.putCtrl.bind(this);
  }

  public async insertCtrl({ body }: Request, res: Response) {
    const pet = await this.petCase.registerPet(body);
    res.send({ pet });
  }

  public async putCtrl({ query }: Request, res: Response) {
    const { name = "" } = query;
    const pet = await this.petCase.vaccinatePet(`${name}`);
    res.send({ pet });
  }
}
