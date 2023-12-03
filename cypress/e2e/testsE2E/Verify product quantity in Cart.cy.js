function verifyQuantity() {
  cy.visit("http://automationexercise.com");
  cy.get(".container").contains("Home").should("contain", "Home");
  cy.get(".container").contains("Products").click();

  cy.get('[href="/product_details/1"]').contains("View Product").click();
  cy.get(".container").find(".active").should("contain", "Write Your Review");
  cy.get(".container")
    .find("#quantity")
    .clear()
    .type("4")
    .get(".container")
    .contains("Add to cart")
    .click()
    .wait(2000)
    .get(".modal-body")
    .find('[href="/view_cart"]')
    .click();

  cy.get("#product-1").then((productOne) => {
    cy.wrap(productOne)
      .find('[href="/product_details/1"]')
      .should("contain", "Blue Top");
    cy.wrap(productOne).find(".cart_price").should("contain", "Rs. 500");
    cy.wrap(productOne).find(".cart_quantity").should("contain", "4");
    cy.wrap(productOne).find(".cart_total_price").should("contain", "Rs. 2000");
  });
}

describe("Verify quantity in Cart", () => {
  it("Verify product quantity in cart", () => {
    verifyQuantity();
  });
});
