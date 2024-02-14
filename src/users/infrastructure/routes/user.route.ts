import { Router } from "express";
import { MongoRepository } from "../repositories/mongo.repository";
import { UserUseCase } from "../../application/UserUsesCase";
import { UserController } from "../controllers/user.ctrl";
import { EncriptationService } from "../../application/services/encriptationServices";
const userroute = Router();
const mongoRepository = new MongoRepository();
const encriptationService = new EncriptationService();
const userUseCase = new UserUseCase(mongoRepository, encriptationService);
const userCtrl = new UserController(userUseCase);

userroute.post("/users", (req, res) =>
  userCtrl.insertUser.insertCtrl(req, res)
);

userroute.get("/users/:uuid", (req, res) => userCtrl.getUser.getCtrl(req, res));

export default userroute;
