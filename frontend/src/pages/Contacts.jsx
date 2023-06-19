import React from 'react'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import './contact.css'
import '../components/Footer/Footer.css'

export const Contacts = () => {
	return (
		<div className='wrapper'>
			<Header/>
			<div><main class="main">
		<section class="contacts">
			<div class="contacts__container container">
				<div class="contacts__inner">
					<div class="contacts__list">
						<p class="contacts-title">КОНТАКТЫ</p>
						<ul>
							<li class="contacts__item contacts-address">​улица Чехова 19, ТЦ Рублёв ​​111 павильон; 1 этаж</li>
							<li class="contacts__item contacts-phone">8-800-555-35-35</li>
							<li class="contacts__item contacts-mail">shop@gmail.com</li>
						</ul>
					</div>
					
				</div>
			</div>
		</section>
	</main></div>
	<div><main class="main">
		<section class="contacts">
			<div class="contacts__container container">
				<div class="contacts__inner">
					<div class="contacts__list">
						<p class="contacts-title">Доставка</p>
						<ul>
							<li class="contacts__item contacts-address">Самовывоз - бесплатно</li>
							<li class="contacts__item contacts-phone">8-800-555-35-35</li>
							
						</ul>
						<br/>
						<p class="contacts-title">ОПЛАТА</p>
						<ul class="delivery__list">
							<li class="contacts__item contacts-address">Наличный расчёт</li>
						</ul>
					</div>
					
				</div>
			</div>
		</section>
	</main></div>
	<Footer/>
		</div>
	)
}