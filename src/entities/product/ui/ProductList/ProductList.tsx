import { IProductData } from '@/app/types/product'

import { IContextPreviewProvider } from '../../model/provider/PreviewProvider'

import { ShopProductCardWidget } from '@/widget/ShopProductCardWidget'

interface Props {
    productData?: IProductData
    preview: IContextPreviewProvider['preview']
}

export const ProductList = (props: Props) => {
    const { productData, preview } = props

    return (
        <>
            {productData?.products?.map(
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
