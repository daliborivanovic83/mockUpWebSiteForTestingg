describe("Verify test cases Page", () => {
  it("verification test cases Page", () => {
    cy.visit("http://automationexercise.com");
    cy.get(".container").contains(" Test Cases").click();
    cy.get(".container").contains("Test Cases").should("contain", "Test Cases");
  });
});
