import { PetUseCase } from "../../application/PetUseCase";
import { InsertPetController } from "./insertPet.ctrl";
import { VaccinatePetController } from "./vaccinatePet.ctrl";

export class PetController {
  public insertPet: InsertPetController;
  public vaccinatePet: VaccinatePetController;
  constructor(private petCase: PetUseCase) {
    this.insertPet = new InsertPetController(petCase);
    this.vaccinatePet = new VaccinatePetController(petCase);
  }
}
