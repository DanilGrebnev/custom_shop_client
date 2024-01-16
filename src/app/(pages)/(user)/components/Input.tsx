'use client'

import { FC, memo } from 'react'
import { CustomInput } from '@/shared/ui/CustomInput'

type IInputProps = Parameters<typeof CustomInput>[0]

export const Input: FC<IInputProps> = memo((props) => {
    const { color = 'var(--global-palette1)', ...otherProps } = props

    return (
        <CustomInput
            color={color}
            fullWidth={true}
            {...otherProps}
        />
    )
})

Input.displayName = 'Input'
