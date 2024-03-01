import { Dispatch, useCallback, useEffect, useState } from 'react'

/**
 * Хук дублирования значений в локальное хранилище
 */

export interface IUseStorageArguments {
    key: string
    defaultValue?: any
    storageObject?: Storage
}

type ReturnUseStorageType = [any, Dispatch<any>, () => void]

type TUseStorage = (props: IUseStorageArguments) => ReturnUseStorageType

export const useStorage: TUseStorage = (props) => {
    const { key, defaultValue, storageObject = localStorage } = props

    const [value, setValue] = useState(() => {
        const localValue = storageObject.getItem(key)
        if (localValue !== null) return JSON.parse(localValue)

        if (typeof defaultValue === 'function') {
            return defaultValue()
        } else {
            return defaultValue
        }
    })

    useEffect(() => {
        if (value === undefined) return storageObject.removeItem(key)
        storageObject.setItem(key, JSON.stringify(value))
    }, [value, key, storageObject])

    const remove = useCallback(() => {
        setValue(undefined)
    }, [])

    return [value, setValue, remove]
}
