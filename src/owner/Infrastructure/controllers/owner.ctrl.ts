import { OwnerUseCase } from "../../application/OwnerUseCase";
import { GetOwnerController } from "./getOwner.ctrl";
import { InsertOwnerController } from "./insertOwner.ctrl";
import { DeleteOwnerController } from "./deleteOwner.ctrl";
export class OwnerController {
  public getOwner: GetOwnerController;
  public insertOwner: InsertOwnerController;
  public deleteOwner: DeleteOwnerController;
  constructor(private ownerUseCase: OwnerUseCase) {
    this.getOwner = new GetOwnerController(ownerUseCase);
    this.insertOwner = new InsertOwnerController(ownerUseCase);
    this.deleteOwner = new DeleteOwnerController(ownerUseCase);
  }
}
