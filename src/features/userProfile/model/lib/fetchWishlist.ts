import { $axios } from '@/app/API'
import { IProduct } from '@/app/types/product'
import { IUserProfileFavorites } from '../schema/userProfileSchema'

export const fetchWishList = async (wishList?: IUserProfileFavorites[]) => {
    const promises = wishList?.map((item) =>
        $axios.get<IProduct>('product/' + item.id)
    )

    if (!promises) return
    return await Promise.all(promises).then((resolves) =>
        resolves.map((response) => response.data)
    )
}
