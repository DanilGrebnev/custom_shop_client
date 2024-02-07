import { useRef, useState } from 'react'
import { ModalBackgroundFilter } from '@/shared/ui/Modal'
import { DropDown } from './components/DropDown'

import s from './s.module.scss'
import Link from 'next/link'

interface IUserProfileCounterItemProps {
    icon: any
    count?: number
    href?: string
    label?: string
    data?: any
}

export const UserProfileCounterItem = (props: IUserProfileCounterItemProps) => {
    const { count = 0, href, icon, label, data } = props
    const [open, setIsOpen] = useState<boolean>(false)
    const refId = useRef<NodeJS.Timeout>()

    const onMouseEnter = () => {
        const timeoutId = setTimeout(setIsOpen, 300, true)
        refId.current = timeoutId
    }

    const onMouseLeave = () => {
        if (open) return
        clearTimeout(refId.current)
    }

    return (
        <div className={s['counter-container']}>
            <Link
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={s['counter-wrapper']}
                href={href || ''}>
                <div className={s.counter}>
                    {icon}
                    <span>{count}</span>
                </div>
                <p className={s.label}>{label}</p>
            </Link>
            {data && open && (
                <DropDown
                    amount={5}
                    openModal={() => setIsOpen(false)}
                />
            )}
            {data && open && (
                <ModalBackgroundFilter onClick={() => setIsOpen(false)} />
            )}
        </div>
    )
}

export default UserProfileCounterItem
