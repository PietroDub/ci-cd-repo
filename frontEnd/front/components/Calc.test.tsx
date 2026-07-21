import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import Calculadora from "../app/search/page";
import { userAgent } from "next/server";

describe("Calc", () => {
  it("ao clicar em 9 duas vezes, 99", async () => {
    render(<Calculadora />);
    expect(screen.getByText("8")).toBeInTheDocument();
    const nove = screen.getByRole("button", { name: "9" });
    const user = userEvent.setup();
    await user.click(nove); //digitar 99
    await user.click(nove); //digitar 99

    // screen.debug();

    expect(screen.getByPlaceholderText("99=0")).toBeInTheDocument();
  });

  it("conta completa", async () => {
    render(<Calculadora />);
    console.log(
  screen.getAllByRole("button", { name: "5" }).length
);
    const cinco = screen.getByRole("button", { name: "5" });
    const soma = screen.getByRole("button", {name: "+"});
    const igual = screen.getByRole("button", {name: "="});
    const user = userEvent.setup();
    await user.click(cinco);
    await user.click(soma);
    await user.click(cinco);
    expect(screen.getByPlaceholderText("5+5=0")).toBeInTheDocument();
    await user.click(igual);
    expect(screen.getByPlaceholderText("10=0")).toBeInTheDocument();
  })
});
