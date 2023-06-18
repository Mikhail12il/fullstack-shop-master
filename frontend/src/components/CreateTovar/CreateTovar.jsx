import React, { useState } from 'react'
import './CreateTovar.css'

export const CreateTovar = (props) => {
	const { createTovarHandler } = props

	const [newTovar, setNewTovar] = useState({
		title: '',
		desc: '',
		category: 'Дерево',
		price: '',
		imgSrc: '',
		available: 'Есть в наличии'
	})

	return (
		<div onClick={(e) => e.stopPropagation()} className='addItem-content'>
			<p>Новый товар</p>
			<input
				onChange={e => setNewTovar({ ...newTovar, title: e.target.value })}
				value={newTovar.title}
				type="text"
				placeholder='Название'
			/>
			<input onChange={e => setNewTovar({ ...newTovar, desc: e.target.value })}
				value={newTovar.desc}
				type="text"
				placeholder='Описание'
			/>
			<input onChange={e => setNewTovar({ ...newTovar, price: e.target.value })}
				value={newTovar.price}
				type="text"
				placeholder='Цена'
			/>
			<input onChange={e => setNewTovar({ ...newTovar, imgSrc: e.target.value })}
				value={newTovar.imgSrc}
				type="text"
				placeholder='Ссылка на картинку'
			/>
			<select
				name="choice"
				value={newTovar.category}
				onChange={e => setNewTovar({ ...newTovar, category: e.target.value })}
			>
				<option value="Дерево">Дерево</option>
				<option value="Металл">Металл</option>
				<option value="Крыша">Крыша</option>
				<option value="Смеси">Смеси</option>
				<option value="Шифер">Шифер</option>
			</select>

			<select
				name="available"
				value={newTovar.available}
				onChange={e => setNewTovar({ ...newTovar, available: e.target.value })}
			>
				<option value="Есть в наличии">Есть в наличии</option>
				<option value="Нет в наличии">Нет в наличии</option>
			</select>
			
			<button onClick={() => createTovarHandler(newTovar)}>Добавить</button>
		</div>
	)
}
