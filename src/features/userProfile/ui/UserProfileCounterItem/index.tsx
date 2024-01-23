import s from './s.module.scss'

interface IUserProfileCounterItemProps {
    icon: any
    count: number
}

export const UserProfileCounterItem = (props: IUserProfileCounterItemProps) => {
    const { count = 0, icon } = props
    return (
        <div className={s.counter}>
            {icon}
            <span>{count}</span>
        </div>
    )
}
