import axios from 'axios'

class TovarApi {
	/* Запрос на получение всех товаров */
	async getAllTovars() {
		const response = await axios.get('http://localhost:5000/tovars')
		return response.data
	}
	async createTovar(newTovar) {
		const response = await axios.post('http://localhost:5000/tovars', {
			newTovar
		})
		return response.data
	}
	async updateTovar(id, newTovar) {
		const response = await axios.put('http://localhost:5000/tovars/' + id, {
			newTovar
		})
		return response.data
	}
	async deleteTovar(id) {
		const response = await axios.delete('http://localhost:5000/tovars/' + id)
		return response.data
	}
}

export const tovarApi = new TovarApi()