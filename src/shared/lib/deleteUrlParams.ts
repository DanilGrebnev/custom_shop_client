type Args = {
    usp: string
    filter: string
}
/**
 * Удаляет из urlSearchParams ключ и значение, если ключ повторяется более 1 раза
 */
export const deleteUrlParams = ({ filter, usp }: Args) => {
    const updatedUsp = new URLSearchParams(usp.toString().replace(filter, ''))
    return updatedUsp.toString()
}
