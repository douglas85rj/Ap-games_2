import {  render, screen } from "@testing-library/react";
import Footer from "../Footer";
import { BrowserRouter } from "react-router-dom";

const mockNavigate = jest.fn();

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: () => mockNavigate,
}));

describe("FooterRender", () => {
 
  it("Footer component rendering and router for Home and Contact", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Contato")).toBeInTheDocument();
  });
});
