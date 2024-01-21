'use client'
// import { UserProfileServices } from '@/features/userProfile'
import { useEffect } from 'react'
import { useAppDispatch } from '@/shared/hooks'
import { CustomInput } from '@/shared/ui/CustomInput'
import Image from 'next/image'

import s from './ProfilePage.module.scss'
import clsx from 'clsx'

export const ProfilePage = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        // dispatch(UserProfileServices.fetchUserProfile())
    }, [dispatch])

    // "first_name": "string",
    // "last_name": "string",
    // "email": "user@example.com",
    // "phone_number": "string",
    // "username": "string",
    // "date_joined": "2024-01-21T16:50:35.284Z",

    return (
        <section
            id="Profile"
            className={s['profile-page']}>
            <div className={clsx(s.container, 'contain')}>
                <div className={s['profile-card']}>
                    <Image
                        width={160}
                        height={160}
                        alt="Изображение профиля"
                        src="/static/images/profile_icon_160.webp"
                    />
                    <div className={s['setting-wrapper']}>
                        <CustomInput
                            label="Имя"
                            defaultValue="Данил"
                        />
                        <CustomInput
                            label="Фамилия"
                            defaultValue="Гребнев"
                        />
                        <CustomInput
                            label="Телефон"
                            type="tel"
                            defaultValue="8-937-697-69-01"
                        />
                        <CustomInput
                            label="Никнейм"
                            type="text"
                            defaultValue="Danil_Grebnev"
                        />
                        <CustomInput
                            label="Дата рождения"
                            type="date"
                            defaultValue="1998-08-12"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
