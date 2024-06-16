import type { Meta, StoryObj } from '@storybook/react';
import Title from './Title.tsx';
import './styles.module.css';

const meta: Meta<typeof Title> = {
    title: 'Atoms/Title',
    component: Title,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            type: 'string',
            defaultValue: 'primary',
            options: ['primary', 'secondary'],
            control: {
                type: 'radio',
            },
        },
        size: {
            type: 'string',
            defaultValue: 'large',
            options: ['medium', 'large'],
            control: {
                type: 'radio',
            },
        },
        children: {
            name: 'label',
            type: 'string',
            defaultValue: 'Title',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Primary: Story = {
    args: {
        children: 'Title',
        variant: 'primary',
        size: 'large',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Title',
        variant: 'secondary',
        size: 'medium',
    },
};
