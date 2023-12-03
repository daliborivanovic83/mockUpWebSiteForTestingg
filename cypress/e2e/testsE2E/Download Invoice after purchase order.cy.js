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

function createAccount(email, name) {
  cy.visit("http://automationexercise.com"),
    cy.get(".container").contains("Home");
  cy.get(".container").contains(" Signup / Login").click();
  cy.get("#form")
    .find(".signup-form")
    .then((form) => {
      cy.wrap(form).find('[placeholder="Email Address"]').type(email);
      cy.wrap(form).find('[placeholder="Name"]').type(name);
      cy.get(".signup-form").find("form").submit();
      cy.get("#form")
        .find(".login-form")
        .then((formSignIn) => {
          cy.wrap(formSignIn).find("#id_gender1").check({ force: true });
          cy.wrap(formSignIn).find("#password").type("Aurora");
          cy.wrap(formSignIn).find("#days").select(15);
          cy.wrap(formSignIn).find("#months").select("December");
          cy.wrap(formSignIn).find("#years").select("1983");
          cy.wrap(formSignIn).find("#newsletter").check({ force: true });
          cy.wrap(formSignIn).find("#optin").check({ force: true });
          cy.wrap(formSignIn).find("#first_name").type("Dalibor");
          cy.wrap(formSignIn).find("#last_name").type("Ivanovic");
          cy.wrap(formSignIn).find("#company").type("2branddesign");
          cy.wrap(formSignIn).find("#address1").type("Oplenacka 1");
          cy.wrap(formSignIn).find("#address2").type("Cajkina 1");
          cy.wrap(formSignIn).find("#country").select("Singapore");
          cy.wrap(formSignIn).find("#state").type("Serbia");
          cy.wrap(formSignIn).find("#city").type("Krusevac");
          cy.wrap(formSignIn).find("#zipcode").type(37000);
          cy.wrap(formSignIn).find("#mobile_number").type(18666493030);
          cy.get(".login-form").find('[action="/signup"]').submit().wait(2000);
          cy.get("#form").find(".container").contains("Continue").click();
          cy.get("#header")
            .find(".container")
            .should("contain", " Logged in as ");
          // cy.get("#header")
          // .find(".container")
          // .contains(" Delete Account")
          // .click();
          // cy.get(".container").contains("Account Deleted!");
          // cy.get(".pull-right").contains("Continue").click();
        });
    });
}

function fillThePaymentForm() {
  cy.get(".container").find(".heading").should("contain", "Payment");

  cy.get("#payment-form").then((paymentForm) => {
    cy.wrap(paymentForm).find('[name="name_on_card"]').type("Dalibor Ivanovic");
    cy.wrap(paymentForm).find('[name="card_number"]').type("123456789101112");
    cy.wrap(paymentForm).find('[name="cvc"]').type("553");
    cy.wrap(paymentForm).find('[name="expiry_month"]').type("10");

    cy.wrap(paymentForm).find('[name="expiry_year"]').type("2027");
    cy.wrap(paymentForm)
      .find("#submit")
      .click()
      .wait(2000)
      .get(".container")
      .should("contain", "Order Placed!");
  });
}

describe("Download Invoice after purchase order", () => {
  it("Download Invoice after purchase order", () => {
    visitHomePage();
    addProductsToCart();
    createAccount("a45r@gmail.com", "Aurora");
    cy.get(".container").contains(" Cart").click();
    cy.get(".container").contains("Proceed To Checkout").click();
    cy.get("#address_delivery")
      .contains("Oplenacka 1")
      .invoke("text")
      .as("adressOne");
    cy.get("#address_invoice")
      .contains("Oplenacka 1")
      .invoke("text")
      .as("adressTwo");
    cy.get("@adressOne")
      .then((adressOne) => {
        cy.get("@adressTwo").then((adressTwo) => {
          expect(adressTwo).to.eq(adressOne);
        });
      })
      .get(".form-control")
      .type("My comment")
      .get('[href="/payment"]')
      .contains("Place Order")
      .click()
      .wait(3000);

    fillThePaymentForm();
    cy.get(".container").should("contain", "Order Placed!");
    cy.get(".container").should("contain", "Download Invoice");
    cy.downloadFile(
      "https://www.automationexercise.com/download_invoice/1400",
      "cypress/downloads",
      "invoice.txt"
    );
    cy.readFile("cypress/downloads/invoice.txt").should(
      "contain",
      "Hi Dalibor Ivanovic, Your total purchase amount is 1400. Thank you"
    );
    cy.get(".container").contains("Continue");
    cy.get('[href="/delete_account"]').click();
    cy.get(".container").should("contain", "Account Deleted!");
  });
});
