import { User } from '../models/User.js'

class AuthConroller {
	async registration(req, res) {
		try {
			const { username } = req.body
			const candidate = await User.findOne({ username })

			if (candidate) {
				return res.status(400).json({ message: "Пользователь с таким именем уже сущестует" })
			}

			const user = new User({ ...req.body, role: ['Пользователь'] })
			//Пользователь
			await user.save()

			return res.status(200).json({ message: "Успешно" })
		} catch (error) {
			console.log(e);
			res.status(400).json({ message: 'Registation Error' })
		}
	}
	async login(req, res) {
		try {
			const { username, password } = req.body
			const user = await User.findOne({ username: username })

			if (!user) {
				return res.status(400).json({ message: 'Пользователь с таким ником не найден' })
			}

			if (password !== user.password) {
				return res.status(400).json({ message: 'Неверный пароль' })
			}

			return res.json(await User.findOne({ username: username }, { password: 0 }))
		} catch (error) {
			console.log(e);
			res.status(400).json({ message: 'Login Error' })
		}
	}
	async userInfo(req, res) {
		const userId = req.user.id

		const findedUser = await User.findOne({ _id: userId })

		res.status(200).send(findedUser)
	}
}

export default new AuthConroller()