import Link from 'next/link'

import { ReactNode, ComponentPropsWithoutRef } from 'react'

interface DynamicLink extends ComponentPropsWithoutRef<'a'> {
    children: ReactNode
    href: string | undefined
}

export const DynamicLink = ({ children, href }: DynamicLink) => {
    if (href) {
        return <Link href={href}>{children}</Link>
    }

    return <>{children}</>
}
