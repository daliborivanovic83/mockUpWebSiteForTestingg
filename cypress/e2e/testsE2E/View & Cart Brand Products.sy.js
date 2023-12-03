function visitHomePage() {
  cy.visit("http://automationexercise.com");
  cy.get('[href="/"]').should("contain", " Home");
}

describe("View cart brand products", () => {
  it("view and cart brand products", () => {
    visitHomePage();
    cy.get('[href="/products"]').click();
    cy.get(".brands_products").should("contain", "Brands");
    cy.get(".brands_products").contains("Polo").click();
    cy.get(".features_items").should("contain", "Brand - Polo Products");
    cy.get(".product-overlay").should("contain", "Blue Top");
    cy.get(".product-overlay").should("contain", "Fancy Green Top");
    cy.get(".product-overlay").should(
      "contain",
      "Green Side Placket Detail T-Shirt"
    );
    cy.get('[href="/brand_products/Madame"]').click();
    cy.get(".features_items").should("contain", "Brand - Madame Products");
    cy.get(".product-overlay").should("contain", "Stylish Dress");
    cy.get(".product-overlay").should("contain", "Madame Top For Women");
    cy.get(".product-overlay").should(
      "contain",
      "Rose Pink Embroidered Maxi Dress"
    );

    cy.get(".product-overlay").should(
      "contain",
      "Beautiful Peacock Blue Cotton Linen Saree"
    );
    cy.get(".product-overlay").should("contain", "Sleeveless Dress");

    ////one error in the overlay area name of the product "Sleeveless Dress" doesnot match the name on the overlay content
  });
});
