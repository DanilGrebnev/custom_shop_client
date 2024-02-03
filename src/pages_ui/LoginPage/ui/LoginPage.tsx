'use client'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { MUIButton } from '@/shared/ui/MUIButton'
import { ChangeEvent, useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { authByLogin } from '@/features/login'
import { useRouter } from 'next/navigation'
import { LoginSelector } from '@/features/login/model/selectors/loginSelector'
import { CustomInput } from '@/shared/ui/CustomInput'
import { ILoginFields } from '@/features/login/model/schema/loginSchema'
import { loginActions } from '@/features/login/model/slice/loginSlice'
import { CheckBox } from '@/shared/ui/CheckBoxes/CheckBox'
import {
    UserProfileSelectors,
    UserProfileServices,
} from '@/features/userProfile'

export const LoginPage = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(UserProfileSelectors.getIsAuth)

    const isLoading = useAppSelector(LoginSelector.getIsLoading)
    const username = useAppSelector(LoginSelector.getUsername)
    const password = useAppSelector(LoginSelector.getPassword)
    const rememberMe = useAppSelector(LoginSelector.getIsRememberMe)

    const onChange = useCallback(
        ({ target }: ChangeEvent<HTMLInputElement>) => {
            const name = target.name as keyof Omit<ILoginFields, 'remember_me'>
            const value = target.value
            dispatch(loginActions.setLoginValue({ name, value }))
        },
        [dispatch]
    )

    const onCheckBoxChange = useCallback(
        (_: any, checked: boolean) => {
            dispatch(loginActions.setRememberMe(checked))
        },
        [dispatch]
    )

    const onSubmit = useCallback(() => {
        dispatch(authByLogin())
            .unwrap()
            .then(() => router.push(NavigationRoutes.main()))
    }, [dispatch, router])

    return (
        <>
            <h1>Вход</h1>
            <CustomInput
                disabled={isLoading}
                label="Имя пользователя"
                name="username"
                value={username}
                onChange={onChange}
            />
            <CustomInput
                disabled={isLoading}
                label="Пароль"
                name="password"
                type="password"
                value={password}
                onChange={onChange}
            />
            <CheckBox
                checked={rememberMe}
                disabled={isLoading}
                label="Запомнить меня"
                name="remember_me"
                onChange={onCheckBoxChange}
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
