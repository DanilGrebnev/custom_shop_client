import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import type { NextFetchEvent, NextRequest } from 'next/server'

export const middleware = async (request: NextRequest) => {
    const res = await fetch('http://localhost:8000/api/user/me', {
        method: 'GET',
        headers: {
            Cookie: cookies().toString(),
        },
    })

    if (res.status > 201) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/profile/me'],
}
