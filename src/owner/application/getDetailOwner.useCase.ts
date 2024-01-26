import { OwnerRepository } from "../domain/owner.repository";

export class GetDetailOwnerUseCase {
  constructor(private readonly ownerRepository: OwnerRepository) {}

  public async execute(uuid: string) {
    const owner = await this.ownerRepository.findOwnerById(uuid);
    return owner;
  }
}
