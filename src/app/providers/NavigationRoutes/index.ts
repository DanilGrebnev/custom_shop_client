export class NavigationRoutes {
    static main() {
        return '/'
    }

    static product(id: string) {
        return '/product/' + id
    }

    static shop() {
        return '/shop'
    }
    static login() {
        return '/login'
    }

    static registration() {
        return '/registration'
    }
    static profileMe() {
        return '/profile/me'
    }
    static profileOrders() {
        return '/profile/orders'
    }
    static basket() {
        return '/basket'
    }
    static wishlist() {
        return '/profile/wishlist'
    }
}
