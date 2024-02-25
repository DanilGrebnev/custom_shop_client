'use client'
import { Dialog } from '@/shared/ui/Modal'
import { useState } from 'react'
import { Button } from '@mui/material'

const ChangePassword = () => {
    const [open, setIsOpen] = useState(false)

    return (
        <>
            <h1>Изменить пароль</h1>
            <Button onClick={setIsOpen.bind(null, true)}>
                Открыть модальное окно
            </Button>
            {open && (
                <Dialog onClose={setIsOpen.bind(null, false)}>
                    Подтверждение смены пароля
                </Dialog>
            )}
        </>
    )
}

export default ChangePassword
