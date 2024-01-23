import { CheckBox } from '@/shared/ui/CheckBox'
import { loginActions } from '../model/slice/loginSlice'
import { useAppDispatch } from '@/shared/hooks'
import { ChangeEvent } from 'react'
type ILoginCheckBoxProps = Parameters<typeof CheckBox>[0]

export const LoginCheckBox = (props: ILoginCheckBoxProps) => {
    const dispatch = useAppDispatch()

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setRememberMe(e.target.checked))
    }

    return (
        <CheckBox
            onChange={onChange}
            {...props}
        />
    )
}
