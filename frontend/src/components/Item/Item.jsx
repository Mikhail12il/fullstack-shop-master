import React from 'react'
import { useContext } from 'react'
import { Context } from '../../context/context'
import { tovarApi } from '../../services/tovarApi'

export const Item = (props) => {
  const { item, onShowItem, onAdd, onUpdate } = props

  const { user, setItems } = useContext(Context)

  const deleteTovarHandler = () => {
    tovarApi
      .deleteTovar(item._id)
      .then(res => setItems([...res]))
  }

  return (
    <div className='item'>
      <img src={item.imgSrc} alt='asd' onClick={() => onShowItem(item)} />
      <h2>Название = {item.title}</h2>
      <p>Описание = {item.desc}</p>
      <b>Цена = {item.price}</b>
      <p>{item.available}</p>
      <div className="btns">
        {item.available === 'Есть в наличии' && <div className='add-to-cart' onClick={() => onAdd(item)}>+</div>}
        {user?.role[0] === 'Админ' && (
          <>
            <button onClick={() => onUpdate(item)}>Обновить</button>
            <button onClick={deleteTovarHandler}>Удалить</button>
          </>
        )
        }
      </div>
    </div >
  )
}
