import { PetEntity } from "./pet.entity";
export class PetValue implements PetEntity {
  name: string;
  breed: string;
  age: number;
  vaccinated: boolean;

  constructor({
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
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.vaccinated = false;
  }
}
