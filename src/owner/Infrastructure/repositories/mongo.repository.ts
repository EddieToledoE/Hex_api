import { OwnerEntity } from "../../domain/owner.entity";
import { OwnerRepository } from "../../domain/owner.repository";
import OwnerModel from "../models/owner.schema";
export class MongoRepository implements OwnerRepository {
  async findOwnerById(uuid: string): Promise<any | null> {
    const owner = OwnerModel.findOne({ uuid });
    return owner;
  }
  async registerOwner(ownerIn: OwnerEntity): Promise<any | null> {
    const owner = await OwnerModel.create(ownerIn);
    return owner;
  }
}
