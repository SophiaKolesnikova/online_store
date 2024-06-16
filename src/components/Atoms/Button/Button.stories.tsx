import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button.tsx';
import './styles.module.css';

const meta: Meta<typeof Button> = {
    title: 'Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            type: 'string',
            defaultValue: 'primary',
            options: ['primary', 'default'],
            control: {
                type: 'radio',
            },
        },
        size: {
            type: 'string',
            defaultValue: 'large',
            options: ['small', 'large'],
            control: {
                type: 'radio',
            },
        },
        type: {
            type: 'string',
            defaultValue: 'button',
            options: ['button', 'submit'],
            control: {
                type: 'radio',
            },
        },
        children: {
            name: 'label',
            type: 'string',
            defaultValue: 'Click me',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Click me',
        variant: 'primary',
        size: 'large',
    },
};

export const Default: Story = {
    args: {
        children: 'Click me',
        variant: 'default',
        size: 'small',
    },
};
