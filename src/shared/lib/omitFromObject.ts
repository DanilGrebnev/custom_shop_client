/**
 * Удаляет из объекта поля по ключу в массиве
 * @param object - объект
 * @param excludeKeys - массив с ключами объекта
 * @returns объект без перечисленных ключей
 */
export const omitFromObject = <
    T extends { [k: string]: any },
    K extends keyof T
>(
    object: T,
    excludeKeys?: Array<keyof T>
): Omit<T, K> => {
    if (!excludeKeys?.length) return object

    const o = {} as T

    for (const key in object) {
        if (!excludeKeys.includes(key)) {
            o[key] = object[key]
        }
    }

    return o
}

const o = {
    name: 'Danil',
    age: 24,
}

omitFromObject(o, ['age']) // return value: {name:"Danil"}
