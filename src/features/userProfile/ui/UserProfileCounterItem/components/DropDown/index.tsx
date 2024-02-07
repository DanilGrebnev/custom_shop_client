import { Papper } from '@/shared/ui/Papper'
import { DropDownItem } from '../DropDownItem/DropDownItem'
import { Button } from '@/shared/ui/Button'

import s from './s.module.scss'

interface IDropDown {
    amount: number
    openModal: (open: boolean) => void
}

export const DropDown = (props: IDropDown) => {
    const { openModal, amount } = props
    return (
        <Papper
            className={s['dropdown-widget']}
            onMouseLeave={() => openModal(false)}>
            <main>
                <header>
                    <b>Основные товары: {amount}</b>
                    <button>Очистить список</button>
                </header>
                <div className={s.list}>
                    <DropDownItem />
                    <DropDownItem />
                    <DropDownItem />
                    <DropDownItem />
                    <DropDownItem />
                </div>
            </main>
            <footer>
                <div className={s.total}>
                    <p>Итого:</p>
                    <b>9 999</b>
                </div>
                <div className={s['btn-group']}>
                    <Button
                        hover={true}
                        variant="outlined">
                        Оформить заказ
                    </Button>
                    <Button hover={true}>В корзину</Button>
                </div>
            </footer>
        </Papper>
    )
}
