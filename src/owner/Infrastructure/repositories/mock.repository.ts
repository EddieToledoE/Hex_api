import { OwnerEntity } from "../../domain/owner.entity";
import { OwnerRepository } from "../../domain/owner.repository";
import OwnerModel from "../models/owner.schema";

const Mock_user = {
  name: "Eddie",
  phone: 9681034332,
  pet: "Winter",
  uuid: "7777",
};

const Mock_user02 = {
  name: "Carmela",
  phone: 9661034321,
  pet: "Millie",
  uuid: "2046",
};
export class MockRepository implements OwnerRepository {
  async findOwnerById(uuid: string): Promise<any | null> {
    const owner = Mock_user;
    return owner;
  }
  async registerOwner(): Promise<any | null> {
    const owner = Mock_user02;
    return owner;
  }
}
