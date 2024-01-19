'use client'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { CheckBox } from '@/shared/ui/CheckBox'
import { MUIButton } from '@/shared/ui/MUIButton'
import { LoginInput } from '@/features/login'
import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { authByLogin } from '@/features/login'
import { useRouter } from 'next/navigation'
import { LoginSelector } from '@/features/login/model/selectors/loginSelector'
import { PageLoader } from '@/shared/ui/LoadersSpinners'

export const LoginPage = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(LoginSelector.getIsLoading)

    const onSubmit = useCallback(() => {
        dispatch(authByLogin())
            .unwrap()
            .then(() => router.push(NavigationRoutes.main()))
    }, [dispatch, router])

    return (
        <>
            <h1>Вход</h1>
            <LoginInput
                disabled={isLoading}
                label="Имя пользователя"
                name="username"
                selector="getUsername"
            />
            <LoginInput
                disabled={isLoading}
                label="Пароль"
                name="password"
                selector="getPassword"
                type="password"
            />
            <CheckBox
                disabled={isLoading}
                label="Запомнить меня"
                name="remember_me"
            />
            <MUIButton
                disabled={isLoading}
                color="var(--global-palette1)"
                onClick={onSubmit}
                variant="text"
                className="button">
                Войти
            </MUIButton>
            <div>
                <span>Нет аккаунта?</span>
                <MUIButton
                    disabled={isLoading}
                    size="small"
                    variant="text"
                    href={NavigationRoutes.registration()}
                    className="button">
                    Зарегистрироваться
                </MUIButton>
            </div>
        </>
    )
}
