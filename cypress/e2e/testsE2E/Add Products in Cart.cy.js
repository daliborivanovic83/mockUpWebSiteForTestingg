function addProductsToCart() {
  cy.visit("http://automationexercise.com");
  cy.get(".container").contains("Home").should("contain", "Home");
  cy.get(".container").contains("Products").click();

  cy.get(".single-products").then((slider) => {
    cy.wrap(slider).first().invoke("mouseenter");
    cy.wrap(slider).first().contains("Add to cart").click().wait(3000);
    cy.get(".modal-content").contains("Continue Shopping").click();

    cy.wrap(slider).eq(1).invoke("mouseenter");
    cy.wrap(slider).eq(1).contains("Add to cart").click().wait(3000);
    cy.get(".modal-content").contains("Continue Shopping").click();
    cy.get(".container").contains("Cart").click();

    cy.get("#product-1").then((productOne) => {
      cy.wrap(productOne)
        .find('[href="/product_details/1"]')
        .should("contain", "Blue Top");
      cy.wrap(productOne).find(".cart_price").should("contain", "Rs. 500");
      cy.wrap(productOne).find(".cart_quantity").should("contain", "1");
      cy.wrap(productOne)
        .find(".cart_total_price")
        .should("contain", "Rs. 500");
    });

    cy.get("#product-2").then((productTwo) => {
      cy.wrap(productTwo)
        .find('[href="/product_details/2"]')
        .should("contain", "Men Tshirt");
      cy.wrap(productTwo).find(".cart_price").should("contain", "Rs. 400");
      cy.wrap(productTwo).find(".cart_quantity").should("contain", "1");
      cy.wrap(productTwo)
        .find(".cart_total_price")
        .should("contain", "Rs. 400");
    });
  });
}

describe("Add products to Cart", () => {
  it("Add products to Cart", () => {
    addProductsToCart();
  });
});
