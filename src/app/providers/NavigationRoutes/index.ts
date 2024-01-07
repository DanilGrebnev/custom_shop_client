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
}
