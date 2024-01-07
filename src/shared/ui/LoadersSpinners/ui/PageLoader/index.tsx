'use client'

import { FC } from 'react'
import { PulseLoader } from 'react-spinners'
import s from './s.module.scss'

interface IPageLoaderProps {
    className?: string
}

export const PageLoader: FC<IPageLoaderProps> = (props) => {
    return (
        <div className={s['pulse-loader']}>
            <PulseLoader
                size={30}
                margin={20}
                color="green"
            />
        </div>
    )
}

PageLoader.displayName = 'PageLoader'
