import express, {Request, Response, application} from "express";
import cors from "cors";
require('dotenv').config();
import { AppDataSource } from "./DataSource";


const app = express();

app.use(express.json());
app.use(cors());

AppDataSource.initialize()
    .then(() => {
        console.log("here you can start to work with your database");
    })
    .catch((error) => console.log("erreur",error))

    app.listen(process.env.PORT || 3000);
    console.log('server started on port '+process.env.PORT || 3000)