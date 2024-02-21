import { memo, forwardRef } from 'react'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { Input, TextField } from '@mui/material'
import { TextMaskCustom } from './TextMaskCustom'
import './NumberInput.scss'

type INumberInputProps = Parameters<typeof TextField>[0]

export const NumberInput = memo(
    forwardRef((props: INumberInputProps, ref) => {
        const {
            defaultValue,
            name,
            onChange,
            variant = 'standard',
            value,
            fullWidth = true,
        } = props

        return (
            <FormControl
                fullWidth={fullWidth}
                variant={variant}>
                <InputLabel htmlFor="formatted-text-mask-input">
                    Номер телефона
                </InputLabel>
                <Input
                    fullWidth={true}
                    inputRef={ref}
                    value={value}
                    onChange={onChange}
                    name={name}
                    inputComponent={TextMaskCustom as any}
                    defaultValue={defaultValue}
                />
            </FormControl>
        )
    })
)

NumberInput.displayName = 'NumberInput'
