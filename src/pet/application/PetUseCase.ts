import { PetRepository } from "../domain/pet.repository";
import { PetValue } from "../domain/pet.value";
export class PetUseCase {
  constructor(private readonly petRepo: PetRepository) {}

  public vaccinatePet = async (name: string) => {
    const pet = await this.petRepo.vaccinatePet(name);
    return pet;
  };

  public registerPet = async ({
    name,
    breed,
    age,
    vaccinated,
  }: {
    name: string;
    breed: string;
    age: number;
    vaccinated: boolean;
  }) => {
    const petValue = new PetValue({ name, breed, age, vaccinated });
    const petCreated = await this.petRepo.registerPet(petValue);
    return petCreated;
  };
}
