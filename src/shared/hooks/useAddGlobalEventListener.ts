'use client'

import { MouseEvent, useEffect } from 'react'

interface IProps {
    parentSelector: string
    onClose?: () => void
}

export const useAddGlobalEventListener = (props: IProps) => {
    const { onClose, parentSelector } = props

    const closeIfMissClick = (e: any) => {
        if (!e.target.closest(parentSelector)) {
            onClose?.()
        }
    }

    useEffect(() => {
        document.addEventListener('click', closeIfMissClick)

        return () => document.removeEventListener('click', closeIfMissClick)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}
