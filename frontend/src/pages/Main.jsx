import React, { useState, useContext, useEffect } from "react"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"
import { Items } from "../components/Items/Items"
import { Categories } from "../components/Categories/Categories"
import { ShowFullItem } from "../components/ShowFullItem/ShowFullItem"
import { tovarApi } from "../services/tovarApi"
import { Context } from "../context/context"

export const Main = () => {
  const { addToOrder, setItems } = useContext(Context) // Достаем из контекста данные

  const [showFullItem, setShowFullItem] = useState(false)
  const [fullItem, setFullItem] = useState({})
  const [category, setCategory] = useState('Всё')

  // Запрос на все товары 
  useEffect(() => {
    tovarApi
      .getAllTovars()
      .then(res => {
        setItems([...res])
      })
  }, [setItems])

  /* Клик картинку */
  const onShowItem = (item) => {
    setFullItem(item)
    setShowFullItem(prev => !prev)
  }

  /* Скрывание  */
  const onHideItem = (item) => {
    setFullItem(null)
    setShowFullItem(prev => !prev)
  }

  return (
    <div className="wrapper">
      <Header />
      <div className='presentetion'></div>
      <Categories chooseCategory={setCategory} />
      <Items onShowItem={onShowItem} category={category} onAdd={addToOrder} />

      {showFullItem &&
        <ShowFullItem
          onAdd={addToOrder}
          onHideItem={onHideItem}
          onShowItem={onShowItem}
          item={fullItem}
        />
      }

      <Footer />
    </div>
  )
}