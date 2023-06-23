import cn from 'classnames';
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Context } from '../../context/context.js'
import { authApi } from '../../services/authApi.js'
import { useNavigate } from "react-router-dom";
import './Login.css'

export const LoginAndReg = (props) => {
	const { open, setOpen } = props

	const [isLogin, setIsLogin] = useState(true)
	const [userForm, setUserForm] = useState({ tel: '', username: '', password: '' })

	const { setUser } = useContext(Context)

	const navigate = useNavigate();

	const loginHandler = async () => {
		const response = await authApi.login(userForm)
		setUser(response);
		setOpen(false)
	}

	const registrHandler = async () => {
		await authApi.registration(userForm)
		setIsLogin(true)
	}

	return (
		<div className={cn('login', { 'open': open })}>
			<div className='login-content'>
				<button className='bre' onClick={() => setOpen(false)}>Закрыть</button>

				{!isLogin && <input className='br'
					type="text"
					placeholder='tel'
					value={userForm.tel}
					onChange={e => setUserForm({ ...userForm, tel: e.target.value })}
				/>}
				<input className='br'
					type="text"
					placeholder='Логин'
					value={userForm.username}
					onChange={e => setUserForm({ ...userForm, username: e.target.value })}
				/>
				<input className='br'
					type="password"
					placeholder='Пароль'
					value={userForm.password}
					onChange={e => setUserForm({ ...userForm, password: e.target.value })}
				/>
				<button className='bre' onClick={isLogin ? loginHandler : registrHandler}>{isLogin ? 'Войти' : 'Регистрация'}</button>
				<button className='bre' onClick={() => setIsLogin(prev => !prev)}>{isLogin ? 'Нет аккаунта?' : 'Войти'}</button>
			</div>
		</div>
	)
}
