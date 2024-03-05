'use client'

import {
    ComponentPropsWithoutRef,
    MouseEvent,
    useCallback,
    useEffect,
} from 'react'

import { useAddGlobalEventListener } from '@/shared/hooks/useAddGlobalEventListener'
import { Button } from '@/shared/ui/Button'
import { Papper } from '@/shared/ui/Papper'

import s from './DeleteModal.module.scss'

import clsx from 'clsx'

interface TProps {
    className?: string
    onClose?: () => void
    onApply?: () => void
}

export const DeleteModal = (props: TProps) => {
    const { className, onClose, ...other } = props

    useAddGlobalEventListener({
        parentSelector: '.' + s.modal,
        onClose,
    })

    const onApply = (e: any) => {
        console.log(e.target.classList)
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
