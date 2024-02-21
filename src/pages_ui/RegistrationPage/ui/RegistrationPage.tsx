'use client'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { MUIButton } from '@/shared/ui/MUIButton'
import { redirect } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { CustomInput } from '@/shared/ui/CustomInput'
import { useState } from 'react'
import { NumberInput } from '@/shared/ui/NumberInput'
import { Dialog } from '@/shared/ui/Modal'
import { AxiosError } from 'axios'
import { fetchRegistration } from '../services/fetchRegistration'

interface FormFields {
    username: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
}

const fieldName = {
    username: 'Полное имя',
    first_name: 'Имя',
    last_name: 'Фамилия',
    email: 'Почта',
    password: 'Пароль',
    phone_number: 'Номер телефона',
    detail: 'Ошибка',
}

function createStringFromErrors(errors: string | string[]) {
    if (typeof errors === 'string') {
        return <p>{errors}</p>
    } else {
        return errors?.map((str, i) => <p key={i}>{str}</p>)
    }
}

function RenderError(errors: Record<string, string[] | string>) {
    return (
        <>
            {Object.entries(errors).map(([name, errorsArray], i) => {
                console.log(name)
                return (
                    <div key={i}>
                        <h2>{fieldName[name as keyof FormFields]}</h2>
                        {createStringFromErrors(errorsArray)}
                    </div>
                )
            })}
        </>
    )
}

export const RegistrationPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [openModal, setIsOpen] = useState<boolean>(false)

    const [errors, setErrors] = useState<Record<string, string[]> | {}>({})

    const { register, handleSubmit } = useForm<FormFields>()

    const onSubmit = handleSubmit((data) => {
        fetchRegistration(data)
            .then((res) => {})
            .catch((err: AxiosError) => {
                const errors = err?.response?.data as Record<string, string[]>
                setErrors(errors)
                setIsOpen(true)
                console.log(errors)
            })
    })

    return (
        <form onSubmit={onSubmit}>
            <h1>Регистрация</h1>
            <CustomInput
                variant="standard"
                label="Почта"
                type="email"
                disabled={isLoading}
                {...register('email')}
            />
            <CustomInput
                variant="standard"
                label="Имя"
                disabled={isLoading}
                {...register('first_name')}
            />
            <CustomInput
                variant="standard"
                label="Фамилия"
                disabled={isLoading}
                {...register('last_name')}
            />
            <CustomInput
                variant="standard"
                label="Пароль"
                type="password"
                disabled={isLoading}
                {...register('password')}
            />
            <NumberInput
                fullWidth={true}
                disabled={isLoading}
                {...register('phone_number')}
            />
            <MUIButton
                type="submit"
                color="var(--global-palette1)"
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
            {openModal && (
                <Dialog onClose={() => setIsOpen(false)}>
                    <RenderError {...errors} />
                </Dialog>
            )}
        </form>
    )
}
