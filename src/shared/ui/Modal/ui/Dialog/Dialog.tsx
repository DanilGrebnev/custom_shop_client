'use client'

import {
    ComponentPropsWithoutRef,
    useCallback,
    useEffect,
    useLayoutEffect,
} from 'react'
import { createPortal } from 'react-dom'

import { Papper } from '@/shared/ui/Papper'

import s from './Dialog.module.scss'
import './animate.scss'

import clsx from 'clsx'

interface IDialog
    extends Pick<ComponentPropsWithoutRef<'div'>, 'children' | 'className'> {
    onClose?: () => void
    side?: 'left' | 'top' | 'right' | 'bottom'
    closeTimer?: number
    isopen?: boolean
}

export const Dialog = (props: IDialog) => {
    const {
        className,
        onClose,
        closeTimer,
        side = 'bottom',
        children,
        isopen,
        ...otherProps
    } = props

    const closeModal = useCallback(() => {
        onClose?.()
    }, [onClose])

    const keydown = (e: KeyboardEvent) => {
        if (e.code === 'Escape') {
            closeModal()
        }
    }

    const closeIfClickWithoutModal = (e: globalThis.MouseEvent) => {
        const element = e.target as HTMLElement
        if (!element.classList.contains(s.modal)) {
            closeModal()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keydown)
        document.addEventListener('click', closeIfClickWithoutModal)

        return () => {
            document.removeEventListener('keydown', keydown)
            document.removeEventListener('click', closeIfClickWithoutModal)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useLayoutEffect(() => {
        if (!closeTimer) return
        const timeoutId = setTimeout(closeModal, closeTimer)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [closeModal, closeTimer])

    return (
        isopen &&
        createPortal(
            <Papper
                className={clsx(s.dialog, s[side], className)}
                {...otherProps}>
                <div onClick={(e) => e.stopPropagation()}>{children}</div>
            </Papper>,
            document.getElementById('modal-root')!
        )
    )
}
