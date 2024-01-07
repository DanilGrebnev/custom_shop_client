type TDebounce = <T extends any[], R extends any>(
    callback: (...args: T) => R,
    delay: number
) => (...args: T) => void

export const debounce: TDebounce = (callback, delay) => {
    let timeoutId: ReturnType<typeof setTimeout>

    return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(callback, delay, ...args)
    }
}
