import dynamic from 'next/dynamic'

export const ShopByFeaturedCategoriesDynamic = dynamic(
    () =>
        import(
            /* webpackChunkName: "ShopByFeaturedCategoriesDynamic" */ './ShopByFeaturedCategories'
        ).then((mod) => mod.ShopByFeaturedCategories),
    {
        ssr: false,
        loading: () => <h1>Загрузка категорий</h1>,
    }
)
