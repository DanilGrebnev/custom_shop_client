import { IProduct } from '@/app/types/Product'

export const addUrlToProductsImages = (products: IProduct[]) => {
    return products.map((product) => {
        if (!product?.images?.length) {
            return product
        }

        return {
            ...product,
            images: addUrlToImages(product.images),
        }
    })
}

function addUrlToImages(images: IProduct['images']) {
    return images.map((item) => ({
        image: process.env.NEXT_PUBLIC_URL_BACKEND! + item.image,
    }))
}
