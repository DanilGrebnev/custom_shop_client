export const copyObject = <TObject extends Record<keyof TObject, any>>(
    object: TObject,
    excludeKeys?: Array<keyof TObject>
): string => {
    const array = Object.entries<any>(object) as [keyof TObject, any][]

    const copy = array.reduce<Record<keyof TObject, any>>((acc, [k, v]) => {
        if (!excludeKeys || !excludeKeys?.length) {
            acc[k] = v
            return acc
        } else {
            if (!excludeKeys.includes(k)) {
                acc[k] = v
            }
            return acc
        }
    }, {} as TObject)

    return JSON.stringify(copy)
}
