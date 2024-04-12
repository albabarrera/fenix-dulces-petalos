import { render, screen } from '@testing-library/react';
import { App } from './App';
import { MemoryRouter } from 'react-router-dom';


describe("App", () => {
    it("api success scenario on load", async () => {

        render(<MemoryRouter><App /></MemoryRouter>);
        
        expect(await screen.findByRole("heading", { name: /Girasol/i})).toBeInTheDocument();
    });
})