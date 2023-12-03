function verifySubscription() {
  cy.visit("http://automationexercise.com");
  cy.get(".container").contains("Cart").should("contain", "Cart").click();

  cy.get(".container")
    .find(".single-widget")
    .contains("Subscription")
    .should("contain", "Subscription");
  cy.get(".container")
    .find(".single-widget")
    .get("#susbscribe_email")
    .type("dabaaa@gmail.com");

  cy.get(".searchform").submit();
  cy.get("#success-subscribe")
    .contains("You have been successfully subscribed!")
    .should("contain", "You have been successfully subscribed!");
}

describe("Verify subscription home Page", () => {
  it("Verify subscription in Home Page", () => {
    verifySubscription();
  });
});
