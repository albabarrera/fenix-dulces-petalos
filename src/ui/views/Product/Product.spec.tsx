import { MemoryRouter, useLocation } from "react-router-dom";
import { Product } from "./Product";
import { render, renderHook, screen } from "@testing-library/react";
import { FC } from "react";

describe("Product", () => {
    it.skip("shows product information", async () => {
        const product = "http://localhost:5173/product/ZmGrkLRPXOTpxsU4jjAcv"
        
        render(<MemoryRouter initialEntries={[product]}><Product /></MemoryRouter>);
        
        expect(await screen.findByRole("link", { name: /Volver a la home/i})).toBeInTheDocument(); 
    })
    it.skip('returns value from url query', () => {

        const wrapper: FC = () => (
          <MemoryRouter initialEntries={[`/product/ZmGrkLRPXOTpxsU4jjAcv`]}>
            <Product />
          </MemoryRouter>
        );
        
        const { result } = renderHook(() => useLocation(), { wrapper });
    
        expect(result.current).toBe('authorized');
      });
})