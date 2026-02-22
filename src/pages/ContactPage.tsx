import { Separator } from "@/components/ui/separator";

export const TestIds = {
	contact: "contactText",
	inquiryParagraph: "inquiryParagraph",
	linkedIn: "linkedInText",
	linkedInLink: "linkedInLink",
	email: "emailText",
	emailLink: "emailLink",
	servicesHeader: "servicesHeader",
	servicesParagraph: "servicesParagraph",
	separator: "bottomSeparator",
};

export const ContactPage = () => {
	return (
		<div className="w-5/6 mx-auto">
			<div className="flex flex-row flex-1 text-[#dfdedf]">
				<div className="contact">
					<div>
						<br />
						<h2 className="text-4xl" data-testid={TestIds.contact}>
							Contact
						</h2>
						<br />
						<p data-testid={TestIds.inquiryParagraph}>
							For inquire about new projects or design services please email me
							at:
						</p>
						<br />
						<div>
							<p data-testid={TestIds.linkedIn}>
								LinkedIn:
								<a
									className="underline ml-1 md:ml-25"
									href="https://www.linkedin.com/in/robertleeadams"
									target="_blank"
									rel="noopener noreferrer"
									data-testid={TestIds.linkedInLink}
								>
									https://www.linkedin.com/in/robertleeadams
								</a>
							</p>
						</div>
						<br />
						<div>
							<p data-testid={TestIds.email}>
								Email:
								<span className="ml-1 md:ml-30" data-testid={TestIds.emailLink}>
									rmladams25@gmail.com
								</span>
							</p>
						</div>
						<br />
						<br />
						<h2 className="text-4xl" data-testid={TestIds.servicesHeader}>
							Services
						</h2>
						<br />
						<div data-testid={TestIds.servicesParagraph}>
							<p>Product & Furniture Design Services</p>
							<br />
							<p>3D Concept/Render Modeling & Production Modeling</p>
							<br />
							<p>Rendering & Drafting</p>
							<br />
							<p>Small & Full Scale Prototyping services</p>
							<br />
							<br />
							<br />
						</div>

						<br />
					</div>
				</div>
			</div>
			<Separator data-testid={TestIds.separator} />
			<br />
			<br />
		</div>
	);
};
