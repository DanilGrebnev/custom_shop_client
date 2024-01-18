import { ChangeEvent, FC } from 'react'
import { ILoginFields } from '../model/schema/loginSchema'
import { CustomInput, TCustomInput } from '@/shared/ui/CustomInput'
import { useAppSelector, useAppDispatch } from '@/shared/hooks'
import { LoginSelector } from '../model/selectors/loginSelector'
import { setLoginValue } from '../model/slice/loginSlice'

type ILoginInputProps = Omit<TCustomInput, 'name'> & {
    name: keyof ILoginFields
    selector: keyof typeof LoginSelector
}

export const LoginInput: FC<ILoginInputProps> = (props) => {
    const { selector, ...otherProps } = props

    const dispatch = useAppDispatch()
    const value = useAppSelector(
        LoginSelector[selector] as typeof LoginSelector.getLogin
    )

    const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const name = target.name as keyof ILoginFields
        const value = target.value
        dispatch(setLoginValue({ name, value }))
    }

    return (
        <CustomInput
            value={value}
            color="var(--global-palette1)"
            onChange={onChange}
            {...otherProps}
        />
    )
}
