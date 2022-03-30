import { render, screen, fireEvent } from ("@testing-library/react");
import { Button } from "../Button";
import { CardsContainer } from "../../containerCards/CardsContainer";


describe("Container tests", () => {

    it("Should check if Container elements exists", () => {
        render(<Button />);
        const ContainerElem = screen.getByRole("button");
        expect(ContainerElem).toBeInTheDocument();
    })

    it("Should check if Container elements not exists", () => {
        render(<Button />);
        const ContainerElem = screen.queryByRole("form");
        expect(ContainerElem).not.toBeInTheDocument();
    });
})

describe("Container tests", () => {

    it("Should check if form component in the document", () => {
        render(<Button />);
        const ButtonElem = screen.getByRole("button");
        fireEvent.click(ButtonElem);
        const cardsElem = screen.getByRole("main");

    })

    it("Should check if Container elements not exists", () => {
        render(<Button />);
        const ContainerElem = screen.queryByRole("form");
        expect(ContainerElem).not.toBeInTheDocument();
    });
})