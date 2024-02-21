'use client'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { MUIButton } from '@/shared/ui/MUIButton'
import { useRouter } from 'next/navigation'
import { CustomInput } from '@/shared/ui/CustomInput'
import { CheckBox } from '@/shared/ui/CheckBoxes/CheckBox'
import { useLoginInAccountMutation } from '@/features/userProfile'
import { useForm } from 'react-hook-form'

interface FormValues {
    username: string
    password: string
    remember_me: boolean
}

export const LoginPage = () => {
    const router = useRouter()
    const [sendLogin, { isLoading }] = useLoginInAccountMutation()

    const { register, handleSubmit } = useForm<FormValues>()

    const onSubmit = handleSubmit((data) => {
        sendLogin(data).then(() => {
            router.push(NavigationRoutes.main())
        })
    })

    return (
        <form onSubmit={onSubmit}>
            <h1>Вход</h1>
            <CustomInput
                variant="standard"
                fullWidth={true}
                disabled={isLoading}
                label="Имя пользователя"
                {...register('username')}
            />
            <CustomInput
                variant="standard"
                fullWidth={true}
                disabled={isLoading}
                label="Пароль"
                type="password"
                {...register('password')}
            />
            <CheckBox
                disabled={isLoading}
                label="Запомнить меня"
                {...register('remember_me')}
            />
            <MUIButton
                disabled={isLoading}
                color="var(--global-palette1)"
                type="submit"
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
        </form>
    )
}
