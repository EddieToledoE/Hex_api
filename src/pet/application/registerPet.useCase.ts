import { PetRepository } from "../domain/pet.repository";
import { PetValue } from "../domain/pet.value";

export class RegisterPetUseCase {
  constructor(private readonly petRepository: PetRepository) {}

  public async execute({
    name,
    breed,
    age,
    vaccinated,
  }: {
    name: string;
    breed: string;
    age: number;
    vaccinated: boolean;
  }) {
    const petValue = new PetValue({ name, breed, age, vaccinated });
    const petCreated = await this.petRepository.registerPet(petValue);
    return petCreated;
  }
}
