export interface encriptation {
  encriptpassword(password: string): String;
  comparepassword(password: string, encriptedpassword: string): boolean;
}
