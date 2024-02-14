import { UserEntity } from "./user.entity";
import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs";
export class UserValue implements UserEntity {
  uuid: string;
  username: string;
  password: string;
  constructor({ username, password }: { username: string; password: string }) {
    this.username = username;
    this.password = password;
    this.uuid = uuid();
  }
}
