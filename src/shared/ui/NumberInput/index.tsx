import { useState, memo } from 'react'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { Input, TextField } from '@mui/material'
import { TextMaskCustom } from './TextMaskCustom'

type INumberInputProps = Parameters<typeof TextField>[0]

export const NumberInput = memo((props: INumberInputProps) => {
    const { defaultValue, onChange, name, variant = 'standard' } = props
    const [values, setValues] = useState(defaultValue || '')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues(event.target.value)
        onChange?.(event)
    }

    return (
        <FormControl variant={variant}>
            <InputLabel htmlFor="formatted-text-mask-input">
                Номер телефона
            </InputLabel>
            <Input
                value={values}
                onChange={handleChange}
                name={name}
                inputComponent={TextMaskCustom as any}
            />
        </FormControl>
    )
})

NumberInput.displayName = 'NumberInput'
