import { render, screen } from "@testing-library/react";
import AddProducts from "../AddProduct";

test("should add products", () => {
    render(<AddProducts />);
    const todoElement = screen.getByRole("btn");
    expect(todoElement).toBeInTheDocument();
});
