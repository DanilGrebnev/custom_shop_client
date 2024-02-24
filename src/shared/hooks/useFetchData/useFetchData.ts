'use client'

import { useCallback, useState } from 'react'
import { IErrorResponse, IConfigResponse, IInitial } from './types'
import { TConfig } from './types'
import { transformSetting } from './transformSetting'

export const useFetchData = <Res = undefined, Err = undefined>(
    initialConfig?: IInitial
) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<IErrorResponse<Err> | null>(null)
    const [success, isSuccess] = useState<boolean>(false)
    const [data, setData] = useState<Res | null>(null)

    const fetchData = async (
        url: string,
        config?: TConfig
    ): Promise<IConfigResponse<Res>> => {
        setIsLoading(true)

        const URL = !initialConfig?.url ? url : initialConfig?.url + url
        const conf = transformSetting(config)

        try {
            const response = await fetch(URL, conf)

            if (response.status <= 201) {
                const data: Res = await response.json()

                const responseConfig: any = {
                    ok: response.ok,
                    status: response.status,
                    payload: data,
                }

                setData(data)
                setIsLoading(false)
                isSuccess(true)

                return Promise.resolve(responseConfig)
            } else {
                const data = await response.json()

                const error = {
                    payload: data,
                    status: response.status,
                    ok: response.ok,
                }

                setIsLoading(false)
                setIsError(error)
                isSuccess(false)

                return Promise.reject(error)
            }
        } catch (err) {
            const error = {
                payload: data,
                status: 400,
                ok: false,
            }
            return Promise.reject(error)
        } finally {
            setIsLoading(false)
        }
    }

    return { fetchData, data, isLoading, isError, success }
}
