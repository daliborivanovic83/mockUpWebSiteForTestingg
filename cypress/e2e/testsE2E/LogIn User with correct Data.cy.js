function createAccountAndLogOut(email, name) {
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
          cy.get("#header").find(".container").contains("Logout").click();
        });
    });
}

describe("login With correct data", () => {
  it("Login User with correct email and password", () => {
    createAccountAndLogOut("daba111@gmail.com", "dalibor");
    ////creating a new account
    cy.visit("http://automationexercise.com");

    cy.get(".container").should("contain", "Home");
    cy.get(".container").contains(" Signup / Login").click();

    cy.get(".container")
      .find(".login-form")
      .then((formLogin) => {
        cy.wrap(formLogin)
          .get(".login-form")
          .find('[placeholder="Email Address"]')
          .type("daba111@gmail.com");
        cy.wrap(formLogin)
          .get(".login-form")
          .find('[placeholder="Password"]')
          .type("Aurora");

        cy.get(".login-form").find('[action="/login"]').submit().wait(2000);

        cy.get("#header")
          .find(".container")
          .contains("Logged in as ")
          .should("contain", "Logged in as ");
        cy.get("#header")
          .find(".container")
          .should("contain", "Delete Account");
        cy.get("#header").find(".container").contains("Delete Account").click();
      });
  });
});
