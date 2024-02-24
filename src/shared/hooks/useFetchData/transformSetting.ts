import { TConfig } from './types'
type IFetch = Parameters<typeof fetch>[1]

export const transformSetting = (config?: TConfig): IFetch => {
    const data = config?.body

    if (!data) return config as unknown as IFetch

    if (data) {
        const newConfig: IFetch = {
            ...config,
            body: JSON.stringify(data),
        }

        return newConfig
    }
}
