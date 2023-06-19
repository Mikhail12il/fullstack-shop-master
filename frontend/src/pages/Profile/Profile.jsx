import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Header } from '../../components/Header/Header'
import { Context } from '../../context/context'
import { ordersApi } from '../../services/orderApi'
import './Profile.css'

export const Profile = () => {
	const { user } = useContext(Context)
	

	const [orders, setOrders] = useState([])

	const fetchAllOrders = () => {
		ordersApi
			.getAllOrders()
			.then(res => setOrders([...res]))
	}

	useEffect(() => {
		if (user) {
			user.role[0] === 'Админ'
				? fetchAllOrders()
				: ordersApi
					.getOrdersByUserId(user._id)
					.then(res => setOrders([...res]))
		}
	}, [user])

	const deleteOrderHandler = (id) => {
		ordersApi
			.deleteOrder(id)
			.then(() => fetchAllOrders())
	}

	const completeOrderHandler = (id) => {
		ordersApi
			.completeOrder(id)
			.then(() => fetchAllOrders())
	}

	return (
		<div className='wrapper'>
			<Header />
			{/* Заголовок */}

			{user
				?
				<>
					{user.role[0] === 'Админ' && <p>Все заявки</p>}
					{user.role[0] === 'Пользователь' && <p>Ваши заявки</p>}
				</>
				: 'Авторизуйтесь'}

			{/* Заказы */}
			<div className='orders-inner'>
				{
					orders.length > 0
						?
						orders.map(i =>
						(
							<div className='order-item'>
								<p>Заказ №{i._id} на сумму {i.price}</p>
								<p>Заказчик: {i.virtualUser[0].username}</p>
								<p>Статус заказа: {i.status}</p>
								{user.role[0] === 'Админ' &&
									<>
										{i.status !== 'Готово' && <button className='add-to-cart' onClick={() => completeOrderHandler(i._id)}>Заказ готов</button>}
										<button className='add-to-cart' onClick={() => deleteOrderHandler(i._id)}>Удалить заказ</button>
									</>
								}

							</div>
						)
						)
						: <p>Заявок нет</p>
				}
			</div>

		</div>
	)
}