import '@/app/styles/variables.scss'
import ArrowIcon from '/public/static/icons/arrow.svg'

import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './ui/Button'

const meta: Meta<typeof Button> = {
    component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const DefaultButton: Story = {
    args: {
        borderRadius: 'top',
    },
    render: () => <Button>Click me</Button>,
}
