import { PetRepository } from "../domain/pet.repository";

export class vaccinatePetUseCase {
  constructor(private readonly petRepository: PetRepository) {}

  public async execute(name: string) {
    const pet = await this.petRepository.vaccinatePet(name);
    return pet;
  }
}
