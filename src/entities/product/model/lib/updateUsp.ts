export const updateUsp = (key: string, value: string, usp: string) => {
    const uspStr = new URLSearchParams(usp)
    if (value) {
        uspStr.set(key, value)
    } else {
        uspStr.delete(key)
    }

    return uspStr.toString()
}
