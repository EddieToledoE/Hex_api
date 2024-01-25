import "dotenv/config";
import express from "express";
import cors from "cors";
import dbInit from "./owner/Infrastructure/db/mongodb";
import route from "./owner/Infrastructure/routes/owner.route";
import petroute from "./pet/infrastructure/route/pet.route";
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 1001;

app.use(route);
app.use(petroute);
dbInit().then();

app.listen(port, () => console.log("Servidor iniciado en el puerto " + port));
