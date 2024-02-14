import { encriptation } from "../../infrastructure/helpers/encriptation";
import bcrypt from "bcryptjs";
export class EncriptationService implements encriptation {
  public encriptpassword(password: string) {
    const encriptedpassword = bcrypt.hashSync(password, 10);
    return encriptedpassword;
  }

  public comparepassword(password: string, encriptedpassword: string) {
    const compare = bcrypt.compareSync(password, encriptedpassword);
    return compare;
  }
}
