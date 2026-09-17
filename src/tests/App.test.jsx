import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import '@testing-library/jest-dom/vitest';
import App from "../App";

describe("App", () => {
    test("render App content", () => {
        render(<App />);

        expect(screen.getByRole("button", { 
            name: /count is 0/i 
        })).toBeInTheDocument();
    });
});