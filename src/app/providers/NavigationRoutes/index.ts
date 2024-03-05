export class NavigationRoutes {
    static main = '/'
    static shop = '/shop'
    static login = '/login'
    static registration = '/registration'
    static profileMe = '/profile/me'
    static profileOrders = '/profile/orders'
    static basket = '/basket'
    static wishlist = '/profile/wishlist'
    
    static product(id: number) {
        return '/product/' + id
    }
}
