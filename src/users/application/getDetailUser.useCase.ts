import { UserRepository } from "../domain/user.repository";

export class GetDetailUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(uuid: string) {
    const user = await this.userRepository.findUserById(uuid);
    return user;
  }
}
