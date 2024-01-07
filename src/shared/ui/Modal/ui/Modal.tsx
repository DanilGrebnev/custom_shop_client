import { CSSProperties, FC, MouseEvent, ReactNode } from 'react'
import { createPortal } from 'react-dom'

import clsx from 'clsx'
import s from './Modal.module.scss'

interface IModalProps {
    className?: string
    style?: CSSProperties
    children: ReactNode
    onClose?: (e: any) => void
}

export const Modal: FC<IModalProps> = (props) => {
    const { onClose, children, className, style } = props
    const selector = '#App'

    const closeModal = (e: MouseEvent<HTMLDialogElement, MouseEvent>) => {
        onClose ? onClose(e) : function () {}
    }

    return createPortal(
        <div
            style={style}
            onClick={(e: any) => {
                closeModal(e)
            }}
            className={clsx(s.Modal, className)}>
            {children}
        </div>,
        document.querySelector(selector) as HTMLElement
    )
}

Modal.displayName = 'Modal'
