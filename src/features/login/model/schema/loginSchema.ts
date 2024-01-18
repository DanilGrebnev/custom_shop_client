export interface ILoginFields {
    username: string
    password: string
}

export interface ILoginSchema {
    fields: ILoginFields
    loading: boolean
    succes: boolean
}
