'use client'
import { CustomInput } from '@/shared/ui/CustomInput'
import { Button } from '@mui/material'
import s from '../s.module.scss'
import { Input } from '../components/Input'

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
            <Button className={s.button}>Зарегестрироваться</Button>
        </section>
    )
}

export default RegistrationPage
