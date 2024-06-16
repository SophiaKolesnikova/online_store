import type { Meta, StoryObj } from '@storybook/react';
import FormGroup from './FormGroup.tsx';
import './styles.module.css';
import Button from '../../Atoms/Button/Button.tsx';
import Title from '../../Atoms/Title/Title.tsx';
import TextField from '../../Atoms/TextField/TextField.tsx';

const meta: Meta<typeof FormGroup> = {
    title: 'Molecules/FormGroup',
    component: FormGroup,
    // subcomponents: { Button, Title },
    // tags: ['autodocs'],
    // argTypes: {}
};
export default meta;

type Story = StoryObj<typeof FormGroup>;

export const Search: Story = {
    render: (args) => (
        <FormGroup {...args}>
            <TextField
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
