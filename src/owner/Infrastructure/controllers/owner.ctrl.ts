import { OwnerUseCase } from "../../application/OwnerUseCase";
import { GetOwnerController } from "./getOwner.ctrl";
import { InsertOwnerController } from "./insertOwner.ctrl";
export class OwnerController {
  public getOwner: GetOwnerController;
  public insertOwner: InsertOwnerController;
  constructor(private ownerUseCase: OwnerUseCase) {
    this.getOwner = new GetOwnerController(ownerUseCase);
    this.insertOwner = new InsertOwnerController(ownerUseCase);
  }
}
