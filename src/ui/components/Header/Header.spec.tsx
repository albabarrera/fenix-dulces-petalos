import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { MemoryRouter } from "react-router-dom";


describe("Header", () => {
  it("renders home link", async () => {
    render(<MemoryRouter><Header /></MemoryRouter>);
    expect(screen.getByRole("link", { name: /Dulces Pétalos/i})).toBeInTheDocument();
  });
});