describe("Login in with incorrect data", () => {
  it("verify login with the wrong user name", () => {
    cy.visit("http://automationexercise.com");
    cy.get(".container").contains("Home");
    cy.get(".container").contains(" Signup / Login").click();

    cy.get(".container")
      .find(".login-form")
      .then((formLogin) => {
        cy.wrap(formLogin)
          .get(".login-form")
          .find('[placeholder="Email Address"]')
          .type("dalibori@gmail.com");
        cy.wrap(formLogin)
          .get(".login-form")
          .find('[placeholder="Password"]')
          .type("Aurora19");
        cy.get(".login-form").find('[action="/login"]').submit().wait(2000);
        cy.get(".login-form")
          .find('[action="/login"]')
          .contains("Your email or password is incorrect!")
          .should("contain", "Your email or password is incorrect!");
      });
  });
});
