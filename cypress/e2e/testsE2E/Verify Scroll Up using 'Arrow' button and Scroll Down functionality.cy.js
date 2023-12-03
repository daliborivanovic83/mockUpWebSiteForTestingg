function visitHomePage() {
  cy.visit("http://automationexercise.com");
  cy.get('[href="/"]').should("contain", " Home");
}

describe("verify scroll up using arrow button", () => {
  it("Verify scroll up using arrow button and Scroll down functionality", () => {
    visitHomePage();
    cy.scrollTo("bottom");
    cy.get(".single-widget")
      .first()
      .should("contain", "Subscription")
      .get("#scrollUp")
      .click()
      .get("#slider-carousel")
      .should(
        "contain",
        "Full-Fledged practice website for Automation Engineers"
      );
  });
});
