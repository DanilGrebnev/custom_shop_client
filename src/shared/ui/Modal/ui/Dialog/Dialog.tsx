'use client'

import {
    ComponentPropsWithoutRef,
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'

import { Papper } from '@/shared/ui/Papper'

import s from './Dialog.module.scss'
import './animate.scss'

import clsx from 'clsx'

interface IDialog
    extends Pick<ComponentPropsWithoutRef<'div'>, 'children' | 'className'> {
    onClose?: () => void
    side?: 'left' | 'top' | 'right' | 'bottom'
    closeTimer?: number
    isOpen?: boolean
}

export const Dialog = (props: IDialog) => {
    const {
        className,
        onClose,
        closeTimer,
        side = 'bottom',
        children,
        ...otherProps
    } = props

    const nodeRef = useRef(null)

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
        // setIsOpen(true)

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

    return createPortal(
        <CSSTransition
            timeout={300}
            in={props.isOpen}
            unmountOnExit={true}
            classNames={'dialog'}>
            <Papper
                className={clsx(s.dialog, s[side], className)}
                {...otherProps}>
                <div onClick={(e) => e.stopPropagation()}>{children}</div>
            </Papper>
        </CSSTransition>,
        document.getElementById('modal-root')!
    )
}
