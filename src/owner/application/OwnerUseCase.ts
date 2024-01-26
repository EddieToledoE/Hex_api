import { OwnerRepository } from "../domain/owner.repository";
import { RegisterOwnerUseCase } from "./registerOwner.useCase";
import { GetDetailOwnerUseCase } from "./getDetailOwner.useCase";

export class OwnerUseCase {
  public registerOwner: RegisterOwnerUseCase;
  public getDetailOwner: GetDetailOwnerUseCase;

  constructor(private readonly ownerRepository: OwnerRepository) {
    this.registerOwner = new RegisterOwnerUseCase(ownerRepository);
    this.getDetailOwner = new GetDetailOwnerUseCase(ownerRepository);
  }
}
