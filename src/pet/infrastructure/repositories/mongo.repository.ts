import { PetEntity } from "../../domain/pet.entity";
import { PetRepository } from "../../domain/pet.repository";
import PetModel from "../model/pet.schema";
export class MongoRepository implements PetRepository {
  async vaccinatePet(name: string): Promise<any | null> {
    console.log(`Vaccinating pet with name: ${name}`);
    const vaccinatedPet = await PetModel.findOneAndUpdate(
      { name },
      { vaccinated: true },
      { new: true }
    );

    return vaccinatedPet;
  }
  async registerPet(petIn: PetEntity): Promise<any | null> {
    const pet = await PetModel.create(petIn);
    return pet;
  }
}
