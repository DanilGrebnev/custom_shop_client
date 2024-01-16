import { ILayout } from '@/app/types/layout'
import { ModalBackgroundFilter, ModalCard } from '@/shared/ui/Modal'

import s from './s.module.scss'

export default function UserLayout({ children }: ILayout) {
    return (
        <section
            id="User-Layout"
            className={s.layout}>
            <ModalBackgroundFilter>
                <ModalCard center>{children}</ModalCard>
            </ModalBackgroundFilter>
        </section>
    )
}
