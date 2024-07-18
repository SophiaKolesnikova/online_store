import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    test('handle click on button', () => {
        const handleClick = jest.fn();
        const { getByRole } = render(
            <Button
                onClick={handleClick}
                size={'small'}
                variant={'primary'}
                type={'submit'}
            />
        );

        fireEvent.click(getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
