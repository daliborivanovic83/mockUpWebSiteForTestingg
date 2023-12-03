describe("Get all products list first model", () => {
  it("Get request all products list", () => {
    cy.request({
      method: "GET",
      url: "https://automationexercise.com/api/productsList",
    }).then((response) => {
      //Asserting the status code to be 200 for successful response
      expect(response.status).to.eq(200);
    });

    cy.request("https://automationexercise.com/api/productsList")
      .its("body")
      .should("include", "id")
      .should("include", "name")
      .should("include", "price")
      .should("include", "brand");
  });
});
