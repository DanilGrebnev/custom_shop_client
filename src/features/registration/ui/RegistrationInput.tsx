'use client'

import { ChangeEvent, FC } from 'react'
import { useAppSelector, useAppDispatch } from '@/shared/hooks'
import { CustomInput } from '@/shared/ui/CustomInput'
import { RegistrationSelectors } from '../model/selectors/registrationSelectors'
import { setRegistrationField } from '../model/slice/registrationSlice'
import { IRegistrationSchema } from '../model/schema/registrationSchema'

type IRegistrationInputProps = Omit<
    Parameters<typeof CustomInput>[0],
    'name'
> & {
    name: keyof IRegistrationSchema
    selector: keyof typeof RegistrationSelectors
}

export const RegistrationInput: FC<IRegistrationInputProps> = (props) => {
    const { selector, ...otherProps } = props
    const dispatch = useAppDispatch()

    const value = useAppSelector(
        RegistrationSelectors[selector] as typeof RegistrationSelectors.getEmail
    )

    const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const name = target.name as keyof IRegistrationSchema
        const value = target.value
        dispatch(setRegistrationField({ name, value }))
    }

    return (
        <CustomInput
            value={value}
            onChange={onChange}
            {...otherProps}
        />
    )
}
