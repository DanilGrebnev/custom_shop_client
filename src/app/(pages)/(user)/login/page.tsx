'use client'

import { Button } from '@mui/material'
import { Input } from '../components/Input'
import { CheckBox } from '@/shared/ui/CheckBox'

import s from '../s.module.scss'
import { useCallback, useState } from 'react'

const LoginPage = () => {
    const onChange = useCallback((e: any) => {}, [])
    const [state, setState] = useState('')

    return (
        <section
            className={s.page}
            id="Login">
            <Input
                label="Логин"
                onChange={(e) => setState(e.target.value)}
            />
            <Input label="Пароль" />
            <CheckBox
                onChange={onChange}
                label="Запомнить меня"
                name="remember_me"
            />
            <Button className={s.button}>Отправить</Button>
        </section>
    )
}

export default LoginPage
