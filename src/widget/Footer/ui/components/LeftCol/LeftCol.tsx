import { FC } from 'react'
import { Title } from '@/shared/ui/Title'
import CallIcon from 'public/static/images/call-us.svg'
import clsx from 'clsx'
import s from './LeftCol.module.scss'

interface ILeftColProps {
    className?: string
}

export const LeftCol: FC<ILeftColProps> = (props) => {
    const { className } = props

    return (
        <div className={clsx(s['left-col'], className)}>
            <Title size="S">Contact information</Title>
            <div className={s['number-block']}>
                <CallIcon className={s['call-icon']} />
                <p>You have any Questions ? Call us 24x7</p>

                <div className={s['number-list']}>
                    <a>(+01) 1234 567 890</a>,<a> (+01) 1234 567 890</a>
                </div>
            </div>

            <div className={s.addres}>
                1487 Rocky Horse Carrefour 1487 <br />
                Rocky Horse Arlington, TX 16819 United
            </div>

            <a
                className={s.mail}
                href="demo@example.com">
                demo@example.com
            </a>
        </div>
    )
}
