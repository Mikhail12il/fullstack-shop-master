import React, { useState } from "react";
import {
  RouterProvider,
} from "react-router-dom";
import { Context } from "./context/context";

import { router } from "./router/router";

export const App = () => {

  const [user, setUser] = useState();
  const [selectedItems, setSelectedItems] = useState([]) /* Товары в корзине */
  const [items, setItems] = useState([]) /* Все товары */

  /* Удаляет из корзины */
  const deleteItem = (id) => {
    setSelectedItems(selectedItems.filter(el => el._id !== id))
  }

  /* Добавляет в корзину */
  const addToOrder = (item) => {
    let isInArray = false

    selectedItems.forEach(el => {
      if (el._id === item._id) {
        isInArray = true
      }
    })

    if (!isInArray) {
      setSelectedItems([...selectedItems, item])
    }
  }

  return (
    // Контекст позволяет пользоваться этими данными во всем приложении
    <Context.Provider value={{
      user, setUser, setSelectedItems, items,
      setItems, selectedItems, deleteItem, addToOrder
    }}>
      <RouterProvider router={router} />
    </Context.Provider>
  )
}

