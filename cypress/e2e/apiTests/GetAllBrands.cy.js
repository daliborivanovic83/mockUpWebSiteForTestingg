describe("Get all Brands", () => {
  it.only("get all Brands list", () => {
    cy.request({
      method: "GET",
      url: "https://automationexercise.com/api/brandsList",
      failOnStatusCode: false,
    }).as("allBrands");

    cy.get("@allBrands").its("status").should("eq", 200);

    cy.get("@allBrands").its("status").should("eq", 200);
    cy.get("@allBrands").then((response) => {
      cy.log(JSON.stringify(response.body));
      cy.log(JSON.parse(response.body));
      const data = JSON.parse(response.body);
      expect(data.responseCode).to.eq(200);
      expect(data.brands[0].id).to.eq(1);
      expect(data.brands[0].brand).to.eq("Polo");
    });
  });
});
