import { FC } from 'react'
import { Title } from '@/shared/ui/Title'
import { MenuItem } from '../MenuItem/MenuItem'
import { v4 as uuidv4 } from 'uuid'
import mock from '@/mock/mock'
import clsx from 'clsx'
import s from './RightCol.module.scss'

interface IRightColProps {
    className?: string
}

export const RightCol: FC<IRightColProps> = (props) => {
    const { className } = props

    return (
        <div className={s['right-col']}>
            <div className={s['right-col-item']}>
                <Title
                    className={s['right-col-item-title']}
                    size="S">
                    My account
                </Title>
                {mock.footerMenu.leftCol.map((text) => {
                    return <MenuItem key={uuidv4()}>{text}</MenuItem>
                })}
            </div>

            <div className={s['right-col-item']}>
                <Title
                    className={s['right-col-item-title']}
                    size="S">
                    Information
                </Title>
                {mock.footerMenu.centerCol.map((text) => {
                    return <MenuItem key={uuidv4()}>{text}</MenuItem>
                })}
            </div>

            <div className={s['right-col-item']}>
                <Title
                    className={s['right-col-item-title']}
                    size="S">
                    Company Details
                </Title>
                {mock.footerMenu.rightCol.map((text) => {
                    return <MenuItem key={uuidv4()}>{text}</MenuItem>
                })}
            </div>
        </div>
    )
}
