type Args = {
    usp: string
    key: string
    value: string
}

export const addUrlParams = (args: Args) => {
    const { usp, key, value } = args
    let updatedUsp = new URLSearchParams(usp)
    updatedUsp.append(key, value)
    return updatedUsp.toString()
}
