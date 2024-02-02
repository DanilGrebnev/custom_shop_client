export interface IUserProfileFavorites {
    id: number
    name: string
    price: number
}

export interface IUserProfileFields {
    id: number
    first_name: string
    last_name: string
    email: string
    phone_number: string
    username: string
    date_joined: string
    favorites: IUserProfileFavorites[] | []
}

export interface IUserProfileSchema {
    fields: IUserProfileFields
    prevFieldsValue: string
    loading: boolean
    isAuthLoading: boolean
    wishListLoading: boolean
    isAuth: boolean
    error: any
}
