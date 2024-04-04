export const debounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(
    callback: T,
    delay: number
) => {
    let timeoutId: ReturnType<typeof setTimeout>

    return (...args: Parameters<T>): void => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(callback, delay, ...args)
    }
}
