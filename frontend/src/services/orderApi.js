import axios from 'axios'

class OrdersApi {
	async createOrder(userId, price, tovars) {
		const response = await axios.post('http://localhost:5000/orders', {
			userId,
			price,
			tovars,
		})
		return response.data
	}
	async getOrdersByUserId(userId) {
		const response = await axios.get('http://localhost:5000/orders/user/' + userId)
		return response.data
	}
	async getAllOrders() {
		const response = await axios.get('http://localhost:5000/orders')
		return response.data
	}
	async deleteOrder(id) {
		const response = await axios.delete('http://localhost:5000/orders/' + id)
		return response.data
	}
	async completeOrder(id) {
		const response = await axios.put('http://localhost:5000/orders/' + id)
		return response.data
	}
}

export const ordersApi = new OrdersApi()