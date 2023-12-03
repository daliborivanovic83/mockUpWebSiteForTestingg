describe("POST To All Products List", () => {
  it("Post request product list", () => {
    cy.request({
      method: "POST",
      url: "https://automationexercise.com/api/productsList",
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      cy.log(JSON.parse(response.body));
      const data = JSON.parse(response.body);
      expect(response.status).to.eq(200);

      expect(data.responseCode).to.eq(405);
      expect(data.message).to.eq("This request method is not supported.");
    });
  });
});
