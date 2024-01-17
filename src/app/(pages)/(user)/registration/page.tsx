'use client'

import { Input } from '../components/Input'
import { MUIButton } from '@/shared/ui/MUIButton'

import s from '../s.module.scss'

const RegistrationPage = () => {
    return (
        <section
            className={s.page}
            id="Registration">
            <Input
                name="first_name"
                label="Имя"
            />
            <Input
                name="last_name"
                label="Фамилия"
            />
            <Input
                name="email"
                label="Почта"
            />
            <Input
                name="password"
                label="Пароль"
            />
            <MUIButton className={s.button}>Зарегестрироваться</MUIButton>
        </section>
    )
}

export default RegistrationPage
