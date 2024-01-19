'use client'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { MUIButton } from '@/shared/ui/MUIButton'
import {
    RegistrationInput,
    RegistrationSelectors,
} from '@/features/registration'
import { sendRegistrationData } from '@/features/registration'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { redirect } from 'next/navigation'

export const RegistrationPage = () => {
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(RegistrationSelectors.getIsLoading)

    const onClick = () => {
        dispatch(sendRegistrationData())
            .unwrap()
            .then(() => redirect(NavigationRoutes.login()))
    }

    return (
        <>
            <h1>Регистрация</h1>
            <RegistrationInput
                label="Почта"
                name="email"
                selector="getEmail"
                type="email"
                disabled={isLoading}
            />
            <RegistrationInput
                label="Имя"
                name="first_name"
                selector="getFirstName"
                disabled={isLoading}
            />
            <RegistrationInput
                label="Фамилия"
                name="last_name"
                selector="getLastName"
                disabled={isLoading}
            />
            <RegistrationInput
                label="Пароль"
                name="password"
                selector="getPassword"
                type="password"
                disabled={isLoading}
            />
            <MUIButton
                type="submit"
                color="var(--global-palette1)"
                onClick={onClick}
                className="button"
                disabled={isLoading}>
                Зарегестрироваться
            </MUIButton>
            <div>
                <span>Есть аккаунт?</span>
                <MUIButton
                    size="small"
                    href={NavigationRoutes.login()}
                    className="button"
                    disabled={isLoading}>
                    войти
                </MUIButton>
            </div>
        </>
    )
}
