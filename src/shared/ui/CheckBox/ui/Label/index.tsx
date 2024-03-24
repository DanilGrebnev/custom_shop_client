import { ComponentPropsWithoutRef, memo } from 'react'

interface Props extends ComponentPropsWithoutRef<'p'> {}

export const Label = memo((props: Props) => {
    return <p {...props} />
})

Label.displayName = 'Label'
