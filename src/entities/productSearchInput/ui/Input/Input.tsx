'use client'

import { InputHTMLAttributes, type FC, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from '@/shared/hooks'
import { setInput } from '../../model/slice/productSearchInputSlice'
import { ProductSearchInputState } from '../../model/selectors/ProductSearchInputState'
import { BeatLoader } from 'react-spinners'

import s from './Input.module.scss'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<IInputProps> = (props) => {
    const { className, onChange, ...otherProps } = props
    const dispatch = useAppDispatch()
    const value = useAppSelector(ProductSearchInputState.getInput)
    const isLoading = useAppSelector(ProductSearchInputState.getIsLoading)

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setInput(e.target.value))
        onChange?.(e)
    }

    return (
        <div className={s.input}>
            <input
                {...otherProps}
                onChange={onInputChange}
                value={value}
                className={className}
            />
            {isLoading && (
                <BeatLoader
                    className={s.loader}
                    size={8}
                    color="green"
                />
            )}
        </div>
    )
}

Input.displayName = 'Input'
