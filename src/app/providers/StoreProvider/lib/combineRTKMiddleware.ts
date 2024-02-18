export const combineRTKQueryMiddleware = <
    T extends {
        middleware: T['middleware']
    }
>(
    apis: Array<T>
) => {
    return apis.map((api) => api.middleware)
}
