function visitHomePage() {
  cy.visit("http://automationexercise.com");
  cy.get('[href="/"]').should("contain", " Home");
}

const addProductsToCartOneByOne = () => {
  cy.get("#search_product").type("dress").get("#submit_search").click();
  cy.get(".features_items").should("contain", "Searched Products");

  ///dodati for loop koji se ponavlja sest puta posle search button od 0 do 6
  for (
    let numberOfTheProduct = 0;
    numberOfTheProduct < 6;
    numberOfTheProduct++
  ) {
    cy.get(".single-products").then((slider) => {
      cy.wrap(slider).eq(numberOfTheProduct).invoke("mouseenter");
      cy.wrap(slider)
        .eq(numberOfTheProduct)
        .contains("Add to cart")
        .click()
        .wait(3000);
      cy.get(".modal-content").contains("Continue Shopping").click();
    });
  }
};

function checkItemsInContainer() {
  cy.get(".container").contains(" Cart").click();

  cy.get("#cart_info")
    .contains("Sleeveless Dress")
    .should("contain", "Sleeveless Dress");
  cy.get("#cart_info")
    .contains("Stylish Dress")
    .should("contain", "Stylish Dress");
  cy.get("#cart_info")
    .contains("Sleeves Top and Short - Blue & Pink")
    .should("contain", "Sleeves Top and Short - Blue & Pink");
  cy.get("#cart_info")
    .contains("Sleeveless Unicorn Patch Gown - Pink")
    .should("contain", "Sleeveless Unicorn Patch Gown - Pink");
  cy.get("#cart_info")
    .contains("Cotton Mull Embroidered Dress")
    .should("contain", "Cotton Mull Embroidered Dress");
  cy.get("#cart_info")
    .contains("Blue Cotton Indie Mickey Dress")
    .should("contain", "Blue Cotton Indie Mickey Dress");
}

function signInWithoutVisitingHomePage(email, password) {
  cy.get(".container")
    .find(".login-form")
    .then((formLogin) => {
      cy.wrap(formLogin)
        .get(".login-form")
        .find('[placeholder="Email Address"]')
        .type(email);
      cy.wrap(formLogin)
        .get(".login-form")
        .find('[placeholder="Password"]')
        .type(password);

      cy.get(".login-form").find('[action="/login"]').submit().wait(2000);
    });
}

describe("Search products and Verify cart after login", () => {
  it("Search Products and Verify Cart After Login", () => {
    visitHomePage();
    cy.get('[href="/products"]').click();
    cy.get(".features_items").should("contain", "All Products");

    addProductsToCartOneByOne();

    checkItemsInContainer();
    cy.get(".container").contains(" Signup / Login").click();
    signInWithoutVisitingHomePage("suzie@gmail.com", "Aurora"); /// use an exisiting userName password is the same
    checkItemsInContainer();
  });
});
