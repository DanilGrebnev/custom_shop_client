import { Metadata } from 'next'

import { ShopPage } from '@/pages_ui/ShopPage'

export const metadata: Metadata = {
    title: 'Магазин',
    description: 'Shop description',
}

interface Shop {
    params: {
        categoryId: string
    }
}

const Shop = ({ params }: Shop) => {
    return <ShopPage categoryId={params.categoryId} />
}

export default Shop
