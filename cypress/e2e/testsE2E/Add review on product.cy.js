function visitHomePage() {
  cy.visit("http://automationexercise.com");
  cy.get('[href="/"]').should("contain", " Home");
}

describe("Add review on product", () => {
  it("Add review on product", () => {
    visitHomePage();
    cy.get(".container").contains("Products").click();
    cy.get(".container").should("contain", "All Products");

    cy.get(".choose")
      .find('[href="/product_details/1"]')
      .should("contain", "View Product")
      .click();
    cy.get('[href="#reviews"]')
      .should("contain", "Write Your Review")
      .get("#name")
      .type("Dalibor")
      .get("#email")
      .type("ddddd@gmail.com")
      .get("#review")
      .type("This is my review")
      .get("#review-form")
      .submit()
      .wait(2000)
      .get("#review-section")
      .should("exist")
      .should("contain", "Thank you for your review.");
  });
});
