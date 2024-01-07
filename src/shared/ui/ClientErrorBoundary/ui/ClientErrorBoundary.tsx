'use client'
import { ErrorPage } from '../../ErrorPage'
import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
    children?: ReactNode
    className?: string
}

interface State {
    error: Error | null
}

export class ClientErrorBoundary extends Component<Props, State> {
    public state: State = {
        error: null,
    }

    public static getDerivedStateFromError(error: Error): State {
        return { error }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error(error)
    }

    public render() {
        if (this.state.error) {
            const { message, name, stack } = this.state.error
            return (
                <ErrorPage
                    className={this.props.className}
                    error={
                        <div>
                            <p>Error name: {name}</p>
                            <br />
                            <p>Error message: {message}</p>
                        </div>
                    }
                />
            )
        }

        return this.props.children
    }
}
