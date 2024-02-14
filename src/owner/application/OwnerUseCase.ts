import { OwnerRepository } from "../domain/owner.repository";
import { RegisterOwnerUseCase } from "./registerOwner.useCase";
import { GetDetailOwnerUseCase } from "./getDetailOwner.useCase";
import { DeleteOwnerUseCase } from "./deleteOwner.useCase";
export class OwnerUseCase {
  public registerOwner: RegisterOwnerUseCase;
  public getDetailOwner: GetDetailOwnerUseCase;
  public deleteOwner: DeleteOwnerUseCase;

  constructor(private readonly ownerRepository: OwnerRepository) {
    this.registerOwner = new RegisterOwnerUseCase(ownerRepository);
    this.getDetailOwner = new GetDetailOwnerUseCase(ownerRepository);
    this.deleteOwner = new DeleteOwnerUseCase(ownerRepository);
  }
}
