/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { FaTrash } from 'react-icons/fa'

export const Order = (props) => {
  const { item, onDelet } = props

  return (
    <div className='item'>
      <img src={"./img/" + item.img} />
      <h2>{item.title}</h2>
      <b>{item.price}</b>
      <FaTrash className='delet-icon' onClick={() => onDelet(item._id)} />
    </div>
  )

}