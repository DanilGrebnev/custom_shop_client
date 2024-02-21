import { ILayout } from '@/app/types/layout'
import { Papper } from '@/shared/ui/Papper'

import s from './AuthLayout.module.scss'

export const AuthLayout = ({ children }: ILayout) => {
    return (
        <section
            id="Auth_layout"
            className={s.layout}>
            <Papper className={s.wrapper}>{children}</Papper>
        </section>
    )
}
