export interface IUserProfileFavorites {
    id: number
    name: string
    price: number
    rating: number
    quantity: number
    image: string
}

export interface ILoginFields {
    username: string
    password: string
    remember_me: boolean
}

export interface IUserProfileFields {
    readonly id: number
    readonly first_name: string
    readonly last_name: string
    readonly email: string
    readonly phone_number: string
    readonly username: string
    readonly date_joined: string
    readonly favorites: IUserProfileFavorites[] | []
}

export type TUpdateUserProfileBody = Omit<
    IUserProfileFields,
    'id' | 'favorites'
>

export interface IUserProfileSchema {
    fields: IUserProfileFields
    prevFieldsValue: string
    isAuth: boolean
    error: any
}
