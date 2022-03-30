const { screen } = require("@testing-library/react");
const { render } = require("@testing-library/react");
import { Container } from "../Container";


describe("Container tests", () => {

    it("Should check if Container elements exists", () => {
        render(<Container />);
        const ContainerElem = screen.getByRole("main");
        expect(ContainerElem).toBeInTheDocument();
    })

    it("Should check if Container elements not exists", () => {
        render(<Container />);
        const ContainerElem = screen.queryByRole("form");
        expect(ContainerElem).not.toBeInTheDocument();
    })
})
