import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import { MemoryRouter } from "react-router-dom";

describe("Home", () => {
    it("api success scenario on load", async () => {

        render(<MemoryRouter><Home /></MemoryRouter>);
        
        expect(await screen.findByRole("heading", { name: /anIrrelevantName/i})).toBeInTheDocument(); 
        
    })
})