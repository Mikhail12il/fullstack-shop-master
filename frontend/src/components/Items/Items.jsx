import React, { useState } from 'react'
import { Item } from '../Item/Item'
import './Items.css'
import cn from 'classnames';
import { useContext } from 'react';
import { Context } from '../../context/context';
import { tovarApi } from '../../services/tovarApi';
import { CreateTovar } from '../CreateTovar/CreateTovar';
import { UpdateTovar } from '../UpdateTovar/UpdateTovar';

export const Items = (props) => {
  const { category, onShowItem, onAdd } = props

  const { user, setItems, items } = useContext(Context)

  const [openCreate, setOpenCreate] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);

  const [tovarToUpdate, setTovarToUpdate] = useState();

  const createTovarHandler = (newTovar) => {
    tovarApi
      .createTovar(newTovar)
      .then(res => {
        setItems(res);
        alert('Успешно добавлен');
        setOpenCreate(false)
      })
      .catch(() => alert('Что-то пошло не так'))
  }

  const updateTovarHandler = (tovar) => {
    setTovarToUpdate(tovar)
    setOpenUpdate(true)
  }

  const onUpdate = (id, newTovar) => {
    tovarApi
      .updateTovar(id, newTovar)
      .then(res => {
        setItems(res)
        setOpenUpdate(false)
      })
  }

  return (
    <>
      <main>
        {user?.role[0] === 'Админ' &&
          <button className='tov' onClick={() => setOpenCreate(true)}>Добавить товар</button>

        }
        <div className='items-inner'>
          {items.map(el => {
            if (el.category === category || category === 'Всё') {
              return (
                <Item onUpdate={updateTovarHandler} onShowItem={onShowItem} key={el.id} item={el} onAdd={onAdd} />
              )
            }
            return null
          })}
        </div>

      </main>

      {/* Создание товара */}
      <div onClick={() => setOpenCreate(false)} className={cn('modal', { 'open': openCreate })}>
        <CreateTovar createTovarHandler={createTovarHandler} />
      </div>

      {/* Обновление товара */}
      {openUpdate && <div onClick={() => setOpenUpdate(false)} className={cn('modal', { 'open': openUpdate })}>
        <UpdateTovar tovarToUpdate={tovarToUpdate} updateTovarHandler={onUpdate} />
      </div>}
    </>
  )
}