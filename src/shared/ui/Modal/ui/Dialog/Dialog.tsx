'use client'

import { Papper } from '@/shared/ui/Papper'
import { ComponentPropsWithoutRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

import clsx from 'clsx'
import s from './Dialog.module.scss'

interface IDialog
    extends Pick<ComponentPropsWithoutRef<'div'>, 'children' | 'className'> {
    onClose?: () => void
    side?: 'left' | 'top' | 'right' | 'bottom'
    timer?: number
}

export const Dialog = (props: IDialog) => {
    const {
        className,
        onClose,
        timer,
        side = 'bottom',
        children,
        ...otherProps
    } = props

    const keydown = useCallback(
        (e: KeyboardEvent) => {
            if (e.code === 'Escape') {
                onClose?.()
            }
        },
        [onClose]
    )

    useEffect(() => {
        document.addEventListener('keydown', keydown)

        return () => {
            document.removeEventListener('keydown', keydown)
        }
    }, [keydown])

    useEffect(() => {
        if (!timer || !onClose) return
        const timeoutId = setTimeout(onClose, timer, false)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [onClose, timer])

    return createPortal(
        <Papper
            onClick={onClose}
            className={clsx(s.dialog, s[side], className)}
            {...otherProps}>
            <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </Papper>,
        document.getElementById('modal-root')!
    )
}
