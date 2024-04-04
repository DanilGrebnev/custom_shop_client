'use client'

import {
    ChangeEvent,
    ComponentPropsWithoutRef,
    type FC,
    memo,
    useState,
} from 'react'
import { BeatLoader } from 'react-spinners'

import SearchIcon from '@/shared/assets/search.svg'

import { Cancel } from '../Cancel'
import s from './Input.module.scss'

import clsx from 'clsx'

interface Props extends ComponentPropsWithoutRef<'input'> {
    isLoading?: boolean
    value?: string
    className?: string
}

export const Input: FC<Props> = memo((props) => {
    const {
        isLoading,
        className,
        onChange: onChangeFromProps,
        ...otherProps
    } = props
    const [state, setState] = useState<string>('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeFromProps?.(e)
        setState(e.target.value)
    }

    const clear = () => {
        setState('')
    }

    return (
        <div className={clsx(s['input-wrapper'], className)}>
            <input
                {...otherProps}
                onChange={onChange}
                value={state}
                className={s.input}
            />
            {state && (
                <Cancel
                    onClick={clear}
                    className={s.cancel}
                />
            )}
            {!isLoading && !state && (
                <SearchIcon className={s['search-icon']} />
            )}
            {isLoading && (
                <BeatLoader
                    className={s.loader}
                    size={8}
                    color="var(--global-palette1)"
                />
            )}
        </div>
    )
})

Input.displayName = 'Input'
