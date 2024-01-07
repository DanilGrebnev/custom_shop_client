export const sleep = async (ms: number = 2000): Promise<any> => {
    return await new Promise((resolve) => {
        setTimeout(resolve, ms, '')
    })
}
