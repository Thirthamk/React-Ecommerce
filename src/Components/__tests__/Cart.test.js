import { render, screen } from "@testing-library/react";
import { Cart } from "../Cart";

test("should add products", () => {
    render(<Cart />);
    const todoElement = screen.getAllByText("btn");
    expect(todoElement).toBeInTheDocument();
});
