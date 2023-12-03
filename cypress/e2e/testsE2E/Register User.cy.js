describe("SignUpTests", () => {
  it("Fill in the Sign up form ", () => {
    cy.visit("http://automationexercise.com");
    cy.get("h2").contains("Category");

    cy.get("a").contains(" Signup / Login").click();
    cy.get("button").contains("Signup");
  });

  it("fill in the sign up", () => {
    cy.visit("https://automationexercise.com/login");
    cy.get("#form")
      .find(".signup-form")
      .then((form) => {
        cy.wrap(form)
          .find('[placeholder="Email Address"]')
          .type("daba0000@gmail.com");
        ////change the email adress for every test run
        cy.wrap(form).find('[placeholder="Name"]').type("Dabaaaaaa");

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
            cy.get(".login-form")
              .find('[action="/signup"]')
              .submit()
              .wait(2000);
            cy.get("#form").find(".container").should("contain", "Continue");
            cy.get("#form").find(".container").contains("Continue").click();

            cy.get("#header")
              .find(".container")
              .should("contain", " Logged in as ");

            cy.get("#header")
              .find(".container")
              .contains(" Delete Account")
              .click();

            cy.get(".container").should("contain", "Account Deleted!");
            cy.get(".pull-right").contains("Continue").click();
          });
      });
  });
});
