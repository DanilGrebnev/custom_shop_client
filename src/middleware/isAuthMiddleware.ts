import { NextRequest } from 'next/server'

export const isAuthMiddleware = async (request: NextRequest) => {
 
    const res = await fetch('http://localhost:8000/api/user/me', {
        method: 'GET',
        headers: {
            Cookie: request.cookies.toString(),
        },
    })

    return res.status <= 201
}
