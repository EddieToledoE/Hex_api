import { UserRepository } from "../domain/user.repository";
import { UserValue } from "../domain/user.value";
import { EncriptationService } from "./services/encriptationServices";
export class RegisterUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly encriptationService: EncriptationService
  ) {}

  public async execute({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    password = this.encriptationService.encriptpassword(password);
    const userValue = new UserValue({ username, password });
    const userCreated = await this.userRepository.registerUser(userValue);
    return userCreated;
  }
}
