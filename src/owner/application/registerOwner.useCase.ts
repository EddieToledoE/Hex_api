import { OwnerRepository } from "../domain/owner.repository";
import { OwnerValue } from "../domain/owner.value";

export class RegisterOwnerUseCase {
  constructor(private readonly ownerRepository: OwnerRepository) {}

  public async execute({
    name,
    phone,
    pet,
  }: {
    name: string;
    phone: number;
    pet: string;
  }) {
    const ownerValue = new OwnerValue({ name, phone, pet });
    const ownerCreated = await this.ownerRepository.registerOwner(ownerValue);
    return ownerCreated;
  }
}
