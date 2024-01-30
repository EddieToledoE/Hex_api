import { PetRepository } from "../domain/pet.repository";
import { RegisterPetUseCase } from "./registerPet.useCase";
import { vaccinatePetUseCase } from "./vaccinatePet.useCase";

export class PetUseCase {
  public registerPet: RegisterPetUseCase;
  public vaccinatePet: vaccinatePetUseCase;

  constructor(private readonly petRepository: PetRepository) {
    this.registerPet = new RegisterPetUseCase(petRepository);
    this.vaccinatePet = new vaccinatePetUseCase(petRepository);
  }
}
