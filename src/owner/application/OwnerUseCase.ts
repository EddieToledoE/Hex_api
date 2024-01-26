import { OwnerRepository } from "../domain/owner.repository";
import { OwnerValue } from "../domain/owner.value";
export class OwnerUseCase {
  constructor(private readonly ownerRepository: OwnerRepository) {}

  public registerOwner = async ({
    name,
    phone,
    pet,
  }: {
    name: string;
    phone: number;
    pet: string;
  }) => {
    const ownerValue = new OwnerValue({ name, phone, pet });
    const ownerCreated = await this.ownerRepository.registerOwner(ownerValue);
    return ownerCreated;
  };

  public getDetailOwner = async (uuid: string) => {
    const owner = await this.ownerRepository.findOwnerById(uuid);
    return owner;
  };
}
