function verifyProducts() {
  cy.visit("http://automationexercise.com");
  cy.get(".container")
    .contains("Products")
    .should("contain", "Products")
    .click();
  cy.get(".container").contains("All Products");

  cy.get(".container")
    .find(".features_items")
    .first()
    .contains("View Product")
    .click()
    .get(".product-information")
    .contains("Blue Top")
    .should("contain", "Blue Top")
    .get(".product-information")
    .contains("Category: Women > Tops")
    .should("contain", "Category: Women > Tops")
    .get(".product-information")
    .contains(" In Stock")
    .should("contain", " In Stock")
    .get(".product-information")
    .contains(" New")
    .should("contain", " New")
    .get(".product-information")
    .contains(" Polo")
    .should("contain", "Polo");
}

describe("Verify All products", () => {
  it("Verify All Products and product detail page", () => {
    verifyProducts();
  });
});
