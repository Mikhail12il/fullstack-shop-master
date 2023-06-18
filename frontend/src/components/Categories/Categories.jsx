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
        setCategories(['Всё', ...items.map(i => i.category)])
    }, [items])

    return (
        <div className='categories'>
            {categories.map(el => (
                <div key={el.name} onClick={() => chooseCategory(el)}>{el}</div>
            ))}
        </div>
    )
}