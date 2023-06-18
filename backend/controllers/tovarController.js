import path from 'path'

import { Tovar } from '../models/Tovar.js'

const __dirname = path.resolve()

class TovarController {
	async getAll(req, res) {
		try {
			const tovars = await Tovar.find().sort({ "createdAt": "asc" });
			return res.status(200).json(tovars);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}
	async createTovar(req, res) {
		try {
			await Tovar.create({ ...req.body.newTovar })
			const tovars = await Tovar.find()
			res.status(201).json(tovars);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}
	async deleteById(req, res) {
		const tovarId = req.params.id;

		try {
			await Tovar.findByIdAndDelete(tovarId);

			const tovars = await Tovar.find()

			return res.json(tovars);
		} catch (e) {
			console.log(e);
			return res.status(500).json(e);
		}

	}

	async updateById(req, res) {
		const tovarId = req.params.id;
		const tovar = req.body.newTovar;

		try {
			await Tovar.findByIdAndUpdate(tovarId, tovar);
			const tovars = await Tovar.find()

			return res.json(tovars);

		} catch (e) {
			console.log(e);
			return res.status(500).json(e);
		}
	}
}

export default new TovarController()
