import { OwnerRepository } from "../domain/owner.repository";

export class DeleteOwnerUseCase {
  constructor(private readonly ownerRepository: OwnerRepository) {}

  public async execute(uuid: string) {
    const owner = await this.ownerRepository.deleteOwner(uuid);
    return owner;
  }
}
