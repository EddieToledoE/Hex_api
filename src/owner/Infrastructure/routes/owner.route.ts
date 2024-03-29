import { Router } from "express";
import { MongoRepository } from "../repositories/mongo.repository";
import { OwnerUseCase } from "../../application/OwnerUseCase";
import { OwnerController } from "../controllers/owner.ctrl";
import { MockRepository } from "../repositories/mock.repository";
const ownerroute = Router();
const mockrepo = new MockRepository();
const mongoRepository = new MongoRepository();
const ownerUseCase = new OwnerUseCase(mongoRepository);
const ownerCtrl = new OwnerController(ownerUseCase);

ownerroute.post("/owner/create", (req, res) =>
  ownerCtrl.insertOwner.insertCtrl(req, res)
);

ownerroute.get("/owner/:uuid", (req, res) =>
  ownerCtrl.getOwner.getCtrl(req, res)
);

export default ownerroute;
