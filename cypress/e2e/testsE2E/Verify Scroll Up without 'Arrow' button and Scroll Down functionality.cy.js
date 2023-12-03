function visitHomePage() {
  cy.visit("http://automationexercise.com");
  cy.get('[href="/"]').should("contain", " Home");
}

describe("verify scroll up without arrow key", () => {
  it("Verify Scroll up without arrow Arrow button and scroll down functionality", () => {
    visitHomePage();
    cy.scrollTo("bottom");
    cy.get(".single-widget").first().should("contain", "Subscription");
    cy.scrollTo("top")
      .get("#slider-carousel")
      .should(
        "contain",
        "Full-Fledged practice website for Automation Engineers"
      );
  });
});
