import { Request, Response } from "express";
import { PetUseCase } from "../../application/PetUseCase";

export class InsertPetController {
  constructor(private petUseCase: PetUseCase) {}

  public async insertCtrl({ body }: Request, res: Response) {
    const pet = await this.petUseCase.registerPet.execute(body);
    res.send({ pet });
  }
}
