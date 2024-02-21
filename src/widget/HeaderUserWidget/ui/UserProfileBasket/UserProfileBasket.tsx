'use client'

import {
    UserProfileBasketCounter,
    UserProfileSelectors,
    setIsOpenBasketModal,
} from '@/features/userProfile'
import { useCallback, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { useGetCartQuery } from '@/features/basket'
import { ModalBackgroundFilter } from '@/shared/ui/Modal'
import { BasketDropDown } from '@/features/userProfile'
import { BasketList } from '../BasketList/BasketList'

import s from './UserProfileBasket.module.scss'
import { usePathname } from 'next/navigation'

export const UserProfileBasket = () => {
    const { data } = useGetCartQuery()
    const pathName = usePathname()
    const refId = useRef<NodeJS.Timeout>()
    const isOpen = useAppSelector(UserProfileSelectors.getIsOpenBasketModal)
    const dispatch = useAppDispatch()

    const toggleModal = useCallback(
        (open: boolean) => {
            dispatch(setIsOpenBasketModal(open))
        },
        [dispatch]
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
                count={data?.length}
            />
            {isOpen && (
                <BasketDropDown
                    count={data?.length}
                    list={<BasketList />}
                    onMouseLeave={() => toggleModal(false)}
                />
            )}
            {isOpen && (
                <ModalBackgroundFilter onClick={() => toggleModal(false)} />
            )}
        </div>
    )
}
