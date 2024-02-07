'use client'

import {
    DetailedHTMLProps,
    FC,
    HTMLAttributes,
    MouseEvent,
    ReactNode,
    useEffect,
} from 'react'
import { createPortal } from 'react-dom'

import s from './ModalBackgroundFilter.module.scss'
import clsx from 'clsx'

interface IModalBackgroundFilterProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode
    className?: string
    scrollBlock?: boolean
    closeModal?: (e: MouseEvent<HTMLDivElement>) => void
}

export const ModalBackgroundFilter: FC<IModalBackgroundFilterProps> = (
    props
) => {
    const { children, className, scrollBlock, closeModal, ...other } = props

    const onClose = (e: MouseEvent<HTMLDivElement>) => {
        closeModal?.(e)
    }

    useEffect(() => {
        if (scrollBlock) {
            document.body.classList.add('hidden')

            return () => {
                document.body.classList.remove('hidden')
            }
        }
    }, [scrollBlock])

    return createPortal(
        <div
            className={clsx(s.ModalBackgroundFilter, className)}
            id="Modal background"
            onClick={onClose}
            {...other}>
            {children}
        </div>,
        document.body
    )
}
