'use client'
import { useAppSelector } from '@/shared/hooks'
import { ILayout } from '@/app/types/layout'
import { ModalBackgroundFilter, ModalCard } from '@/shared/ui/Modal'
import { LoginSelector } from '@/features/login'
import { PageLoader } from '@/shared/ui/LoadersSpinners'

import s from './auth_layout.module.scss'
import { RegistrationSelectors } from '@/features/registration'

export default function AuthLayout({ children }: ILayout) {
    const loading1 = useAppSelector(LoginSelector.getIsLoading)
    const loading2 = useAppSelector(RegistrationSelectors.getIsLoading)
    const loading = loading1 || loading2

    return (
        <section
            id="auth_layout"
            className={s.layout}>
            <ModalBackgroundFilter>
                {loading ? (
                    <PageLoader />
                ) : (
                    <ModalCard
                        className={s.page}
                        center>
                        {children}
                    </ModalCard>
                )}
            </ModalBackgroundFilter>
        </section>
    )
}
