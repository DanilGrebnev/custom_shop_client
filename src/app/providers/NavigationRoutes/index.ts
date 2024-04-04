export class NavigationRoutes {
    static main = '/'
    static shop = '/shop'
    static login = '/login'
    static basket = '/basket'
    static profileMe = '/profile/me'
    static wishlist = '/profile/wishlist'
    static registration = '/registration'
    static profileOrders = '/profile/orders'
    static productSearch = '/product-search'

    static category(categoryId: string) {
        return `/category/${categoryId}`
    }

    static product(id: number) {
        return '/product/' + id
    }
}
