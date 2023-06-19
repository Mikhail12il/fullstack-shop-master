import React from 'react'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import './About.css'



export const About = () => {
	
	
	return (
		<div className='wrapper'>
			<Header/>
			<div><p className='text'>Центр строительных материалов «Construction Materials» – официальный дилер более 40 заводов-производителей строительных материалов .
<i>Работая с 2023 года, мы увеличивали наш ассортимент, улучшали наши услуги и  совершенствовали сервисы интернет-магазина.</i>
У нас в продаже: фасадные, теплоизоляционные, кровельные и шумоизоляционные материалы от ведущих производителей со склада в Иркутске и напрямую с завода-изготовителя.</p></div>
<div className='text'>
	<li>Практически весь ассортимент продукции находится на складе в Иркутске</li>
	<li>Доставка всеми видами транспорта.</li>
	<li>Индивидуальный подход к каждому клиенту.</li>
	
</div>

			
			<Footer/>
		</div>
	)
}