function visitHomePage() {
  cy.visit("http://automationexercise.com");
  cy.get('[href="/"]').should("contain", " Home");
}

const addProductsToCart = () => {
  cy.visit("http://automationexercise.com"),
    cy.get(".container").contains("Home"),
    cy.get(".container").contains("Products").click(),
    cy.get(".single-products").then((slider) => {
      cy.wrap(slider).first().invoke("mouseenter");
      cy.wrap(slider).first().contains("Add to cart").click();
      cy.get(".modal-content").contains("Continue Shopping").click();

      cy.wrap(slider).eq(1).invoke("mouseenter");
      cy.wrap(slider).eq(1).contains("Add to cart").click();
      cy.get(".modal-content").contains("Continue Shopping").click();
      cy.get(".container").contains("Cart").should("contain", "Cart").click();
    });
};

describe("Remove products from cart", () => {
  it("Remove Products From Cart", () => {
    visitHomePage();
    addProductsToCart();

    cy.get("#product-1").find(".cart_quantity_delete").first().click();
    cy.get("#product-2").find(".cart_quantity_delete").click();
    cy.get(".container").should("not.contain.class", ".cart_quantity_delete");
  });
});
