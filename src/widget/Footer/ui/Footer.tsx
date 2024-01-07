import { FC } from 'react'
import { Title } from '@/shared/ui/Title'
import { MenuItem } from './components/MenuItem/MenuItem'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import mock from '@/mock/mock'
import clsx from 'clsx'
import s from './Footer.module.scss'
import { LeftCol } from './components/LeftCol/LeftCol'
import { RightCol } from './components/RightCol/RightCol'

interface FooterProps {}

export const Footer: FC<FooterProps> = (props) => {
    return (
        <footer id="Footer">
            <div className={clsx(s['footer-container'], 'contain')}>
                {/* Левая колонка */}
                <LeftCol />
                {/* Правая колонка */}
                <RightCol />
            </div>
        </footer>
    )
}
