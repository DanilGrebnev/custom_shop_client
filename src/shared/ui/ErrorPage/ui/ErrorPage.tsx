'use client'

import { ErrorDetails } from '../../ErrorDetails/ui/ErrorDetails'
import { type FC } from 'react'

import clsx from 'clsx'
import s from './ErrorPage.module.scss'

interface IErrorPageProps {
    className?: string
    error?: any
    reset?: () => void
}

export const ErrorPage: FC<IErrorPageProps> = (props) => {
    const { className, error, reset } = props

    return (
        <div className={clsx('ErrorPage', s.ErrorPage, className)}>
            <h1>УПС!</h1>
            <h3>Возникла непредвиденная ошибка.</h3>

            <ErrorDetails>{error}</ErrorDetails>

            <button onClick={() => document.location.reload()}>
                Обновить страницу
            </button>
        </div>
    )
}

ErrorPage.displayName = 'ErrorPage'
