import { OwnerEntity } from "./owner.entity";
import { v4 as uuid } from "uuid";
export class OwnerValue implements OwnerEntity {
  uuid: string;
  name: string;
  phone: number;
  pet: string;

  constructor({
    name,
    phone,
    pet,
  }: {
    name: string;
    phone: number;
    pet: string;
  }) {
    this.name = name;
    this.phone = phone;
    this.pet = pet;
    this.uuid = uuid();
  }
}
