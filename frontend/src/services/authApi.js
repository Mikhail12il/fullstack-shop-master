import axios from 'axios'

class AuthApi {
	async registration(user) {
		const response = await axios.post('http://localhost:5000/auth/reg', user)
		return response.data
	}
	async login(user) {
		const response = await axios.post('http://localhost:5000/auth/login', user)
		return response.data
	}
}

export const authApi = new AuthApi()