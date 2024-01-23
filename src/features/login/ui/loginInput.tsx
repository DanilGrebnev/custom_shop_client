import { ChangeEvent, FC } from 'react'
import { ILoginFields } from '../model/schema/loginSchema'
import { CustomInput, TCustomInput } from '@/shared/ui/CustomInput'
import { useAppDispatch } from '@/shared/hooks'
import { loginActions } from '../model/slice/loginSlice'

type ILoginInputProps = Omit<TCustomInput, 'name'> & {
    name: keyof ILoginFields
}

export const LoginInput: FC<ILoginInputProps> = (props) => {
    const dispatch = useAppDispatch()

    const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const name = target.name as keyof Omit<ILoginFields, 'remember_me'>
        const value = target.value
        dispatch(loginActions.setLoginValue({ name, value }))
    }

    return (
        <CustomInput
            color="var(--global-palette1)"
            onChange={onChange}
            {...props}
        />
    )
}
