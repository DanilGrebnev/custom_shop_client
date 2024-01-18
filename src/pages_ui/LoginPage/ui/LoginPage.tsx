'use client'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { CheckBox } from '@/shared/ui/CheckBox'
import { MUIButton } from '@/shared/ui/MUIButton'
import { LoginInput } from '@/features/login'
import { useCallback } from 'react'

export const LoginPage = () => {
    const onChange = useCallback((e: any) => {}, [])

    return (
        <>
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
            <MUIButton className="button">Войти</MUIButton>
            <MUIButton
                href={NavigationRoutes.registration()}
                className="button">
                Зарегистрироваться
            </MUIButton>
        </>
    )
}
