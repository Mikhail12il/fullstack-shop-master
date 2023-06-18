import React, { useState } from 'react'
import './UpdateTovar.css'

export const UpdateTovar = (props) => {
	const { tovarToUpdate, updateTovarHandler } = props

	const [newTovar, setNewTovar] = useState(tovarToUpdate)

	return (
		<div onClick={(e) => e.stopPropagation()} className='addItem-content'>
			<p>Обновить товар</p>
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
			</select>
			<select
				name="available"
				value={newTovar.available}
				onChange={e => setNewTovar({ ...newTovar, available: e.target.value })}
			>
				<option value="Есть в наличии">Есть в наличии</option>
				<option value="Нет в наличии">Нет в наличии</option>
			</select>
			<button onClick={() => updateTovarHandler(tovarToUpdate._id, newTovar)}>Обновить</button>
		</div>
	)
}
