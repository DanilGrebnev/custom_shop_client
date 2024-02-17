'use client'
import deepEqual from 'deep-equal'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
    useGetProfileQuery,
    useUpdateProfileMutation,
} from '@/features/userProfile'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { CustomInput } from '@/shared/ui/CustomInput'
import { Papper } from '@/shared/ui/Papper'
import { dateParse } from '@/shared/lib/dateParse'
import { NumberInput } from '@/shared/ui/NumberInput'
import { Button } from '@/shared/ui/Button'
import { omitFromObject } from '@/shared/lib/omitFromObject'

import ProfileImage from '@/shared/assets/profile_icon_160.webp'
import Image from 'next/image'

import s from './ProfilePage.module.scss'
import clsx from 'clsx'

interface IProfileForm {
    first_name: string
    last_name: string
    email: string
    username: string
    phone_number: string
}

export const ProfilePage = () => {
    const [fetchUpdateProfile, result] = useUpdateProfileMutation()

    const { user } = useGetProfileQuery(undefined, {
        selectFromResult: (result) => {
            if (!result?.data) return { user: undefined }

            return {
                user: {
                    ...omitFromObject<typeof result.data, 'favorites' | 'id'>(
                        result.data,
                        ['favorites', 'id']
                    ),
                },
            }
        },
    })

    const defaultValues = {
        first_name: user?.first_name,
        last_name: user?.last_name,
        email: user?.email,
        phone_number: user?.phone_number || '',
        username: user?.username,
    }
    
    const { register, handleSubmit, watch, reset } = useForm<IProfileForm>({
        defaultValues,
    })

    const watchesValue = watch()

    const userValue = useMemo(() => {
        return omitFromObject(user!, ['date_joined'])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSubmit: SubmitHandler<IProfileForm> = useCallback(async (data) => {
        await fetchUpdateProfile(data).then(() => {
            document.location.reload()
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Papper
            id="Profile"
            className={s['profile-page']}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={clsx(s.container, 'contain')}>
                <div className={s['profile-card']}>
                    <Image
                        width={160}
                        height={160}
                        placeholder="blur"
                        quality={100}
                        alt="Изображение профиля"
                        src={ProfileImage}
                    />
                    <div className={s.setting}>
                        <CustomInput
                            {...register('first_name')}
                            label="Имя"
                            variant="standard"
                            name="first_name"
                        />
                        <CustomInput
                            {...register('last_name')}
                            label="Фамилия"
                            name="last_name"
                            variant="standard"
                        />
                        <CustomInput
                            {...register('username')}
                            variant="standard"
                            label="Имя пользователя"
                            name="username"
                            type="text"
                        />
                        <NumberInput {...register('phone_number')} />
                        <CustomInput
                            {...register('email')}
                            variant="standard"
                            label="Почта"
                            name="email"
                            type="text"
                        />

                        {!deepEqual(watchesValue, userValue) && (
                            <>
                                <Button type="submit">Изменить</Button>
                                <Button
                                    type="button"
                                    variant="outlined"
                                    onClick={() => reset(defaultValues)}>
                                    Отмена
                                </Button>
                            </>
                        )}

                        <p className={s['registration-date']}>
                            <span>Дата регистрации:</span>{' '}
                            <b>{dateParse(user?.date_joined)}</b>
                        </p>
                    </div>
                </div>
            </form>
        </Papper>
    )
}
