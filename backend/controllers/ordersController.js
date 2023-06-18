import fs from 'fs'
import path from 'path'

import { Order } from '../models/Order.js'
import { Tovar } from '../models/Tovar.js'
import { User } from '../models/User.js'



const __dirname = path.resolve()

class OrderController {
	async getAll(req, res) {
		try {
			const orders = await Order.find()
				.populate({ path: 'virtualTovars' })
				.populate({ path: 'virtualUser' })

			return res.status(200).json(orders);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}

	async createOrder(req, res) {
		try {
			const user = await User.findById({ _id: req.body.userId })

			const order = await Order.create({ status: 'В процессе', userId: user, price: req.body.price });

			for (let i = 0; i < req.body.tovars.length; i++) {
				const tmp = await Tovar.findById({ _id: req.body.tovars[i]._id })
				order.tovars.push(tmp)
			}

			await order.save()
			res.status(201).json(order);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}

	async getByUserId(req, res) {
		try {
			const orders = await Order.find({ userId: req.params.id })
				.populate({ path: 'virtualTovars' })
				.populate({ path: 'virtualUser' });

			return res.status(200).json(orders);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}

	async deleteOrder(req, res) {
		try {
			const order = await Order.findByIdAndDelete({ _id: req.params.id })

			res.status(201).json(order);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}

	async completeOrder(req, res) {
		try {
			const order = await Order.updateOne({ _id: req.params.id }, { $set: { status: 'Готово' } })

			res.status(201).json(order);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}
}

export default new OrderController()
