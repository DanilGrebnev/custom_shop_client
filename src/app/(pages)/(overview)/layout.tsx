import { Header } from '@/widget/Header'
import { Footer } from '@/widget/Footer'
import { ILayout } from '@/app/types/layout'

const ShopLayout = ({ children }: ILayout) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default ShopLayout
