import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Context } from '../../context/context'
import './Categories.css'

export const Categories = (props) => {
    const { chooseCategory } = props

    const { items } = useContext(Context)

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const cat = new Set(items.map(i => i.category))
        setCategories(['Всё', ...cat])
    }, [items])

    return (
        <div className='categories'>
            {categories.map(el => (
                <div key={el.name} onClick={() => chooseCategory(el)}>{el}</div>
            ))}
        </div>
    )
}