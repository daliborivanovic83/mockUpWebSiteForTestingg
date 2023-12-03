function visitHomePage() {
  cy.visit("http://automationexercise.com");
  cy.get('[href="/"]').should("contain", " Home");
}

describe("View category products", () => {
  it("View category products", () => {
    visitHomePage();
    cy.get(".left-sidebar")
      .should("contain", "Category")
      .get("#accordian")
      .contains(" Women ")
      .click();
    cy.get(".panel-body").contains("Dress").click();
    cy.get(".features_items")
      .should("contain", "Women - Dress Products")
      .get("#accordian")
      .contains(" Men ")
      .click()
      .get(".panel-body")
      .contains("Jeans")
      .click()
      .get(".features_items")
      .should("contain", "Men - Jeans Products");
  });
});
