import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import UserProfileIcon from '@/shared/assets/profile_icon_160.webp'
import Link from 'next/link'
import Image from 'next/image'

import { useGetProfileQuery } from '@/features/userProfile'
import s from './Profile.module.scss'

export const Profile = () => {
    const { data } = useGetProfileQuery()

    return (
        <Link
            className={s.wrapper}
            href={NavigationRoutes.profileMe}>
            <Image
                width={40}
                height={40}
                alt="profile"
                placeholder="blur"
                src={UserProfileIcon}
            />
            <p>{data && `${data.last_name} ${data.first_name}`}</p>
        </Link>
    )
}

Profile.displayName = 'Profile'
