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

export const UserProfileBasket = () => {
    const { data } = useGetCartQuery()
    const refId = useRef<NodeJS.Timeout>()
    const dispatch = useAppDispatch()
    const isOpen = useAppSelector(UserProfileSelectors.getIsOpenBasketModal)

    const toggleModal = useCallback(
        (open: boolean) => {
            dispatch(setIsOpenBasketModal(open))
        },
        [dispatch]
    )

    const onMouseEnter = useCallback(() => {
        const timeoutId = setTimeout(toggleModal, 500, true)
        refId.current = timeoutId
    }, [toggleModal])

    const onMouseLeave = useCallback(() => {
        if (isOpen) return
        clearTimeout(refId.current)
    }, [isOpen])

    return (
        <div className={s.wrapper}>
            <UserProfileBasketCounter
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
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
