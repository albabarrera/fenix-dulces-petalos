import { App } from "@/App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom";
import { Home } from "./Home";
import * as floresService from '@/domain/services/getFlor';
import { getFlor } from "@/domain/services/getFlor";


describe("Home", () => {
    it("shows products", async () => {
        render(<MemoryRouter><Home /></MemoryRouter>);
        
        expect(await screen.findByRole("heading", { name: /Girasol/i})).toBeInTheDocument(); 
    })
    
    it("navegates to product detail view", async () => {
        render(<MemoryRouter><App /></MemoryRouter>);

        const item = await screen.findByRole("link", { name: /Girasol/i})    
        userEvent.click(item);
        
        expect(await screen.findByRole("link", { name: /Volver a la home/i})).toBeInTheDocument(); 
    })

    it("navegates to product detail view and shows product info", async () => {
        jest.spyOn(floresService, 'getFlor');
        getFlor("ND1elEt4nqZrCeFflDUZ2");

        render(<MemoryRouter><App /></MemoryRouter>);
        const item = await screen.findByRole("link", { name: /Orquídea/i})   
        userEvent.click(item);

        expect(await screen.findByRole("link", { name: /Volver a la home/i})).toBeInTheDocument(); 
        expect(await screen.findByRole("heading", { name: /Orquídea/i})).toBeInTheDocument(); 
    })
})