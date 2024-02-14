import { getProduct } from './api'
import { ClientErrorBoundary } from '@/shared/ui/ClientErrorBoundary'
import { ProductDetailPage } from '@/pages_ui/ProductDetailPage'

interface IProductPage {
    params: { id: string }
}

export const generateMetadata = async ({ params }: IProductPage) => {
    try {
        const product = await getProduct(params.id)

        return {
            title: product.name,
            description: product.description,
        }
    } catch (err) {
        console.log(err)
        return {
            title: 'Ошибка загрузки товара',
            description: 'Ошибка загрузки товара',
        }
    }
}

const ProductPage = ({ params }: IProductPage) => (
    <ClientErrorBoundary>
        <ProductDetailPage productId={params.id} />
    </ClientErrorBoundary>
)

export default ProductPage
