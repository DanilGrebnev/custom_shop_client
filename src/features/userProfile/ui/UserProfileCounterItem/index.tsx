import s from './s.module.scss'
import Link from 'next/link'

interface IUserProfileCounterItemProps {
    icon: any
    count?: number
    href: string
}

export const UserProfileCounterItem = (props: IUserProfileCounterItemProps) => {
    const { count = 0, href, icon } = props

    return (
        <Link href={href}>
            <div className={s.counter}>
                {icon}
                <span>{count}</span>
            </div>
        </Link>
    )
}
