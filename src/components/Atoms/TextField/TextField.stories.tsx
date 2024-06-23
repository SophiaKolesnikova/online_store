import type { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField.tsx';
import './styles.module.css';

const meta: Meta<typeof TextField> = {
    title: 'Atoms/TextField',
    component: TextField,
    tags: ['autodocs'],
    argTypes: {
        value: {
            name: 'label',
            type: 'string',
            defaultValue: 'Search...',
        },
        variant: {
            type: 'string',
            defaultValue: 'primary',
            options: ['primary'],
            control: {
                type: 'radio',
            },
        },
        height: {
            type: 'string',
            defaultValue: 'small',
            options: ['large', 'small'],
            control: {
                type: 'radio',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Primary: Story = {
    args: {
        value: 'Search...',
        variant: 'primary',
        height: 'large',
    },
};
