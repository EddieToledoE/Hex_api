import { UserRepository } from "../domain/user.repository";
import { RegisterUserUseCase } from "./registerUser.useCase";
import { GetDetailUserUseCase } from "./getDetailUser.useCase";
import { EncriptationService } from "./services/encriptationServices";
export class UserUseCase {
  public registerUser: RegisterUserUseCase;
  public getDetailUser: GetDetailUserUseCase;

  constructor(
    private readonly userRepository: UserRepository,
    private readonly encriptationService: EncriptationService
  ) {
    this.registerUser = new RegisterUserUseCase(
      userRepository,
      encriptationService
    );
    this.getDetailUser = new GetDetailUserUseCase(userRepository);
  }
}
