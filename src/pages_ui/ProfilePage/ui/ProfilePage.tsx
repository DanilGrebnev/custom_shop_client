'use client'

import {
    UserProfileSelectors,
    UserProfileServices,
    useFetchProfile,
} from '@/features/userProfile'
import { ChangeEvent, useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { CustomInput } from '@/shared/ui/CustomInput'
import { Papper } from '@/shared/ui/Papper'
import { userProfileActions } from '@/features/userProfile'
import { dateParse } from '@/shared/lib/dateParse'
import { NumberInput } from '@/shared/ui/NumberInput'
import ProfileImage from '@/shared/assets/profile_icon_160.webp'
import Image from 'next/image'

import s from './ProfilePage.module.scss'
import clsx from 'clsx'

export const ProfilePage = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(UserProfileSelectors.getData)
    const isAuthLoading = useAppSelector(UserProfileSelectors.getIsAuthLoading)
    const { fetchProfile, profile, isLoading } = useFetchProfile()

    useEffect(() => {
        if (isAuthLoading) return
        fetchProfile()
    }, [isAuthLoading, fetchProfile])

    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const name = e.target.name as any
            const value = e.target.value
            dispatch(userProfileActions.setUserProfileValue({ name, value }))
        },
        [dispatch]
    )

    const onFocus = () => {
        dispatch(userProfileActions.setFieldsCopy())
    }
    const onBlur = () => {
        console.clear()
    }

    return (
        <Papper
            id="Profile"
            className={s['profile-page']}>
            <div className={clsx(s.container, 'contain')}>
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
                            onFocus={onFocus}
                            onBlur={onBlur}
                            label="Имя"
                            variant="standard"
                            name="first_name"
                            defaultValue={user.first_name}
                            onChange={onChange}
                        />
                        <CustomInput
                            onChange={onChange}
                            label="Фамилия"
                            name="last_name"
                            variant="standard"
                            defaultValue={user.last_name}
                        />
                        <NumberInput defaultValue={'+7-937-697-69-01'} />
                        <CustomInput
                            variant="standard"
                            onChange={onChange}
                            label="Почта"
                            name="email"
                            type="text"
                            defaultValue={user.email}
                        />
                        <CustomInput
                            variant="standard"
                            onChange={onChange}
                            label="Никнейм"
                            name="nick"
                            type="text"
                            defaultValue={user.username}
                        />

                        <CustomInput
                            variant="standard"
                            onChange={onChange}
                            label="Дата рождения"
                            type="date"
                            defaultValue="1998-08-12"
                        />
                        <p className={s['registration-date']}>
                            <span>Дата регистрации:</span>{' '}
                            <b>{dateParse(user.date_joined)}</b>
                        </p>
                    </div>
                </div>
            </div>
        </Papper>
    )
}
