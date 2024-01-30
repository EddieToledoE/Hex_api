import { Request, Response } from "express";
import { PetUseCase } from "../../application/PetUseCase";

export class VaccinatePetController {
  constructor(private petUseCase: PetUseCase) {}

  public async vaccinateCtrl(req: Request, res: Response) {
    const name = req.params.name;

    const pet = await this.petUseCase.vaccinatePet.execute(name);
    res.send({ pet });
  }
}
