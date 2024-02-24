type method = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS'
type IHeaders = 'Content-Type'

export type TData<T> = T extends any ? T : undefined

export type TConfig = Omit<RequestInit, 'body' | 'method'> & {
    body?: Record<string, any> | string
    method?: method
    headers?: Record<IHeaders, string>
}

export interface IInitial {
    url?: string
}

interface ResponseConfig<T> {
    payload: T extends undefined ? undefined : T
    ok: boolean
    status: number
}

export interface IConfigResponse<T> extends ResponseConfig<T> {}
export interface IErrorResponse<T> extends ResponseConfig<T> {}
