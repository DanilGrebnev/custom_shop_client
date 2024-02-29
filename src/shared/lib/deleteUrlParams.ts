type Args = {
    usp: string
    filter: string
}
/**
 * Удаляет из urlSearchParams ключ и значение,
 * @example
 * const str = `offset=05&limit=5&category=videokarty&category=akustika`
 * deleteUrlParams('category=videokarty', str) // offset=0&limit=5&category=akustika
 */
export const deleteUrlParams = ({ filter, usp }: Args) => {
    return new URLSearchParams(usp.toString().replace(filter, '')).toString()
}
