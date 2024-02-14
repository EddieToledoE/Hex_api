import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
import UserModel from "../models/user.schema";
export class MongoRepository implements UserRepository {
  async findUserById(uuid: string): Promise<any | null> {
    const owner = UserModel.findOne({ uuid });
    return owner;
  }
  async registerUser(userIn: UserEntity): Promise<any | null> {
    const user = await UserModel.create(userIn);
    return user;
  }
}
