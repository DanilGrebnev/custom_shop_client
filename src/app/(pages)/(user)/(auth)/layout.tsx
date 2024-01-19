import { ILayout } from '@/app/types/layout'
import { ModalBackgroundFilter, ModalCard } from '@/shared/ui/Modal'

import s from './auth_layout.module.scss'

export default function AuthLayout({ children }: ILayout) {
    return (
        <section
            id="auth_layout"
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
