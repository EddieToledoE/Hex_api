import { PetRepository } from "../domain/pet.repository";
import { Broker } from "../infrastructure/helpers/rabbitqm";
export class vaccinatePetUseCase {
  constructor(
    private readonly petRepository: PetRepository,
    private readonly broker: Broker
  ) {}

  public async execute(name: string) {
    const pet = await this.petRepository.vaccinatePet(name);
    this.broker.sendMessage(name);
    return pet;
  }
}
