'use client'

import { useCallback, useRef } from 'react'

import { usePathname } from 'next/navigation'

import { useGetCartQuery } from '@/features/basket'
import {
    UserProfileBasketCounter,
    UserProfileSelectors,
    userProfileActions,
} from '@/features/userProfile'
import { BasketDropDown } from '@/features/userProfile'

import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { useActionCreators } from '@/shared/hooks/useActionCreators'
import { ModalBackgroundFilter } from '@/shared/ui/Modal'

import { BasketList } from '../BasketList/BasketList'
import s from './UserProfileBasket.module.scss'

export const UserProfileBasket = () => {
    const { data } = useGetCartQuery()

    const pathName = usePathname()

    const refId = useRef<NodeJS.Timeout>()

    const isOpen = useAppSelector(UserProfileSelectors.getIsOpenBasketModal)

    const actions = useActionCreators(userProfileActions)

    const toggleModal = useCallback(
        (open: boolean) => {
            actions.setIsOpenBasketModal(open)
        },
        [actions]
    )

    const onMouseEnter = useCallback(() => {
        if (pathName === '/basket') return
        const timeoutId = setTimeout(toggleModal, 800, true)

        refId.current = timeoutId
    }, [toggleModal, pathName])

    const onMouseLeave = useCallback(() => {
        if (isOpen) return
        clearTimeout(refId.current)
    }, [isOpen])

    const onClick = () => {
        clearTimeout(refId.current)
    }

    return (
        <div className={s.wrapper}>
            <UserProfileBasketCounter
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
                count={data?.cartItem.length}
            />

            {isOpen && (
                <BasketDropDown
                    count={data?.cartItem.length}
                    list={<BasketList />}
                    onMouseLeave={toggleModal.bind(null, false)}
                />
            )}

            {isOpen && (
                <ModalBackgroundFilter
                    onClick={toggleModal.bind(null, false)}
                />
            )}
        </div>
    )
}
