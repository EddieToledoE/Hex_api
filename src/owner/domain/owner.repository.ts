import { OwnerEntity } from "./owner.entity";

export interface OwnerRepository {
  findOwnerById(uuid: string): Promise<OwnerEntity | null>;
  deleteOwner(uuid: string): Promise<OwnerEntity | null>;
  registerOwner({
    name,
    phone,
    pet,
  }: {
    name: string;
    phone: number;
    pet: string;
  }): Promise<OwnerEntity | null>;
}
