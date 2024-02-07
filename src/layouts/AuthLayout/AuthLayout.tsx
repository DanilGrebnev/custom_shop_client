import { ILayout } from '@/app/types/layout'

import s from './AuthLayout.module.scss'
import { Papper } from '@/shared/ui/Papper'

export const AuthLayout = ({ children }: ILayout) => {
    return (
        <section
            id="Auth_layout"
            className={s.layout}>
            <div className={s.wrapper}>
                <Papper className={s.page}>{children}</Papper>
            </div>
        </section>
    )
}
