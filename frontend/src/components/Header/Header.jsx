import React, { useState, useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Order } from '../CartItem/CartItem';
import './Header.css'
import { Link } from 'react-router-dom'
import { LoginAndReg } from '../Login/Login';
import { Context } from '../../context/context';
import { ordersApi } from '../../services/orderApi';

export const Header = () => {
  const [cartOpen, setCartOpen] = useState(false)

  const [loginOpen, setLoginOpen] = useState(false)

  const { selectedItems, deleteItem, user, setSelectedItems } = useContext(Context)

  const createOrder = () => {
    const summa = selectedItems.reduce((acc, curr) => acc + curr.price, 0)

    if (user?._id) {
      ordersApi
        .createOrder(user._id, summa, selectedItems)
        .then(res => {
          alert('Ваша заявка успешно отправлена')
          setSelectedItems([])
        })
        .catch(() => alert('Что-то пошло не так'))
    } else {
      alert('Авторизуйтесь')
      setLoginOpen(true)
    }
  }

  return (
    <>
      <LoginAndReg open={loginOpen} setOpen={setLoginOpen} />
      <header>
        <div>
          <Link to={'/'} className='logo'>Construction Materials</Link>
          <ul className='nav'>
            <li><Link to={'/about'}>про нас</Link></li>
            <li><Link to={'/contacts'}>контакты</Link></li>
            <li>
              {user
                ? <Link to={'/profile'}>личный кабинет</Link>
                : <button className='exit' onClick={() => setLoginOpen(true)}>Войти</button>
              }
            </li>
          </ul>

          <FaShoppingCart
            onClick={() => setCartOpen(prev => !prev)}
            className={`shop-cart-batton ${cartOpen && 'active'}`}
          />

          {cartOpen && (
            <div className='shop-cart'>
              {selectedItems.length > 0 ?
                <>
                  <Orders onDelet={deleteItem} orders={selectedItems} />
                  <button className='add-too' onClick={createOrder}>Заказать</button>
                </>
                :
                <div className='empty'>
                  <h2>Ничего не выбрано</h2>
                </div>
              }
            </div>
          )}
        </div>
      </header>
    </>

  )
}



const Orders = (props) => {
  const { orders, onDelet } = props
  let summa = 0
  orders.forEach(el => summa += Number.parseFloat(el.price))

  return (
    <div>
      {orders.map(el => (
        <Order onDelet={onDelet} key={el.id} item={el} />
      ))}
      <p className='summa'> Сумма: {new Intl.NumberFormat().format(summa)}$ </p>
    </div>
  )
}
