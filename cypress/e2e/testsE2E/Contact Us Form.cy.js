function contactUsForm() {
  cy.visit("http://automationexercise.com");
  cy.get(".container").contains("Contact us").click();

  cy.get("#contact-page")
    .contains("Get In Touch")
    .should("contain", "Get In Touch");

  cy.get("#form-section").then((contactusForm) => {
    cy.wrap(contactusForm)
      .get("#contact-us-form")
      .find('[placeholder="Name"]')
      .type("Dalibor");
    cy.wrap(contactusForm)
      .get("#contact-us-form")
      .find('[placeholder="Email"]')
      .type("dabaaaa@yahoo.com");
    cy.wrap(contactusForm)
      .get("#contact-us-form")
      .find('[placeholder="Subject"]')
      .type("Online Complaint");
    cy.wrap(contactusForm)
      .get("#contact-us-form")
      .find('[placeholder="Your Message Here"]')
      .type("This is my message");
    const pic = "naziv oglasa underline.png";
    cy.wrap(contactusForm)
      .get("#contact-us-form")
      .find('input[name="upload_file"]')
      .attachFile(pic);

    cy.get("#contact-page").find("#contact-us-form").submit();
    cy.get("#contact-page")
      .contains("Success! Your details have been submitted successfully")
      .should(
        "contain",
        "Success! Your details have been submitted successfully"
      );
    cy.get("#contact-page").contains("Home").should("contain", "Home").click();
    cy.get(".container")
      .contains("Full-Fledged practice website for Automation Engineers")
      .should(
        "contain",
        "Full-Fledged practice website for Automation Engineers"
      );
  });
}

describe("Contact us form verification", () => {
  it("Contact us form", () => {
    contactUsForm();
  });
});
