import { type NextRequest, NextResponse } from 'next/server'

import { isAuthMiddleware } from './middleware/isAuthMiddleware'

export const middleware = async (request: NextRequest) => {
    if (request.nextUrl.pathname.includes('basket')) {
        console.log('includes basket')
    }

    if (request.nextUrl.pathname.includes('profile')) {
        console.log('includes profile')
        const isAuth = await isAuthMiddleware(request)
        if (!isAuth) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/profile/:path*', '/basket/:path*'],
}
