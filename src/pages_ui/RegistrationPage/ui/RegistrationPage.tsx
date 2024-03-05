'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useRouter } from 'next/navigation'

import { useFetchData } from '@/shared/hooks/useFetchData'
import { CustomInput } from '@/shared/ui/CustomInput'
import { MUIButton } from '@/shared/ui/MUIButton'
import { Dialog } from '@/shared/ui/Modal'
import { NumberInput } from '@/shared/ui/NumberInput'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

import { type FormFields } from '../types'

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

interface TResponse {
    userId: number
    id: number
    title: string
    completed: boolean
}

const url = process.env.NEXT_PUBLIC_URL_BACKEND + '/api/auth/reg'

export const RegistrationPage = () => {
    const [openModal, setIsOpen] = useState<boolean>(false)
    const router = useRouter()

    const { fetchData, data, isLoading, isError } = useFetchData()

    const { register, handleSubmit } = useForm<FormFields>()

    const onSubmit = handleSubmit((data) => {
        fetchData('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => {
                console.log(response.payload)
            })
            .catch((err) => console.log('err', err))
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
                    href={NavigationRoutes.login}
                    className="button"
                    disabled={isLoading}>
                    войти
                </MUIButton>
            </div>
            {openModal && (
                <Dialog
                    closeTimer={8000}
                    onClose={setIsOpen.bind(null, false)}>
                    {/* <RenderError {...isError} /> */}
                </Dialog>
            )}
        </form>
    )
}
