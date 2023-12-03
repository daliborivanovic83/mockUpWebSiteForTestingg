function visitHomePage() {
  cy.visit("http://automationexercise.com");
  cy.get('[href="/"]').should("contain", " Home");
}

describe("Add to cart from Recommended items", () => {
  it("Add to cart from Recommended items", () => {
    visitHomePage();
    cy.get(".recommended_items")
      .scrollTo("bottom", { ensureScrollable: false })
      .get(".recommended_items")
      .should("contain", "recommended items");
    cy.get(".recommended_items")
      .find('[data-product-id="1"]')
      .contains("Add to cart")
      .click({ force: true })
      .wait(3000)
      .get('[href="/view_cart"]')
      .contains("View Cart")
      .click();
    cy.get("#cart_info").find("#product-1").should("exist");
  });
});
