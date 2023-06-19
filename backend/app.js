import { routerAuth } from './routers/authRouter.js'

import express from "express"
import bodyParser from "body-parser"
import mongoose from 'mongoose'
import cors from 'cors'
import { tovarRouter } from "./routers/tovarRouter.js"
import { ordersRouter } from './routers/ordersRouter.js'

const app = express();
const PORT = 5000;

{/* Настройки сервера */}
app.use(bodyParser.json());
app.use(cors());
app.use(express.json({ extended: true }))

{/* Роутеры */}
app.use("/tovars", tovarRouter);
app.use("/auth", routerAuth);
app.use("/orders", ordersRouter);

async function dbsConnect() {
	try {
		await mongoose.connect('mongodb://10.100.3.210:27017/shop');
		console.log('База подключена');
	} catch (error) {
		console.log(error);
	}
}

/* Запуск сервера */
app.listen(PORT, dbsConnect)
