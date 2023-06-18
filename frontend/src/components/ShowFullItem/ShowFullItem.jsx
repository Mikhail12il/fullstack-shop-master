/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './ShowFullItem.css'

export const ShowFullItem = (props) => {
  const { item, onShowItem, onAdd, onHideItem } = props

  return (
    <div className='full-item' onClick={onHideItem}>
      <div onClick={e => e.stopPropagation()}>
        <img src={"./img/" + item.img} onClick={() => onShowItem(item)} />
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}</b>
        <div
          className='add-to-cart'
          onClick={() => {
            onAdd(item);
            onHideItem();
          }}
        >+</div>
      </div>
    </div>
  )
}

