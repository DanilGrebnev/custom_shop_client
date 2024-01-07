import { Component } from 'react'
import { ErrorDetails } from '@/shared/ui/ErrorDetails'

class ErrorBoundary extends Component<any, { hasError: boolean; error: any }> {
    constructor(props: any) {
        super(props)

        // Define a state variable to track whether is an error or not
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI

        return { hasError: true, error }
    }

    componentDidCatch(error: any, errorInfo: any) {
        // You can use your own error logging service here
        this.setState({ error })
        console.log({ error, errorInfo })
    }
    render() {
        // Check if the error is thrown
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div>
                    <h1>Oops, there is an error!</h1>
                    <button
                        type="button"
                        onClick={() => this.setState({ hasError: false })}>
                        Try again?
                    </button>
                    <ErrorDetails>
                        {JSON.stringify(this.state.error)}
                    </ErrorDetails>
                </div>
            )
        }

        // Return children components in case of no error

        return this.props.children
    }
}

export default ErrorBoundary
