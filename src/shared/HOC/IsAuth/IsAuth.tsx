'use client'

import { ReactNode, useLayoutEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { $axios } from '@/app/API'

interface IIsAuthProps {
    children: ReactNode
}

export const IsAuth = ({ children }: IIsAuthProps) => {
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    const fetchIsAuth = async () => {
        try {
            await $axios.get('user/me', { withCredentials: true })
            setLoading(false)
        } catch (err) {
            router.push('/login')
        }
    }

    useLayoutEffect(() => {
        fetchIsAuth()
        return () => {
            setLoading(false)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) {
        return <h1>Проверка аутентификации</h1>
    }

    return children
}

export default IsAuth
