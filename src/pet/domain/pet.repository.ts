import { PetEntity } from "./pet.entity";

export interface PetRepository {
  vaccinatePet(name: string): Promise<PetEntity | null>;

  registerPet({
    name,
    breed,
    age,
    vaccinated,
  }: {
    name: string;
    breed: string;
    age: number;
    vaccinated: boolean;
  }): Promise<PetEntity | null>;
}
