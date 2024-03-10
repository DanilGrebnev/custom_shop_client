'use client'

import {
    useAddProductInBasketByIdMutation,
    useDeleteProductFromBasketByIdMutation,
} from '@/features/basket'

import { useAddGlobalEventListener } from '@/shared/hooks/useAddGlobalEventListener'
import { Button } from '@/shared/ui/Button'
import { Papper } from '@/shared/ui/Papper'

import s from './DeleteModal.module.scss'

import clsx from 'clsx'

interface TProps {
    className?: string
    onClose?: () => void
    onApply?: () => void
    cartItemId: number
}

export const DeleteModal = (props: TProps) => {
    const { className, cartItemId, onClose, ...other } = props
    const [deleteProduct] = useDeleteProductFromBasketByIdMutation()

    useAddGlobalEventListener({
        parentSelector: `.${s.modal}`,
        onClose,
    })

    const onApply = (e: any) => {
        deleteProduct(cartItemId)
        onClose?.()
    }

    const onCancel = () => {
        onClose?.()
    }

    return (
        <Papper
            {...other}
            onClick={(e) => {
                e.preventDefault()
            }}
            className={clsx(s.modal, className)}>
            <h2 className={s.title}>Удалить товар?</h2>
            <div className={s['btn-group']}>
                <Button onClick={onApply}>Удалить</Button>
                <Button onClick={onCancel}>Отмена</Button>
            </div>
        </Papper>
    )
}
