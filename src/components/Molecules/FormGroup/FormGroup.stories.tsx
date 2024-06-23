import type { Meta, StoryObj } from '@storybook/react';
import FormGroup from './FormGroup.tsx';
import Button from '../../Atoms/Button/Button.tsx';
import TextField from '../../Atoms/TextField/TextField.tsx';
import './styles.module.css';

const meta: Meta<typeof FormGroup> = {
    title: 'Molecules/FormGroup',
    component: FormGroup,
    tags: ['autodocs'],
    argTypes: {
        padding: {
            type: 'string',
            defaultValue: 's',
            options: ['m', 's', 'none'],
            control: {
                type: 'radio',
            },
        },
        gap: {
            type: 'string',
            defaultValue: 'small',
            options: ['large', 'small'],
            control: {
                type: 'radio',
            },
        },
        direction: {
            type: 'string',
            defaultValue: 'row',
            options: ['row', 'column'],
            control: {
                type: 'radio',
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof FormGroup>;

export const Search: Story = {
    render: (args) => (
        <FormGroup {...args}>
            <TextField
                height={'large'}
                type={'text'}
                variant={'primary'}
                placeholder={'Search by title'}
            />
            <Button
                size={'large'}
                variant={'default'}
                type={'button'}
                children={'click'}
            />
        </FormGroup>
    ),
};
