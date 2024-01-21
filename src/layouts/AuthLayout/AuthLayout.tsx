import { ILayout } from '@/app/types/layout'
import { ModalBackgroundFilter, ModalCard } from '@/shared/ui/Modal'

import s from './AuthLayout.module.scss'

export const AuthLayout = ({ children }: ILayout) => {
    return (
        <section
            id="Auth_layout"
            className={s.layout}>
            <ModalBackgroundFilter>
                <ModalCard
                    className={s.page}
                    center>
                    {children}
                </ModalCard>
            </ModalBackgroundFilter>
        </section>
    )
}
