'use client'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { MUIButton } from '@/shared/ui/MUIButton'
import { RegistrationInput } from '@/features/registration'
import { sendRegistrationData } from '@/features/registration'
import { useAppDispatch } from '@/shared/hooks'

export const RegistrationPage = () => {
    const dispatch = useAppDispatch()

    const onClick = () => {
        dispatch(sendRegistrationData())
    }

    return (
        <>
            <RegistrationInput
                label="Почта"
                name="email"
                selector="getEmail"
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
            />

            <MUIButton
                onClick={onClick}
                className="button">
                Зарегестрироваться
            </MUIButton>
            <MUIButton
                href={NavigationRoutes.login()}
                className="button">
                войти
            </MUIButton>
        </>
    )
}
