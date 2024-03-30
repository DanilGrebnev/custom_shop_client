import { CheckBox } from '@/shared/ui/CheckBox'

type Props = {} & Parameters<typeof CheckBox>[0]

export const CustomCheckedFilter = (props: Props) => {
    const { ...otherProps } = props

    return <CheckBox {...otherProps} />
}
