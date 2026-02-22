import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ContactPage, TestIds } from "../src/pages/ContactPage";

describe("AboutPage", () => {
	it("renders", () => {
		render(<ContactPage />);

		const separator = screen.getByTestId(TestIds.separator);
		const contact = screen.getByTestId(TestIds.contact);
		const email = screen.getByTestId(TestIds.email);
		const emailLink = screen.getByTestId(TestIds.emailLink);
		const inquiryParagraph = screen.getByTestId(TestIds.inquiryParagraph);
		const linkedIn = screen.getByTestId(TestIds.linkedIn);
		const linkedInLink = screen.getByTestId(TestIds.linkedInLink);
		const servicesHeader = screen.getByTestId(TestIds.servicesHeader);
		const servicesParagraph = screen.getByTestId(TestIds.servicesParagraph);

		expect(separator).toBeInTheDocument();
		expect(contact).toBeInTheDocument();
		expect(email).toBeInTheDocument();
		expect(emailLink).toBeInTheDocument();
		expect(inquiryParagraph).toBeInTheDocument();
		expect(linkedIn).toBeInTheDocument();
		expect(linkedInLink).toBeInTheDocument();
		expect(servicesHeader).toBeInTheDocument();
		expect(servicesParagraph).toBeInTheDocument();
	});

    it("expects linkedinlinktext to be corret url", () => {
        render(<ContactPage />);

		const linkedInLink = screen.getByTestId(TestIds.linkedInLink);
        expect(linkedInLink).toHaveTextContent("https://www.linkedin.com/in/robertleeadams")
        expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/robertleeadams')
    })
});
