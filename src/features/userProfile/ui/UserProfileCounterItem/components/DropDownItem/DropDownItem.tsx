import Image from 'next/image'
import s from './DropDownItem.module.scss'
import DeleteBasket from '@/shared/assets/delete-basket.svg'

interface IDropDownItem {
    id: string
    src: string
    title: string
    price: string
}

export const DropDownItem = () => {
    return (
        <div className={s.item}>
            <Image
                width={50}
                height={50}
                alt="123"
                src={'/mock/images/base1.jpg'}
            />
            <div>7 Планшет DEXP Ursus M170 3G 32 ГБ розовый</div>
            <span>9 999 р</span>
            <DeleteBasket
                fill="var(--text-color2)"
                className={s.icon}
            />
        </div>
    )
}
