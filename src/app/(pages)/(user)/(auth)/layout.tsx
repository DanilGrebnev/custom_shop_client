import { ILayout } from '@/app/types/layout'
import { ModalBackgroundFilter, ModalCard } from '@/shared/ui/Modal'

import s from './auth_layout.module.scss'

export default function UserLayout({ children }: ILayout) {
    return (
        <section
            id="auth_layout"
            className={s.layout}>
            <ModalBackgroundFilter>
                <ModalCard center>
                    <section className={s.page}>{children}</section>
                </ModalCard>
            </ModalBackgroundFilter>
        </section>
    )
}
