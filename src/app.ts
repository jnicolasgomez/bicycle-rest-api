import "dotenv/config"
import express from "express"
import cors from "cors"
import { router } from "./routes/"
import dbConnect from "./config/mongo"
import bodyParser from "body-parser"
import morgan from "morgan"
import admin, { ServiceAccount } from "firebase-admin"
import credentials from "../serviceAccountKey.json";

admin.initializeApp({
    credential: admin.credential.cert(credentials as ServiceAccount)
})

const PORT = process.env.PORT || 3001;
const app = express();
app.use(morgan('dev'));
app.use(cors({}));
app.use(bodyParser.json());
app.use(router);
dbConnect().then(() => console.log("connection ready"));
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));