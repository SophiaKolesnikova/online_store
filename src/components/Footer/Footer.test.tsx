import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer.tsx';
import { MemoryRouter } from 'react-router-dom';

test('renders a logo text', () => {
    render(
        <MemoryRouter>
            <Footer />
        </MemoryRouter>
    );
    const logoElement = screen.getByText(/Goods4you/i);
    expect(logoElement).toBeInTheDocument();
});
