import { UserEntity } from "./user.entity";

export interface UserRepository {
  findUserById(uuid: string): Promise<UserEntity | null>;
  registerUser({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<UserEntity | null>;
}
