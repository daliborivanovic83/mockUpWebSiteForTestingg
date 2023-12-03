describe("PUT To All Brand List", () => {
  it("PUT request product list", () => {
    cy.request({
      method: "PUT",
      url: "https://automationexercise.com/api/brandsList",
    }).then((response) => {
      expect(response.status).to.eq(200);

      cy.log(JSON.stringify(response.body));
      cy.log(JSON.parse(response.body));
      const data = JSON.parse(response.body);

      expect(data.responseCode).to.eq(405);
      expect(data.message).to.eq("This request method is not supported.");
    });
  });
});
