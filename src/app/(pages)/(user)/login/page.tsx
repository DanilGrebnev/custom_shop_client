'use client'

import { CheckBox } from '@/shared/ui/CheckBox'
import { MUIButton } from '@/shared/ui/MUIButton'
import { LoginInput } from '@/features/login'

import s from '../s.module.scss'
import { useCallback, useState } from 'react'

const LoginPage = () => {
    const onChange = useCallback((e: any) => {}, [])

    return (
        <section
            className={s.page}
            id="Login">
            <LoginInput
                label="Логин"
                name="login"
                selector="getLogin"
            />
            <LoginInput
                label="Пароль"
                name="password"
                selector="getPassword"
            />
            <CheckBox
                onChange={onChange}
                label="Запомнить меня"
                name="remember_me"
            />
            <MUIButton className={s.button}>Отправить</MUIButton>
        </section>
    )
}

export default LoginPage
