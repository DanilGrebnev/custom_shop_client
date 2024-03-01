import { useEffect, useRef } from 'react'

export const useDebounce = (
    callback: (...args: any[]) => void,
    wait: number
) => {
    // track args & timeout handle between calls
    const argsRef = useRef<any[]>()
    const timeout = useRef<ReturnType<typeof setTimeout>>()

    const clearTimer = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }
    }

    // make sure our timeout gets cleared if
    // our consuming component gets unmounted
    useEffect(() => {
        return () => clearTimer()
    }, [])

    return function debouncedCallback(...args: any[]) {
        // capture latest args
        argsRef.current = args

        // clear debounce timer
        clearTimer()

        // start waiting again
        timeout.current = setTimeout(() => {
            if (argsRef.current) {
                callback(...argsRef.current)
            }
        }, wait)
    }
}
