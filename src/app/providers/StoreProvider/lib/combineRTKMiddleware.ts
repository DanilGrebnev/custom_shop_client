export const combineRTKQueryMiddleware = <
    T extends {
        middleware: T['middleware']
    }
>(
    rtkApi: T[]
) => {
    return rtkApi.map((api) => api.middleware)
}
