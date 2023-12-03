function searchProducts() {
  cy.visit("http://automationexercise.com");
  cy.get(".container").contains("Home").should("contain", "Home");
  cy.get(".container").contains("Products").click();
  cy.get(".container")
    .contains("All Products")
    .should("contain", "All Products")
    .get("#search_product")
    .type("shirt")
    .get("#submit_search")
    .click()
    .get(".features_items")
    .contains("Searched Products")
    .should("contain", "Searched Products");

  cy.get(".container")
    .contains("Searched Products")
    .should("contain", "Searched Products");
}

describe("Search product", () => {
  it("Search Products", () => {
    searchProducts();
  });
});
