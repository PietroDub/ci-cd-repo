import React from "react";
import {render, screen} from '@testing-library/react';
import Counter from "./count"
import { describe, it, expect } from "vitest";

describe("Counter",() => {
    it("quando renderiza, existe o número 0", () => {
        render(<Counter />)
        expect(screen.getByText("0")).toBeInTheDocument();
    })
})
