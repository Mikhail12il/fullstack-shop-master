/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { FaTrash } from 'react-icons/fa'

export const Order = (props) => {
  const { item, onDelet } = props

  return (
    <div className='item'>
      <img src={item.imgSrc} />
      <h2>Название - {item.title}</h2>
      <b>Цена - {item.price}</b>
      <FaTrash className='delet-icon' onClick={() => onDelet(item._id)} />
    </div>
  )

}