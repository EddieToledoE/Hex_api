import { Router } from "express";
import { MongoRepository } from "../repositories/mongo.repository";
import { PetUseCase } from "../../application/PetUseCase";
import { PetController } from "../controllers/pet.ctrl";
const petroute = Router();
const mongorepo = new MongoRepository();
const petUseCase = new PetUseCase(mongorepo);
const petCtrl = new PetController(petUseCase);

petroute.post("/pet/create", (req, res) =>
  petCtrl.insertPet.insertCtrl(req, res)
);

petroute.put("/pet/vaccinate/:name", (req, res) =>
  petCtrl.vaccinatePet.vaccinateCtrl(req, res)
);

export default petroute;
