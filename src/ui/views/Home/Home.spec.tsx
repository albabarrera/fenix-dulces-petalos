import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import { MemoryRouter } from "react-router-dom";
import { aProduct } from "@/domain/models/__builders__/aProduct";

describe("Home", () => {
    it("shows searchBar", async () => {
        const data = aProduct()

        render(<MemoryRouter><Home data={data}/></MemoryRouter>);
        
        expect(screen.getByLabelText(/Qué planta estás buscando/i)).toBeInTheDocument();
        
    })
})