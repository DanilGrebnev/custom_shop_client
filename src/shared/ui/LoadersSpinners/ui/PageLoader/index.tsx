'use client'

import { PulseLoader } from 'react-spinners'
import s from './s.module.scss'

interface IPageLoaderProps {
    className?: string
}

export const PageLoader = (props: IPageLoaderProps) => {
    return (
        <div className={s['pulse-loader']}>
            <PulseLoader
                size={30}
                margin={20}
                color="var(--global-palette1)"
            />
        </div>
    )
}

PageLoader.displayName = 'PageLoader'
