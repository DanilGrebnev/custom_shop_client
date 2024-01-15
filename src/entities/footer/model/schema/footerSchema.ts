export interface IFooter {
    id: 0
    text: string
    contact: string
    address: string
    email: string
}

export interface IFooterSchema {
    footer: IFooter
    loading: boolean
    error: any
}
