'use client'

import { useEffect } from 'react'
import { ErrorPage } from '../ErrorPage'
import { ReserveErrorComponent } from '../ReserveErrorComponent'

export const ServerErrorBoundary = ({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) => {
    useEffect(() => {
        console.log('Ошибка', error)
    }, [error])

    return (
        <ErrorPage
            error={error}
            reset={reset}
        />
    )
}
