export interface IUserProfileFavorites {
    id: number
    name: string
    price: number
}

export interface IUserProfileSchema {
    id: number
    first_name: string
    last_name: string
    email: string
    phone_number: string
    username: string
    date_joined: string
    favorites: IUserProfileFavorites[]
}
