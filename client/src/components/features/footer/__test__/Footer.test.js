const { screen } = require("@testing-library/react");
const { render } = require("@testing-library/react");
import { Footer } from "../Footer";

describe("Footer tests", () => {
    it("Should check if footer exists", () => {
        render(<Footer />);
        const FooterElem = screen.getByTitle("footer");
        const socialLinks = screen.getByText("Github");
        expect(FooterElem).toBeInTheDocument();
        expect(FooterElem).toContainElement(socialLinks);

    })
    it("Should not check if footer exists", () => {
        render(<Footer />);
        const FooterElem = screen.queryByTitle("footer1");
        expect(FooterElem).not.toBeInTheDocument();
    })
})

