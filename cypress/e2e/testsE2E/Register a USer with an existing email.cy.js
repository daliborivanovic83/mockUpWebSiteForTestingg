function fillInSignUpData(email) {
  cy.visit("http://automationexercise.com");
  cy.get("a").contains(" Signup / Login").click();
  cy.get("button").contains("Signup");
  cy.get(".container")
    .find(".signup-form")
    .then((SignUp) => {
      cy.wrap(SignUp)
        .get(".signup-form")
        .find('[placeholder="Email Address"]')
        .type(email);
      cy.wrap(SignUp)
        .get(".signup-form")
        .find('[placeholder="Name"]')
        .type("Dalibor");

      cy.get(".signup-form").find('[action="/signup"]').submit().wait(2000);

      cy.get(".signup-form")
        .contains("Email Address already exist!")
        .should("contain", "Email Address already exist!");
    });
}

describe("Register a User with an exisiting email", () => {
  it("Register a user with an existing email", () => {
    fillInSignUpData("daba911@gmail.com");
  });
});
