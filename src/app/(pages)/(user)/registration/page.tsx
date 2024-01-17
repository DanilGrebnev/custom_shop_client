'use client'

import { MUIButton } from '@/shared/ui/MUIButton'
import { RegistrationInput } from '@/features/registration'

import s from '../s.module.scss'

const RegistrationPage = () => {
    return (
        <section
            className={s.page}
            id="Registration">
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

            <MUIButton className={s.button}>Зарегестрироваться</MUIButton>
        </section>
    )
}

export default RegistrationPage
