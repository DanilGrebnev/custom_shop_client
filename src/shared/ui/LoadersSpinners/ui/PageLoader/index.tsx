'use client'

import { PulseLoader } from 'react-spinners'

import s from './s.module.scss'
import clsx from 'clsx'

interface IPageLoaderProps {
    className?: string
}

export const PageLoader = (props: IPageLoaderProps) => {
    return (
        <div className={clsx(s['pulse-loader'], props.className)}>
            <PulseLoader
                size={30}
                margin={20}
                color="var(--global-palette1)"
            />
        </div>
    )
}

PageLoader.displayName = 'PageLoader'
