export interface ILoginFields {
    username: string
    password: string
    remember_me: boolean
}

export interface ILoginSchema {
    fields: ILoginFields
    loading: boolean
    isAuth: boolean
}

const o: keyof ILoginFields = 'password'
