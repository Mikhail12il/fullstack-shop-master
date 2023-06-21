/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './ShowFullItem.css'


export const ShowFullItem = (props) => {
  const { item, onShowItem, onAdd, onHideItem } = props

  return (
    <div className='full-item' onClick={onHideItem}>
      <div onClick={e => e.stopPropagation()}>
        <img src={item.imgSrc} onClick={() => onShowItem(item)} />
        <h2>Название -{item.title}</h2>
        <p>Описание -{item.desc}</p>
        <p>Категория - {item.category}</p>
        <b>Цена - {item.price}</b>

        {item.available === 'Есть в наличии' &&
          <div
            className='add-to-cart-full'
            onClick={() => {
              onAdd(item);
              onHideItem();
            }}
          >
            +
          </div>
        }
      </div>
    </div>
  )
}

