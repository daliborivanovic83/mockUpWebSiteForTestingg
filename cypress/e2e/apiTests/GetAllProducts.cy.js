describe("Get all Products list", () => {
  it.only("get all Products list", () => {
    cy.request({
      method: "GET",
      url: "https://automationexercise.com/api/productsList",
      failOnStatusCode: false,
    }).as("productsList");

    cy.get("@productsList").its("status").should("eq", 200);
    cy.get("@productsList").then((response) => {
      cy.log(JSON.stringify(response.body));
      cy.log(JSON.parse(response.body));
      const data = JSON.parse(response.body);
      expect(data.responseCode).to.eq(200);
      expect(data.products[0].id).to.eq(1);
      expect(data.products[0].name).to.eq("Blue Top");
      expect(data.products[0].price).to.eq("Rs. 500");
      expect(data.products[0].brand).to.eq("Polo");
      expect(data.products[0].category.usertype.usertype).to.eq("Women");
      expect(data.products[0].category.category).to.eq("Tops");
    });
  });
});
