'use client'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { MUIButton } from '@/shared/ui/MUIButton'
import { RegistrationInput } from '@/features/registration'
import { sendRegistrationData } from '@/features/registration'
import { useAppDispatch } from '@/shared/hooks'
import { redirect } from 'next/navigation'
import {} from '@/app/providers/NavigationRoutes'

export const RegistrationPage = () => {
    const dispatch = useAppDispatch()

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
            />
            <RegistrationInput
                label="Имя"
                name="first_name"
                selector="getFirstName"
            />
            <RegistrationInput
                label="Фамилия"
                name="last_name"
                selector="getLastName"
            />
            <RegistrationInput
                label="Пароль"
                name="password"
                selector="getPassword"
                type="password"
            />
            <MUIButton
                type="submit"
                color="var(--global-palette1)"
                onClick={onClick}
                className="button">
                Зарегестрироваться
            </MUIButton>
            <div>
                <span>Есть аккаунт?</span>
                <MUIButton
                    size="small"
                    href={NavigationRoutes.login()}
                    className="button">
                    войти
                </MUIButton>
            </div>
        </>
    )
}
