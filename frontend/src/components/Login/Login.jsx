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
	const [userForm, setUserForm] = useState({ username: '', password: '' })

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
				<button onClick={() => setOpen(false)}>Закрыть</button>
				<input
					type="text"
					placeholder='Логин'
					value={userForm.username}
					onChange={e => setUserForm({ ...userForm, username: e.target.value })}
				/>
				<input
					type="text"
					placeholder='Пароль'
					value={userForm.password}
					onChange={e => setUserForm({ ...userForm, password: e.target.value })}
				/>
				<button onClick={isLogin ? loginHandler : registrHandler}>{isLogin ? 'Войти' : 'Регистрация'}</button>
				<button onClick={() => setIsLogin(prev => !prev)}>{isLogin ? 'Нет аккаунта?' : 'Войти'}</button>
			</div>
		</div>
	)
}
