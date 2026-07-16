import React from "react";
import {render, screen} from '@testing-library/react';
import Counter from "./count"
import { describe, it, expect } from "vitest";

describe("Counter",() => {
    it("clicado 1 vez", () => {
        render(<Counter />)
        expect(screen.getByText("0")).toBeInTheDocument();
    })
})
