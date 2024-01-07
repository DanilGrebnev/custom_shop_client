import {
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    useEffect,
    useState,
} from 'react'

import clsx from 'clsx'
import s from './DropDownMenu.module.scss'

interface IDropDownMenuProps {
    className?: string
    ReactNode?: string
    buttonElement: ReactNode
    children?: ReactNode | ReactNode[]
    setIsOpenState?:
        | Dispatch<SetStateAction<boolean>>
        | ((state: boolean) => void)
}

export const DropDownMenu: FC<IDropDownMenuProps> = (props) => {
    const { className, children, buttonElement, setIsOpenState } = props
    const [open, setOpen] = useState<boolean>(false)

    const changeIsOpenStateFromProps = (isOpen: boolean) => {
        if (!setIsOpenState) return
        setIsOpenState(isOpen)
    }

    const toggleOpen = () => {
        const openState = !open
        setOpen(openState)
        changeIsOpenStateFromProps(openState)
    }

    const onClose = (e: any) => {
        const dropDownWrapper = '.' + s['drop-down-menu-wrapper']
        const dropDownMenu = '.' + s['drop-down-menu']

        if (
            e.target.closest(dropDownMenu) ||
            !e.target.closest(dropDownWrapper)
        ) {
            setOpen(false)
            changeIsOpenStateFromProps(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', onClose)

        return () => document.removeEventListener('click', onClose)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={clsx(s['drop-down-menu-wrapper'], className)}>
            <div onClick={toggleOpen}>{buttonElement}</div>
            <div className={clsx(s['drop-down-menu'], { [s.open]: open })}>
                {children}
            </div>
        </div>
    )
}
