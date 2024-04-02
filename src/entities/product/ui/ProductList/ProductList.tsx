import { IProduct, IProductData } from '@/app/types/product'

import { IContextPreviewProvider } from '../../model/provider/PreviewProvider'

import { ShopProductCardWidget } from '@/widget/ShopProductCardWidget'

interface Props {
    products?: IProduct[]
    preview: IContextPreviewProvider['preview']
}

export const ProductList = (props: Props) => {
    const { products, preview } = props

    return (
        <>
            {products?.map(
                ({ id, price, images, name, description, quantity }) => {
                    return (
                        <ShopProductCardWidget
                            key={id}
                            type={preview}
                            productId={id}
                            rating={3}
                            images={images}
                            name={name}
                            price={price}
                            description={description}
                            quantity={quantity}
                        />
                    )
                }
            )}
        </>
    )
}
